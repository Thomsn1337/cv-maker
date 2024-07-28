/** @typedef {import("@customTypes/cv-data").SchoolData} SchoolData */

/**
 * @param {Object} param0
 * @param {Array<SchoolData>} param0.data
 * @param {object} param0.styles
 *
 * @returns {JSX.Element}
 */
export default function EducationSection({ data, styles }) {
    return (
        <section className={styles.education}>
            <h2>Education</h2>
            {data.map((school) => (
                <SchoolInfo key={school.id} school={school} styles={styles} />
            ))}
        </section>
    );
}

/**
 * @param {Object} param0
 * @param {SchoolData} param0.school
 * @param {object} param0.styles
 *
 * @returns {JSX.Element}
 */
function SchoolInfo({ school, styles }) {
    return (
        <div className={styles["school-info"]}>
            <div className={styles.header}>
                <h3>{school.name}</h3>
                <p>
                    {school.startYear}-{school.endYear}
                </p>
            </div>
            <p className={styles["school-subject"]}>
                Subject: {school.subject}
            </p>
        </div>
    );
}
