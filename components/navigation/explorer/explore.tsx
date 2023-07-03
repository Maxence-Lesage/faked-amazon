import styled from "@emotion/styled";

const Container = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: 'flex',
    position: 'absolute',
    left: '0',
    top: '0',
    transform: isBurgerOpen ? 'translateX(0%)' : 'translateX(-130%)',
    transition: 'transform 0.3s ease-in-out',
    width: 'clamp(17.5rem, 15.6406rem + 10.625vw, 22.8125rem)',
    zIndex: 11,
}))


const Browse = styled('div')({
    backgroundColor: "var(--color-light)",
    width: '100%',
    position: 'relative',
    height: '100vh',
})

const Window = styled('div')<{ isBurgerOpen: boolean }>(({ isBurgerOpen }) => ({
    display: isBurgerOpen ? 'block' : 'none',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: 2,
    cursor: 'initial',
}))

const Cross = styled('div')({
    position: 'absolute',
    zIndex: 10,
    top: '20px',
    left: 'calc(100% + 20px)',
    height: '26px',
    width: '26px',
    "& > div:nth-of-type(1)": {
        transform: 'rotate(45deg) translateX(4px)',
        transformOrigin: 'left',
    },
    "& > div:nth-of-type(2)": {
        transform: 'rotate(-45deg) translateX(-4px)',
        transformOrigin: 'right',
    },
    '&:hover': {
        cursor: 'pointer',
    }
})

const CrossLine = styled('div')({
    position: 'absolute',
    width: '26px',
    height: '2px',
    backgroundColor: 'var(--color-light)',
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
                    <Cross onClick={close}>
                        <CrossLine />
                        <CrossLine />
                    </Cross>
                </Browse>
            </Container>
            <Window isBurgerOpen={isOpened} onClick={close} />
        </>
    );
}