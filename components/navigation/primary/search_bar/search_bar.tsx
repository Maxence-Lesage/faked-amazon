import styled from "@emotion/styled";
import SearchBarChoose from "./search_bar_choose";

const SearchBarStyled = styled('div')({
    display: 'flex',

    '&:nth-child(n)': {
        height: '45px',
    },

    '&:nth-child(odd)': {
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