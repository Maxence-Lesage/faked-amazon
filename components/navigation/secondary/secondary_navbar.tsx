import styled from "@emotion/styled";
import Box from "../utils/box";
import SecondaryLinks from "./secondary_links";

const Navbar = styled('nav')({
    display: 'flex',
    padding: '0px 3px',
    height: '39px',
    width: '100%',
    backgroundColor: 'var(--color-background-nav-medium)',
    '@media (max-width: 1080px)': {
        height: '45px',
        paddingTop: '3px',
    }
})

export default function SecondaryNavbar({ isScreenSmall }: { isScreenSmall: boolean }) {

    const links = [
        ["Meilleures ventes", "Musique", "Amazon Basics", "Service Client", "Prime", "Ebooks Kindle", "Dernière Nouveautés", "Ventes flash", "Audible", "Livres", "High-Tech"],
        ["bestsellers", "music", "amazonbasics", "customer-service", "prime", "kindle-store", "new-releases", "lightning-deals", "audible", "books", "electronics"],
    ];

    const items = links[0].map((link, index) => {
        return <Box key={index} link={links[1][index]}><SecondaryLinks key={index} text={link} /></Box>
    });

    return (
        <Navbar>
            {!isScreenSmall &&
                <Box key={0o1} link={""}><SecondaryLinks key={"0o1"} text={"Toutes"} special={"burger"} /></Box>
            }
            {items}
        </Navbar>
    );
}