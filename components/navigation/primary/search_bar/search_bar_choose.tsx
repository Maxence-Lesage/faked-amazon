import styles from "./search_bar_choose.module.scss";

export default function SearchBarChoose() {
    return (
        <input className={styles.button} defaultValue="Toutes nos catégories V" />
    );
}