import styles from "./search_bar.module.scss";
import SearchBarChoose from "./search_bar_choose";

export const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <SearchBarChoose />
        </div>
    );
}