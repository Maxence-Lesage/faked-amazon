import styled from "@emotion/styled";

const Container = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: 'none',
    position: 'absolute',
    left: '0',
    top: '0',
    transform: isBurgerOpen ? 'translateX(-100%)' : 'translateX(0%)',
    transition: 'transform 0.3s ease-in-out',
    width: '365px',
    maxWidth: '75%',
    zIndex: 11,
}))


const Browse = styled('div')({
    backgroundColor: "white",
    position: 'relative',
    height: '100vh',
})

const Window = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: isBurgerOpen ? 'none' : 'none',
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

const Cross = styled('div')({
    position: 'absolute',
    left: '300px',
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
})

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
                <Browse>
                    <h1>Explore</h1>
                    <Cross>
                        <CrossLine />
                        <CrossLine />
                    </Cross>
                </Browse>
            </Container>
            <Window isBurgerOpen={isOpened} onClick={close} />
        </>
    );
}