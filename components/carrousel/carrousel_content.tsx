import styled from "@emotion/styled";
import Image from "next/image";
import { useRef, useState, useEffect, Children } from "react";
import CarrouselChevron from "./carrousel_chevron";

const Content = styled('div')({
    width: '100%',
    height: '100%',
    position: 'relative',

    "& div:first-of-type": {
        overflow: 'hidden',
        maxWidth: '100%',
        margin: '0',
    }
})

const Carrousel = styled('ul')({
    position: "relative",
    width: "calc(100dvw * 7)",
    height: "500px",
    padding: "0",
    margin: "0",
    transitionDuration: '.5s',
    transitionProperty: 'transform',
})

const ImageContainer = styled('div')({
    height: '500px',
    width: 'calc(100% / 7)',
    transitionDuration: '.4s',
    transitionProperty: 'transform',
    listStyle: 'none',
    position: 'relative',
    float: 'left',
    transform: 'translateX(-100%)',
    "& img": {
        objectFit: 'cover',
        objectPosition: 'center top',
    }
})
export default function CarrouselContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const carrouselRef = useRef<HTMLUListElement>(null);

    let index = 0,
        amount = 0,
        currTransl = [] as number[],
        translationComplete = true,
        moveOffset = 0;

    const transitionCompleted = function () {
        translationComplete = true;
    }

    useEffect(() => {
        const handleLoad = () => {
            const carrouselContainer = containerRef.current;
            const carouselItem = carrouselRef.current;
            if (carrouselContainer && carouselItem) {
                amount = Array.from(carouselItem.children).length;
                moveOffset = parseInt(window.getComputedStyle(carrouselContainer).width, 10);
                carouselItem.style.width = (amount * moveOffset) + 'px';
                carouselItem.insertBefore(carouselItem.children[6], carouselItem.children[0])

                for (let i = 0; i < amount; i++) {
                    currTransl[i] = -moveOffset;
                    Array.from(carouselItem.children)[i].addEventListener("transitionend", transitionCompleted, true);
                }
            }
        }

        handleLoad();

    }, [])

    function moveCarousel(direction: string) {
        const carouselItem = carrouselRef.current;
        if (carouselItem) {
            const slides = Array.from(carouselItem.children);
            if (translationComplete === true) {
                translationComplete = false;
                if (direction === 'prev') {
                    index--;
                    if (index === -1) {
                        index = amount - 1;
                    }
                }
                const outerIndex = (index) % amount;
                if (direction === 'next') {
                    index++;
                }
                for (let i = 0; i < amount; i++) {
                    const slide = slides[i] as HTMLElement;
                    if (slide) {
                        slide.style.opacity = '1';
                        slide.style.transform = 'translateX(' + (currTransl[i] + (moveOffset * (direction === 'next' ? -1 : 1))) + 'px)';
                        currTransl[i] = currTransl[i] + (moveOffset * (direction === 'next' ? -1 : 1));
                    }
                }
                const outerSlide = slides[outerIndex] as HTMLElement;
                if (outerSlide) {
                    outerSlide.style.transform = 'translateX(' + (currTransl[outerIndex] - (moveOffset * amount * (direction === 'next' ? -1 : 1))) + 'px)';
                    outerSlide.style.opacity = '0';
                    currTransl[outerIndex] = currTransl[outerIndex] - (moveOffset * amount * (direction === 'next' ? -1 : 1));
                }
            }
        }
    }

    return (
        <Content ref={containerRef}>
            <div>
                <Carrousel ref={carrouselRef}>
                    <ImageContainer>
                        <Image src="/images/carrousel/one.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/two.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/three.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/four.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/five.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/six.jpg" alt="test" fill={true} />
                    </ImageContainer>
                    <ImageContainer>
                        <Image src="/images/carrousel/seven.jpg" alt="test" fill={true} />
                    </ImageContainer>
                </Carrousel>
            </div>
            <CarrouselChevron type="left" click={moveCarousel} />
            <CarrouselChevron type="right" click={moveCarousel} />
        </Content>
    )
}