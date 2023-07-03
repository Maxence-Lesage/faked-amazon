import styled from '@emotion/styled'
import { useState } from 'react'
import Box from './box'
import Explore from './explore'

const BurgerLineContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    '@media (max-width: 1080px)': {
        gap: '6px',
    }
})

const BurgerLine = styled('div')({
    width: '18px',
    height: '2px',
    backgroundColor: 'var(--color-light)',
    '@media (max-width: 1080px)': {
        width: '22px',
    }
})

export default function Burger({ box }: { box: boolean }) {

    const [isOpened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(!isOpened);
    }

    return (
        <>
            {
                box ?
                    (
                        <Box>
                            < BurgerLineContainer onClick={handleClick}>
                                <BurgerLine />
                                <BurgerLine />
                                <BurgerLine />
                            </BurgerLineContainer >
                        </Box >
                    )
                    :
                    (
                        <BurgerLineContainer onClick={handleClick}>
                            <BurgerLine />
                            <BurgerLine />
                            <BurgerLine />
                        </BurgerLineContainer >
                    )
            }
            <Explore isOpened={isOpened} setOpened={handleClick} />
        </>
    )
}