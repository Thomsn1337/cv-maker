/** @typedef {import("@customTypes/cv-data").CVData} CVData */

import styles from "@styles/cvViewer.module.css";
import GeneralSection from "./CVViewer/generalSection";

/**
 * @param {Object} param0
 * @param {CVData} param0.data
 *
 * @returns {JSX.Element}
 */
export default function CVViewer({ data }) {
    const { general, education, experience, skills, languages } = data;

    return (
        <div className={styles["cv-viewer"]}>
            <div className={styles.header}>
                <h1>
                    {general.firstName} {general.lastName}
                </h1>
                <p>{general.title}</p>
            </div>
            <div className={styles.sidebar}>
                <GeneralSection data={general} styles={styles} />
                <div className={styles.separator}></div>
            </div>
            <div className={styles.content}></div>
        </div>
    );
}
