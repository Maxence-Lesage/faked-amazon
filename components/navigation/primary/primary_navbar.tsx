import Image from "next/image";
import styled from "@emotion/styled";
import Box from "../utils/box";
import PrimaryLinks from "./primary_links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search_bar/search_bar";
import ShoppingCart from "./shopping_cart";

const Navbar = styled('nav')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5px 3px',
    height: '60px',
    width: '100%',
    backgroundColor: '#131921',
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
    return (
        <Navbar>
            <NavbarWrapper>
                <Box>
                    <StyledImage src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
                </Box>
                <Box>
                    <PrimaryLinks text1="Bonjour" text2="Entrez votre adresse" special={<FontAwesomeIcon icon={faLocationDot} />} />
                </Box>
            </NavbarWrapper>
            <SearchBar />
            <NavbarWrapper>
                <Box>
                    <PrimaryLinks text1="Bonjour, Identifiez-vous" text2="Compte et listes" dropdown={"V"} />
                </Box>
                <Box>
                    <PrimaryLinks text1="Retours" text2="et commandes" />
                </Box>
                <Box>
                    <PrimaryLinks text1="" text2="Panier" special={<ShoppingCart />} />
                </Box>
            </NavbarWrapper>
        </Navbar>
    );
}