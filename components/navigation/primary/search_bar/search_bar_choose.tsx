import styled from "@emotion/styled";

const Button = styled('button')({
    backgroundColor: '#ebebeb',
    borderRadius: '6px 0px 0px 6px',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '12px',
    padding: '0px 8px',
    letterSpacing: '.5px',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#DADADA',
        color: 'black',
    },

    '&:focus': {
        outline: 'none',
    },
})

export default function SearchBarChoose() {
    return (
        <Button defaultValue="Toutes nos catégories V" />
    );
}