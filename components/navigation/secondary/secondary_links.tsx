import styled from "@emotion/styled";
import { useState } from "react";
import Explore from "../utils/explore";

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
})

const Text = styled('div')({
    fontSize: '14px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'nowrap',
})

const Burger = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
})

const BurgerLine = styled('div')({
    width: '18px',
    height: '2px',
    backgroundColor: 'white',
})

interface Props {
    text: string;
    special?: string;
}

export default function SecondaryLinks({ text, special }: Props) {
    const [isOpened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(!isOpened);
    }

    return (
        <Container onClick={handleClick}>
            {special === "burger" &&
                <>
                    <Burger>
                        <BurgerLine />
                        <BurgerLine />
                        <BurgerLine />
                    </Burger>
                    <Explore isOpened={isOpened} setOpened={handleClick} />
                </>
            }
            <Text>{text}</Text>
        </Container>
    );
}