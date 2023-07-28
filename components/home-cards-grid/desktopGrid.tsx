import styled from "@emotion/styled";
import Card from "../card/card";
import GridSlider from "./grid_slider";

const Container = styled("div")({
    position: "relative",
    display: "grid",
    marginTop: "-345px",
    gridTemplateColumns: "repeat(auto-fill, minmax(23%, auto))",
    width: "100%",
    justifyContent: "center",
    padding: "0 20px 20px 20px",
    gap: "25px 1.75%",
    zIndex: 50,
    "@media (max-width: 1200px)": {
        gridTemplateColumns: "repeat(auto-fill, minmax(31.33%, auto))",
        gap: "20px 2%",
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
            <Card title="Offre star" number={4} />
            <Card title="Les top catégories" number={2} />
            <Card title="Idées cuisine et maison" number={1} />
            <Card title="Identifiez-vous pour une meilleure expérience" number={0} />
            <Card title="Barbecue et repas en extérieur" number={4} />
            <Card title="Sélection de produits remis à neuf" number={1} />
            <Card title="Découvrez nos produits fabriqués en France" number={4} />
            <Card title="Visitez l'entrepôt robotisé d'Augny" number={4} />
            <Card title="Mieux pour la planète - Renouvelé" number={1} />
            <GridSlider id={1} />
            <GridSlider id={2} />
            <Card title="Caméra" number={4} />
            <Card title="Puériculture" number={4} />
            <Card title="Découvrez des marques émergentes" number={1} />
            <Card title="Nouvelles marques" number={4} />
            <GridSlider id={3} />
            <GridSlider id={4} />
            <Card title="Jeux vidéo" number={4} />
            <Card title="Régulièrement achetés dans Épicerie" number={1} />
            <Card title="Bonnes affaires sur la mode" number={4} />
            <Card title="High-tech" number={4} />
            <GridSlider id={5} />
            <GridSlider id={6} />
            <Card title="20% de réduction sur les produits d'occasion" number={4} />
            <Card title="Jardin" number={1} />
            <Card title="Tech" number={2} />
            <Card title="Logiciels" number={4} />
            <GridSlider id={7} />
        </Container>
    )
}