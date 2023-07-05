import styled from "@emotion/styled";
import CarrouselContent from "./carrousel_content";
import CarrouselChevron from "./carrousel_chevron";
import { useState } from "react";

const CarrouselContainer = styled('div')({
    position: 'relative',
    height: '500px',
    width: '120%',
    "&::after": {
        position: 'absolute',
        content: '""',
        top: '50%',
        left: '0',
        width: '100%',
        height: '50%',
        background: "linear-gradient(-180deg, rgba(234, 237, 237, 0), var(--color-page-background))",
    }
})

export default function Carrousel() {

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState("none");



    return (
        <CarrouselContainer>
            <CarrouselChevron type="left" current={current} setCurrent={setCurrent} setDirection={setDirection} />
            <CarrouselChevron type="right" current={current} setCurrent={setCurrent} setDirection={setDirection} />
            <CarrouselContent current={current} setCurrent={setCurrent} direction={direction} setDirection={setDirection} />
        </CarrouselContainer>
    )
}