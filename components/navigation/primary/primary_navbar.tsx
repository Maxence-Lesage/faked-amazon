import Image from "next/image";
import styled from "@emotion/styled";
import Box from "../utils/box";
import PrimaryLinks from "./primary_links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search_bar/search_bar";
import ShoppingCart from "./shopping_cart";
import { useContext } from "react";
import { StoreContext } from "../../../store/store";

const Navbar = styled('nav')({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '5px 3px',
    height: '60px',
    width: '100%',
    backgroundColor: '#131921',
    "@media (max-width: 1080px)": {
        display: 'none',
    }
})

const StyledImage = styled(Image)({
    height: '100%',
    width: '100%',
})

const NavbarWrapper = styled('div')({
    display: 'flex',
    height: '100%',
})

export default function PrimaryNavbar() {

    const { state, } = useContext(StoreContext);

    const text = [
        ["Bonjour", "Entrez votre adresse"],
        ["Bonjour, Identifiez-vous", "Compte et listes"],
        ["", "Panier"]
    ];

    if (state.token) {
        text[0][0] = "Livrer à " + state.profile.surname;
        text[0][1] = state.profile.address.city + " " + state.profile.address.zip;
        text[1][0] = "Bonjour " + state.profile.surname;
    }

    return (
        <Navbar>
            <NavbarWrapper>
                <Box>
                    <StyledImage src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
                </Box>
                <Box>
                    <PrimaryLinks text1={text[0][0]} text2={text[0][1]} special={<FontAwesomeIcon icon={faLocationDot} />} />
                </Box>
            </NavbarWrapper>
            <SearchBar />
            <NavbarWrapper>
                <Box>
                    <PrimaryLinks text1={text[1][0]} text2={text[1][1]} dropdown={"V"} />
                </Box>
                <Box>
                    <PrimaryLinks text1="Retours" text2="et commandes" />
                </Box>
                <Box>
                    <PrimaryLinks text1={text[2][0]} text2={text[2][1]} special={<ShoppingCart />} />
                </Box>
            </NavbarWrapper>
        </Navbar>
    );
}