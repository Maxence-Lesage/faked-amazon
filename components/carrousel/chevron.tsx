import styled from "@emotion/styled";

const Container = styled('div')({
    height: '40px',
    width: '40px',
})

const Arrow = styled('div')<{ direction: string }>(({ direction }) => ({
    width: '100%',
    height: '100%',
    transform: direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)',
}))

const ArrowBlack = styled('div')({
    "&::before": {
        position: 'absolute',
        content: '""',
        height: '22px',
        width: '2px',
        backgroundColor: 'black',
        transform: 'rotate(45deg) translate(-3px, 1.5px)',
    },
    "&::after": {
        position: 'absolute',
        content: '""',
        height: '22px',
        width: '2px',
        backgroundColor: 'black',
        transform: 'rotate(-45deg) translate(-12px, 7.5px)',
    }
})

const ArrowWhite = styled('div')({
    "&::before": {
        position: 'absolute',
        content: '""',
        height: '20px',
        width: '2px',
        backgroundColor: 'white',
        transform: 'rotate(45deg)',
    },
    "&::after": {
        position: 'absolute',
        content: '""',
        height: '20px',
        width: '2px',
        backgroundColor: 'white',
        transform: 'rotate(-45deg) translate(-10px, 10px)',
    }
})

export default function Chevron({ direction }: { direction: 'left' | 'right' }) {

    return (
        <Container>
            <Arrow direction={direction}>
                <ArrowBlack />
                <ArrowWhite />
            </Arrow>
        </Container>
    )
}