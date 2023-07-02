import styled from "@emotion/styled";
import Burger from "../utils/burger";

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    width: '100%',
    height: '100%',
})

const Text = styled('div')({
    fontSize: '14px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'nowrap',
})

interface Props {
    text: string;
    special?: string;
}

export default function SecondaryLinks({ text, special }: Props) {

    return (
        <Container>
            {special === "burger" &&
                <>
                    <Burger box={false} />
                </>
            }
            <Text>{text}</Text>
        </Container>
    );
}