import styled from "@emotion/styled";
import SearchBarChoose from "./search_bar_choose";

const SearchBarStyled = styled('div')({
    display: 'flex',

    '&:nth-of-type(n)': {
        height: '45px',
    },

    '&:nth-of-type(odd)': {
        border: '2px solid #131921',

        '&:focus': {
            borderColor: '#FF9900',
        },
    },
})

export const SearchBar = () => {
    return (
        <SearchBarStyled>
            <SearchBarChoose />
        </SearchBarStyled>
    );
}