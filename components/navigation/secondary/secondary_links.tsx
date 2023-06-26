import styled from "@emotion/styled";

const Text = styled('div')({
    fontSize: '14px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
})


interface Props {
    text: string;
}

export default function SecondaryLinks({ text }: Props) {
    return (
        <div>
            <Text>{text}</Text>
        </div>
    );
}