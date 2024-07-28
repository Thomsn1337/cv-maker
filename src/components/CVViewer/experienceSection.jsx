/** @typedef {import("@customTypes/cv-data").CompanyData} CompanyData */

/**
 * @param {Object} param0
 * @param {Array<CompanyData>} param0.data
 * @param {object} param0.styles
 *
 * @returns {JSX.Element}
 */
export default function ExperienceSection({ data, styles }) {
    return (
        <section className={styles.experience}>
            <h2>Work experience</h2>
            {data.map((work) => (
                <WorkInfo key={work.id} work={work} styles={styles} />
            ))}
        </section>
    );
}

/**
 * @param {Object} param0
 * @param {CompanyData} param0.work
 * @param {object} param0.styles
 *
 * @returns {JSX.Element}
 */
function WorkInfo({ work, styles }) {
    return (
        <div className={styles["work-info"]}>
            <div className={styles.header}>
                <h3>{work.name}</h3>
                <p>
                    {work.startYear}-{work.endYear}
                </p>
            </div>
            <p>{work.position}</p>
            <ul>
                {work.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    );
}
