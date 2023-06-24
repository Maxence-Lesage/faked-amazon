import Image from "next/image";
import Box from "../utils/box";
import styles from "./primary_navbar.module.scss";
import PrimaryLinks from "./primary_links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./search_bar/search_bar";

export default function PrimaryNavbar() {
    return (
        <nav className={styles.nav}>
            <Box>
                <Image className={styles.image} src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
            </Box>
            <Box>
                <PrimaryLinks text1="Bonjour" text2="Entrez votre adresse" special={<FontAwesomeIcon icon={faLocationDot} />} />
            </Box>
            <SearchBar />
            <Box>
                <PrimaryLinks text1="Bonjour, Identifiez-vous" text2="Compte et listes" dropdown={"V"} />
            </Box>
            <Box>
                <PrimaryLinks text1="Retours" text2="et commandes" />
            </Box>
            <Box>
                <PrimaryLinks text1="" text2="Panier" special={"0"} />
            </Box>
        </nav>
    );
}