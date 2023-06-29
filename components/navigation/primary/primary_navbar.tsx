import Image from "next/image";
import styled from "@emotion/styled";
import Box from "../utils/box";
import PrimaryLinks from "./primary_links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search_bar/search_bar";
import ShoppingCart from "./shopping_cart";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/store";
import SecondaryNavbar from "../secondary/secondary_navbar";
import Delivery from "./links/delivery";

const Navbar = styled('nav')({
    display: 'flex',
    padding: '5px 3px',
    height: '60px',
    width: '100%',
    backgroundColor: '#131921',
    "@media (max-width: 1080px)": {
        flexDirection: 'column',
        height: '120px',
    }
})

const StyledImage = styled(Image)({
    height: '100%',
    width: '100%',
})

const NavbarElementsWrapper = styled('div')({
    display: 'flex',
    height: '100%',
})

const NavbarWrapper = styled('div')({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    "@media (max-width: 1080px)": {
        justifyContent: 'space-between',
        height: '60px',
    }
})

const SearchBarWrapper = styled('div')({
    width: '100%',
    height: '60px',
})

export default function PrimaryNavbar() {

    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const { state, } = useContext(StoreContext);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 1080);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const text = [
        ["Bonjour", "Entrez votre adresse"],
        ["Bonjour, Identifiez-vous", "Compte et listes"],
        ["", "Panier"]
    ];

    if (state.token) {
        text[1][0] = "Bonjour " + state.profile.surname;
    }

    return (
        <>
            <Navbar>
                <NavbarWrapper>
                    <NavbarElementsWrapper>
                        {/* BURGER */}
                        <Box>
                            <StyledImage src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
                        </Box>
                        {!isScreenSmall &&
                            <Delivery isScreenSmall={isScreenSmall} profile={state.profile} />
                        }
                    </NavbarElementsWrapper>
                    {!isScreenSmall && <SearchBar />}
                    <NavbarElementsWrapper>
                        <Box>
                            <PrimaryLinks text1={text[1][0]} text2={text[1][1]} dropdown={"V"} />
                        </Box>
                        {!isScreenSmall &&
                            <Box>
                                <PrimaryLinks text1="Retours" text2="et commandes" />
                            </Box>
                        }
                        <Box>
                            <PrimaryLinks text1={text[2][0]} text2={text[2][1]} special={<ShoppingCart />} />
                        </Box>
                    </NavbarElementsWrapper>
                </NavbarWrapper>
                {isScreenSmall && <SearchBarWrapper><SearchBar /></SearchBarWrapper>}
            </Navbar>
            <SecondaryNavbar />
            {isScreenSmall &&
                <Delivery isScreenSmall={isScreenSmall} profile={state.profile} />
            }
        </>
    );
}