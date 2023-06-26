import styled from "@emotion/styled";
import Box from "../utils/box";
import SecondaryLinks from "./secondary_links";

const Navbar = styled('nav')({
    display: 'flex',
    padding: '0px 3px',
    height: '39px',
    width: '100%',
    backgroundColor: '#232F3E',
})

export default function SecondaryNavbar() {

    return (
        <Navbar>
            <Box>
                <SecondaryLinks text="Meilleures ventes" />
            </Box>
        </Navbar>
    );
}