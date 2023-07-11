import styled from "@emotion/styled";
import Card from "../card/card";
import Image, { ImageProps } from "next/image";
import { apiGetSingleCategory } from "@/api/ressources";
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
            <Card title="Offre star" />
            <Card title="Les top catégories" />
            <Card title="Idées cuisine et maison" />
            <Card title="Identifiez-vous pour une meilleure expérience" />
            <Card title="Barbecue et repas en extérieur" />
            <Card title="Sélection de produits remis à neuf" />
            <Card title="Découvrez nos produits fabriqués en France" />
            <Card title="Visitez l'entrepôt robotisé d'Augny" />
            <Card title="Mieux pour la planète - Renouvelé" />
            <GridSlider id={1} />
            <GridSlider id={2} />
            <Card title="Caméra" />
            <Card title="Puériculture" />
            <Card title="Découvrez des marques émergentes" />
            <Card title="Nouvelles marques" />
            <GridSlider id={3} />
            <GridSlider id={4} />
            <Card title="Jeux vidéo" />
            <Card title="Régulièrement achetés dans Épicerie" />
            <Card title="Bonnes affaires sur la mode" />
            <Card title="High-tech" />
            <GridSlider id={5} />
            <GridSlider id={6} />
            <Card title="20% de réduction sur les produits d'occasion" />
            <Card title="Jardin" />
            <Card title="Tech" />
            <Card title="Logiciels" />
            <GridSlider id={7} />
        </Container>
    )
}