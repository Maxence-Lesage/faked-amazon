import styled from "@emotion/styled";
import Chevron from "./chevron";

const ChevronLeft = styled('div')({
    position: 'absolute',
    top: '0',
    left: '2px',
    zIndex: 1,
})

const ChevronRight = styled('div')({
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: 1,
})

const Container = styled('button')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
    width: '80px',
    backgroundColor: 'transparent',
    border: 'solid 3px transparent',
    borderRadius: '4px',
    marginTop: '3px',

    "&:hover": {
        cursor: 'pointer',
    },
    "&:focus": {
        outline: 'solid var(--color-light) 3px',
        borderColor: 'var(--color-chevron-border)',
    },
    "@media (hover: none)": {
        display: 'none',
    }

})

export default function CarrouselChevron({ type, click }: { type: string, click: Function }) {

    return (
        <>
            {
                type === 'left' ?
                    <ChevronLeft>
                        <Container onClick={() => click("prev")}>
                            <Chevron direction="left" />
                        </Container>
                    </ChevronLeft>
                    :
                    <ChevronRight>
                        <Container onClick={() => click("next")}>
                            <Chevron direction="right" />
                        </Container>
                    </ChevronRight>
            }
        </>
    )
}