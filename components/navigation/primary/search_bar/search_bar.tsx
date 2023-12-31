import styled from "@emotion/styled";
import { useState } from "react";
import SearchBarChoose from "./search_bar_choose";
import SearchBarInput from "./search_bar_input";
import SearchBarLaunch from "./search_bar_launch";

const SearchBarStyled = styled('div')<{ isInputFocused: boolean }>(({ isInputFocused }) => ({
    display: 'flex',
    borderRadius: '6px',
    outline: isInputFocused ? 'solid 2px var(--color-focus-searchbar)' : 'none',
    flex: '1',

    '&:nth-of-type(n)': {
        height: '41px',
    },
    '@media (max-width: 1080px)': {
        margin: '0px 8px',
        '&:nth-of-type(n)': {
            height: '44px',
        },
    }
}))

export default function SearchBar() {

    const [isInputFocused, setInputFocused] = useState(false);

    return (
        <SearchBarStyled isInputFocused={isInputFocused}>
            <SearchBarChoose />
            <SearchBarInput setInputFocused={setInputFocused} />
            <SearchBarLaunch />
        </SearchBarStyled>
    );
}