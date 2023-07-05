import styled from "@emotion/styled";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Content = styled('div')({
    top: '0',
    left: '0',
    width: '120%',
    height: '200%',

    '& img': {
        transform: 'translateX(-10%)',
        objectFit: 'cover',
        objectPosition: "center top",
    }
})

const ImageContainer = styled(Image)({

})

const Carrousel = styled('div')<{ slideChange: string }>(({ slideChange }) => ({

    "& :nth-of-type(1)": {
        transition: slideChange === "none" ? "" : 'transform .5s ease-in-out',
        transform: slideChange === "none" ? 'translateX(-100%)'
            : slideChange === "left" ? 'translateX(0%)' : 'translateX(-100%)',
    },
    "& :nth-of-type(3)": {
        transition: slideChange === "none" ? "" : 'transform .5s ease-in-out',
        transform: slideChange === "none" ? 'translateX(0%)'
            : slideChange === "left" ? 'translateX(100%)' : 'translateX(-100%)',
    },
    "& :nth-of-type(2)": {
        transition: slideChange === "none" ? "" : 'transform .5s ease-in-out',
        transform: slideChange === "none" ? 'translateX(100%)'
            : slideChange === "left" ? 'translateX(100%)' : 'translateX(0%)',
    },
}))

const images = [
    <ImageContainer src="/images/carrousel/one.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/two.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/three.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/four.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/five.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/six.jpg" alt="test" fill={true} />,
    <ImageContainer src="/images/carrousel/seven.jpg" alt="test" fill={true} />,
]

export default function CarrouselContent({ current, setCurrent, direction, setDirection }: { current: number, setCurrent: Function, direction: string, setDirection: Function }) {

    const carrousel = useRef<HTMLDivElement>(null);
    const [carouselChildren, setCarouselChildren] = useState([
        images[6],
        images[1],
        images[0],
    ]);

    if (current < 0) setCurrent(images.length - 1);
    if (current > images.length - 1) setCurrent(0);

    // useEffect(() => {
    //     setCarouselChildren([
    //         images[current - 1],
    //         images[current],
    //         images[current + 1],
    //     ]);
    // }, [current])

    // updateCarouselChildren

    useEffect(() => {
        setTimeout(() => {
            setDirection("none");
            console.log(current - 1 < 0 ? images.length - 1 : current - 1);
            console.log(current);
            console.log(current + 1 > images.length - 1 ? 0 : current + 1);
            setCarouselChildren([
                images[current - 1 < 0 ? images.length - 1 : current - 1],
                images[current + 1 > images.length - 1 ? 0 : current + 1],
                images[current],
            ]);
        }, 500);
    }, [current])

    return (
        <Content>
            <Carrousel ref={carrousel} slideChange={direction}>
                {carouselChildren}
            </Carrousel>
        </Content>
    )
}