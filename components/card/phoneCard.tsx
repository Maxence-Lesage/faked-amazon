import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";
import SliderCard from "../home-cards-grid/grid_slider";
import Link from "next/link";

interface Props {
    title?: string,
    number: number,
}

const Container = styled("div")<{ number: number }>(({ number }) => ({
    display: "grid",
    gridTemplateRows: 'auto 1fr auto',
    width: "auto",
    maxWidth: "500px",
    margin: "0px auto",
    minHeight: number !== 0 ? "420px" : "fit-content",
    height: number !== 0 ? "auto" : "fit-content",
    backgroundColor: "var(--color-light)",
    padding: "20px 20px 15px 20px",

}))

const Title = styled("h2")({
    color: "var(--color-primary)",
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "20px",
})

const ImageStyled = styled(Image)({
    objectFit: "cover",
})

const SeeMore = styled(Link)({
    marginTop: "20px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--color-href)",
    "&:hover": {
        textDecoration: "underline",
        color: "var(--color-href-hover)",
    }
})

const Content = styled("div")({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
})

const Content2 = styled("div")({
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: "15px",
    height: "100%",
    width: "100%",
    "& img": {
        width: "100%",
        aspectRatio: "1/.5",
        objectFit: "cover",
    },
})

const Content4 = styled("div")({
    display: "grid",
    position: "relative",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    width: "100%",
    "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
})

export default function PhoneCard({ title, number }: Props) {

    let content;

    if (number === 0) {
        content = (
            <>
                <SeeMore href="/">Se connecter</SeeMore>
            </>
        )
    }

    if (number === 1) {
        content = (
            <>
                <Content>
                    <ImageStyled src="/images/placeholder.png" alt="placeholder" fill />
                </Content>
                <SeeMore href="/">Voir plus</SeeMore>
            </>
        )
    }

    if (number === 2) {
        content = (
            <>
                <Content2>
                    <img src="/images/placeholder.png" alt="placeholder" />
                    <img src="/images/placeholder.png" alt="placeholder" />
                </Content2>
                <SeeMore href="/">Voir plus</SeeMore>
            </>
        )
    }

    if (number === 4) {
        content = (
            <>
                <Content4>
                    <img src="/images/placeholder.png" alt="placeholder" />
                    <img src="/images/placeholder.png" alt="placeholder" />
                    <img src="/images/placeholder.png" alt="placeholder" />
                    <img src="/images/placeholder.png" alt="placeholder" />
                </Content4>
                <SeeMore href="/">Voir plus</SeeMore>
            </>
        )
    }

    return (
        <Container number={number}>
            <Title>{title}</Title>
            {content}
        </Container>
    )
}