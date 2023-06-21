import React from "react";
import styles from "./primary_links.module.scss";

interface Props {
    text1: string;
    text2: string;
    special?: React.ReactNode;
    dropdown?: React.ReactNode;
}

export default function PrimaryLinks({ text1, text2, special, dropdown }: Props) {
    return (
        <div className={styles.primary_links}>
            {special &&
                <div className={styles.primary_links__left}>
                    <div className={styles.special}>
                        {special}
                    </div>
                </div>
            }
            <div className={styles.primary_links__right}>
                <p className={styles.text1}>{text1}</p>
                <p className={styles.text2}>{text2 + (dropdown ? " " + dropdown : "")}</p>
            </div>
        </div>
    );
}