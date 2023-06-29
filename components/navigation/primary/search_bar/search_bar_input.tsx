import styled from "@emotion/styled";

const Input = styled('input')({
    fontSize: '15px',
    letterSpacing: '.3px',
    border: 'none',
    outline: 'none',
    paddingLeft: '10px',
    width: '220px',
});

export default function SearchBarInput({ setInputFocused }: { setInputFocused: Function }) {

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <Input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            type="text"
            placeholder="Rechercher Amazon.fr"
        />
    );
}