/** @typedef {import("@customTypes/cv-data").CVData} CVData */

import styles from "@styles/cvViewer.module.css";

/** @param {Object} param0
 * @param {CVData} param0.data  */
export default function CVViewer({ data }) {
    console.log(styles)

    return (
        <div className={styles["cv-viewer"]}>
            <div className={styles.header}></div>
            <div className={styles.sidebar}></div>
            <div className={styles.content}></div>
        </div>
    );
}
