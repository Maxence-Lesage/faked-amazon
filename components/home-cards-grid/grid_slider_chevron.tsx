import styled from "@emotion/styled";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled("div")<{ direction: string }>(({ direction }) => ({
    position: "absolute",
    top: "50%",
    transform: direction === "right" ? "rotate(180deg) translateY(50%)" : "translateY(-50%)",
    right: direction === "right" ? "0" : "auto",
    height: "100px",
    width: "45px",
    backgroundColor: "var(--color-light)",
    opacity: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 5px 5px 0",
    boxShadow: "gray 1px 1px 4px 1px",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    "&:hover": {
        cursor: "pointer",
        "& svg": {
            color: "var(--color-background-nav-light)",
        }
    }
}))

const Icon = styled(FontAwesomeIcon)({
    height: "27px",
    color: "gray",
    transition: "all 0.2s ease-in-out",
})

export default function GridSliderChevron({ direction }: { direction: "left" | "right" }) {
    return (
        <Container className="grid-slider-chevron" direction={direction}>
            <Icon icon={faChevronLeft} />
        </Container>
    )
}