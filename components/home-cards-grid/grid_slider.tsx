import styled from "@emotion/styled";
import json from "../../api/gridSlider.json";
import Link from "next/link";
import Image from "next/image";
import GridSliderChevron from "./grid_slider_chevron";
import { useRef, useState } from "react";

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
    position: "relative",
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
    height: "fit-content",
    width: "100%",
    marginTop: "15px",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    "&:hover .grid-slider-chevron": {
        opacity: "0.8",
    },
    "&::-webkit-scrollbar": {
        height: '7px',
    },

    "&::-webkit-scrollbar-track": {
        background: 'transparent',
    },

    "&::-webkit-scrollbar-thumb": {
        backgroundColor: 'white',
        borderRadius: '20px',
        border: 'none',
    },
    "&:hover::-webkit-scrollbar-thumb": {
        backgroundColor: 'var(--color-dark)',
    }
})

const CarouselWrapper = styled("div")({
    display: "flex",
    gap: "8px",
    width: "fit-content",
})

export default function GridSlider({ id }: { id: keyof Ids }) {

    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 624;

    const data = json[id];
    const title = data.title;
    const link = data.link || null;
    const articles = data.articles;
    const articlesList = articles.map((article, id) => {
        return <Link key={id} href={article.link}><Image key={id} src={"/" + article.src} alt={article.alt} width={200} height={200} /></Link>
    })

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= scrollAmount;
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <Container>
            <Title>{title}</Title>
            {link && <SeeMore href={link}>Voir plus</SeeMore>}
            <Carousel ref={carouselRef}>
                <CarouselWrapper>
                    {articlesList}
                </CarouselWrapper>
                <GridSliderChevron direction="left" onClick={handleScrollLeft} />
                <GridSliderChevron direction="right" onClick={handleScrollRight} />
            </Carousel>
        </Container>
    )
}