import Image from "next/image";
import Box from "../utils/box";
import styles from "./primary_navbar.module.scss";
import PrimaryLinks from "./primary_links";

export default function PrimaryNavbar() {
    return (
        <nav className={styles.nav}>
            <Box>
                <Image className={styles.image} src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
            </Box>
            <Box>
                <PrimaryLinks text1="Bonjour" text2="Entrez votre adresse" special="X" />
            </Box>
        </nav>
    );
}