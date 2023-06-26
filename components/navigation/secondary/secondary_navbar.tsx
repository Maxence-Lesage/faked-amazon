import Box from "../utils/box";
import SecondaryLinks from "./secondary_links";
import styles from "./secondary_navbar.module.scss";

export default function SecondaryNavbar() {

    return (
        <nav className={styles.nav}>
            <Box>
                <SecondaryLinks text="Meilleures ventes" />
            </Box>
        </nav>
    );
}