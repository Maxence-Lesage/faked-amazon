import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/store";
import SearchBar from "./search_bar/search_bar";
import SecondaryNavbar from "../secondary/secondary_navbar";
import Delivery from "./links/delivery";
import Basket from "./links/basket";
import Logo from "./links/logo";
import Burger from "../utils/burger";
import Order from "./links/order";
import Account from "./links/account";

const Navbar = styled('nav')({
    display: 'flex',
    padding: '5px 3px',
    height: '60px',
    width: '100%',
    backgroundColor: 'var(--color-background-nav-dark)',
    "@media (max-width: 1080px)": {
        backgroundColor: 'var(--color-background-nav-medium)',
        flexDirection: 'column',
        gap: '3px',
        height: '100px',
        marginTop: '-3px',
    }
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
        height: '48px',
    }
})

const SearchBarWrapper = styled('div')({
    width: '100%',
})

export default function PrimaryNavbar() {

    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const { state, } = useContext(StoreContext);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth <= 1080);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Navbar id="navbar">
                <NavbarWrapper>
                    <NavbarElementsWrapper>
                        {isScreenSmall && <Burger box={true} />}
                        <Logo />
                        {!isScreenSmall &&
                            <Delivery isScreenSmall={isScreenSmall} profile={state.profile} />
                        }
                    </NavbarElementsWrapper>
                    {!isScreenSmall && <SearchBar />}
                    <NavbarElementsWrapper>
                        <Account isScreenSmall={isScreenSmall} />
                        {!isScreenSmall && <Order />}
                        <Basket isScreenSmall={isScreenSmall} />
                    </NavbarElementsWrapper>
                </NavbarWrapper>
                {isScreenSmall && <SearchBarWrapper><SearchBar /></SearchBarWrapper>}
            </Navbar>
            <SecondaryNavbar isScreenSmall={isScreenSmall} />
            {isScreenSmall &&
                <Delivery isScreenSmall={isScreenSmall} profile={state.profile} />
            }
        </>
    );
}