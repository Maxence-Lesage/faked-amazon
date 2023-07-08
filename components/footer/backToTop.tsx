import styled from "@emotion/styled";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopContainer = styled("a")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "65px",
    backgroundColor: "var(--color-background-nav-light)",
    "&:hover": {
        cursor: "pointer",
        opacity: ".85",
    }
})

const Text = styled("p")({
    color: "var(--color-light)",
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: ".5px",
    "@media (max-width: 480px)": {
        fontWeight: "700",
        fontSize: "14px",
        letterSpacing: "0px",
        marginTop: "5px",
    }
})

const LargeScreen = styled("div")({
    "@media (max-width: 480px)": {
        display: "none",
    }
})

const SmallScreen = styled("div")({
    display: "none",
    "@media (max-width: 480px)": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})

const CaretUp = styled(FontAwesomeIcon)({
    color: "var(--color-light-secondary)",
    height: "16px",
})

export default function BackToTop() {
    return (
        <BackToTopContainer href="#navbar">
            <LargeScreen>
                <Text>Retour en haut</Text>
            </LargeScreen>
            <SmallScreen>
                <CaretUp icon={faCaretUp} />
                <Text>HAUT DE LA PAGE</Text>
            </SmallScreen>
        </BackToTopContainer>
    )
}