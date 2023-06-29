import styled from "@emotion/styled";

const Container = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    backgroundColor: "white",
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: 11,
    height: '100vh',
    width: '365px',
    transform: isBurgerOpen ? 'translateX(-100%)' : 'translateX(0%)',
    transition: 'transform 0.3s ease-in-out',
}))

const Window = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: isBurgerOpen ? 'none' : 'block',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: 10,
    cursor: 'initial',
    transition: 'transform 0.3s ease-in-out',
}))

const Cross = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: isBurgerOpen ? 'none' : 'block',
    position: 'absolute',
    left: '390px',
    top: '20px',
    zIndex: 11,
    backgroundColor: '#232F3E',
    height: '28px',
    "& > div:nth-of-type(1)": {
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
    },
    "& > div:nth-of-type(2)": {
        transform: 'rotate(-45deg) translateY(-2px)',
        transformOrigin: 'right',
    }
}))

const CrossLine = styled('div')({
    width: '28px',
    height: '2px',
    backgroundColor: 'white',
})

export default function Explore({ isOpened, setOpened }: { isOpened: boolean, setOpened: Function }) {

    const close = () => {
        setOpened();
    }

    return (
        <>
            <Container isBurgerOpen={isOpened}>
                <h1>Explore</h1>
            </Container>
            <Window isBurgerOpen={isOpened} onClick={close} />
            <Cross isBurgerOpen={isOpened}>
                <CrossLine />
                <CrossLine />
            </Cross>
        </>
    );
}