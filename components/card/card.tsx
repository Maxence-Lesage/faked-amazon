import styled from "@emotion/styled";
import { ImageProps } from "next/image";
import SliderCard from "../home-cards-grid/grid_slider";

interface Props {
    title?: string,
    type?: "basic" | "slide",
    content?: string,
}

const Container = styled("div")<{ type: string }>(({ type }) => ({
    width: type === "slide" ? "100%" : "auto",
    height: type === "slide" ? "280px" : "420px",
    backgroundColor: "var(--color-light)",
    gridColumn: type === "slide" ? "1 / -1" : "auto",
    padding: type === "slide" ? "10px 20px" : "20px 20px 15px 20px",
}))

const Title = styled("h2")({
    color: "var(--color-primary)",
    fontSize: "22px",
    fontWeight: 700,
})

export default function Card({ title, type = "basic", content }: Props) {
    return (
        <Container type={type}>
            <Title>{title}</Title>
        </Container>
    )
}