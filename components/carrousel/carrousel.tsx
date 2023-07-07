import styled from "@emotion/styled";
import CarrouselContent from "./carrousel_content";

const CarrouselContainer = styled('div')({
    position: 'relative',
    height: '500px',
    width: '100%',
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

    return (
        <CarrouselContainer>
            <CarrouselContent />
        </CarrouselContainer>
    )
}