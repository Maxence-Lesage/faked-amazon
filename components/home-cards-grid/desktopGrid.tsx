import styled from "@emotion/styled";
import Card from "../card/card";

const Container = styled("div")({
    position: "relative",
    display: "grid",
    marginTop: "-450px",
    gridTemplateColumns: "repeat(auto-fill, minmax(23%, auto))",
    width: "100%",
    justifyContent: "center",
    padding: "0 20px 20px 20px",
    gap: "25px 1.75%",
    zIndex: 50,
    "@media (max-width: 1200px)": {
        gridTemplateColumns: "repeat(auto-fill, minmax(31.33%, auto))",
        gap: "25px 2%",
        padding: "0 10px 20px 10px",
        "& > div:nth-of-type(15)": {
            display: "none",
        },
        "& > div:nth-of-type(21)": {
            display: "none",
        },
        "& > div:nth-of-type(27)": {
            display: "none",
        },
    },
    "@media (max-width: 1000px)": {
        display: "none",
    },
    "@media (min-width: 1200px)": {
        "& > div:nth-of-type(9)": {
            display: "none",
        }
    },
})

export default function DesktopGrid() {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card type="slide" />
            <Card type="slide" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card type="slide" />
            <Card type="slide" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card type="slide" />
            <Card type="slide" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card type="slide" />
        </Container>
    )
}