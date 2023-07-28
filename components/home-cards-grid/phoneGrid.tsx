import styled from "@emotion/styled";
import GridSlider from "./grid_slider";
import PhoneCard from "../card/phoneCard";

const Container = styled("div")({
    position: "relative",
    display: "none",
    marginTop: "-345px",
    gridTemplateColumns: "repeat(auto-fill, minmax(100%, auto))",
    width: "100%",
    justifyContent: "center",
    zIndex: 50,
    "@media (max-width: 1000px)": {
        display: "grid",
    },
    "@media (max-width: 768px)": {
        marginTop: "-150px",
    },
    "@media (max-width: 480px)": {
        marginTop: "-80px",
    },
    paddingBottom: "40px",
    "& :first-of-type": {
    }
})

const Separator = styled("div")({
    height: "2px",
    width: "100%",
    backgroundColor: "--color-button-native-dark",
})

export default function PhoneGrid() {
    return (
        <Container>
            <GridSlider id={1} type="mini" />
            <PhoneCard title="Offre star" number={4} />
            <Separator />
            <PhoneCard title="Offre star" number={4} />
            <Separator />
            <PhoneCard title="Offre star" number={4} />
        </Container>
    )
}