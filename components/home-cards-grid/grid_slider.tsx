import styled from "@emotion/styled";
import json from "../../api/gridSlider.json";
import Link from "next/link";
import Image from "next/image";
import GridSliderChevron from "./grid_slider_chevron";
import { useRef } from "react";

interface Ids {
    readonly 1: string,
    readonly 2: string,
    readonly 3: string,
    readonly 4: string,
    readonly 5: string,
    readonly 6: string,
    readonly 7: string,
}

const Container = styled("div")({
    width: "100%",
    height: "fit-content",
    backgroundColor: "var(--color-light)",
    gridColumn: "1 / -1",
    padding: "20px 20px 10px 20px",
})

const Title = styled("h2")({
    display: "inline",
    color: "var(--color-primary)",
    fontSize: "22px",
    fontWeight: 700,
})

const SeeMore = styled(Link)({
    marginLeft: "20px",
    fontSize: "15px",
    color: "var(--color-href)",
    "&:hover": {
        textDecoration: "underline",
        color: "var(--color-href-hover)",
    }
})

const Carousel = styled("div")({
    position: "relative",
    display: "flex",
    height: "fit-content",
    width: "100%",
    marginTop: "15px",
    overflowX: "hidden",
    gap: "8px",
    "&:hover .grid-slider-chevron": {
        opacity: "0.8",
    }
})

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

export default function GridSlider({ id }: { id: keyof Ids }) {

    const scrollBarRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const data = json[id];
    const title = data.title;
    const link = data.link || null;
    const articles = data.articles;
    const articlesList = articles.map((article, id) => {
        return <Link key={id} href={article.link}><Image key={id} src={"/" + article.src} alt={article.alt} width={200} height={200} /></Link>
    })

    let initialMousePosition = 0;
    let minWidth = 0;
    let maxWidth = 0;
    let scrollBarWidth = 233;

    if (carouselRef.current != null && scrollBarRef.current != null) {
        minWidth = Math.round(carouselRef.current.getBoundingClientRect().left);
        maxWidth = Math.round(carouselRef.current.getBoundingClientRect().right);
        scrollBarWidth = Math.round(scrollBarRef.current.getBoundingClientRect().width);
    }

    let plus = 0;

    function barFocus(e: any) {
        initialMousePosition = e.clientX;
        window.addEventListener("mousemove", scroll);
        window.addEventListener("mouseup", reset);
        document.body.style.userSelect = "none";
        if (scrollBarRef.current) {
            const scrollBarPosLeft = Math.round(scrollBarRef.current.getBoundingClientRect().left);
            plus = initialMousePosition - scrollBarPosLeft;
        }
    }

    let amount = 0;

    function addTranslate(x: number) {
        if (scrollBarRef.current) {
            scrollBarRef.current.style.transform = "translateX(" + x + "px)";
        }
    }

    function scroll(e: any) {
        if (initialMousePosition !== 0) {
            const newPos = e.clientX;
            if (scrollBarRef.current) {
                // const scrollBarPosLeft = Math.round(scrollBarRef.current.getBoundingClientRect().left);
                // const scrollBarPosRight = Math.round(scrollBarRef.current.getBoundingClientRect().right);
                // if ((scrollBarPosLeft + newPos - initialMousePosition) >= minWidth && (scrollBarPosRight + newPos - initialMousePosition) <= maxWidth) {
                amount += ((newPos - minWidth) - amount - plus);
                addTranslate(amount);
                // }
            }
        }
    }

    function reset() {
        initialMousePosition = 0;
        window.removeEventListener("mousemove", scroll);
        window.removeEventListener("mouseup", reset);
        document.body.style.userSelect = "auto";
    }

    return (
        <Container>
            <Title>{title}</Title>
            {link && <SeeMore href={link}>Voir plus</SeeMore>}
            <Carousel ref={carouselRef}>
                {articlesList}
                <GridSliderChevron direction="left" />
                <GridSliderChevron direction="right" />
            </Carousel>
            <ScrollBarContainer>
                <ScrollBar ref={scrollBarRef} onMouseDown={(e) => barFocus(e)} />
            </ScrollBarContainer>
        </Container>
    )
}