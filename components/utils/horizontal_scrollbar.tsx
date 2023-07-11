import styled from '@emotion/styled'
import { useRef } from 'react'

const ScrollBarContainer = styled("div")({
    width: "100%",
    marginTop: "5px",
})

const ScrollBar = styled("div")({
    height: "5px",
    width: "20%",
    backgroundColor: "gray",
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: "var(--color-primary)",
        cursor: "pointer",
    }
})

export default function HorizontalScrollBar({ minWidth, setAmount }: { minWidth: number, setAmount: Function }) {
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const scrollBarContainerRef = useRef<HTMLDivElement>(null);

    let initialMousePosition = 0;
    let scrollBarWidth = 0;
    let maxWidth = 0;
    let plus = 0;
    let amount = 0;

    function mouseDown(e: any) {
        initialMousePosition = e.clientX;
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
        document.body.style.userSelect = "none";

        if (scrollBarRef.current && scrollBarContainerRef.current) {
            scrollBarWidth = Math.round(scrollBarRef.current.getBoundingClientRect().width);
            plus = initialMousePosition - Math.round(scrollBarRef.current.getBoundingClientRect().left);
            maxWidth = Math.round(scrollBarContainerRef.current.getBoundingClientRect().width) - scrollBarWidth;
        }
    }

    function mouseMove(e: any) {
        const newPos = e.clientX;
        if (scrollBarRef.current) {
            const calculation = amount + ((newPos - minWidth) - amount - plus)
            if (calculation >= 0 && calculation <= (maxWidth)) {
                amount = calculation;
                scrollBarRef.current.style.transform = "translateX(" + amount + "px)";
                setAmount(Math.round(Math.round(scrollBarRef.current.getBoundingClientRect().left) / maxWidth * 100) - 4);
            }
        }
    }

    function mouseUp() {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
        document.body.style.userSelect = "auto";
    }

    return (
        <ScrollBarContainer ref={scrollBarContainerRef}>
            <ScrollBar ref={scrollBarRef} onMouseDown={(e) => mouseDown(e)} />
        </ScrollBarContainer>
    )
}