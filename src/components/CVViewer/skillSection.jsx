/** @typedef {import("@customTypes/cv-data").SkillData} SkillData */

/**
 * @param {Object} params
 * @param {string} params.name
 * @param {Array<SkillData>} params.data
 * @param {object} params.styles
 *
 * @returns {JSX.Element}
 */
export default function SkillSection({ name, data, styles }) {
    return (
        <section className={styles[name.toLowerCase()]}>
            <h3>{name}</h3>
            <ul>
                {data.map((skill) => (
                    <li key={skill.id}>
                        <SkillInfo skill={skill} styles={styles} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

/**
 * @param {Object} param0
 * @param {SkillData} param0.skill
 * @param {object} param0.styles
 */
function SkillInfo({ skill, styles }) {
    const ratingBlocks = new Array(5).fill(false);
    for (let i = 0; i < skill.rating; i++) {
        ratingBlocks[i] = true;
    }

    return (
        <>
            <p>{skill.name}</p>
            <div className={styles["rating-bar"]}>
                {ratingBlocks.map((block, index) => {
                    return block ? (
                        <div
                            key={index}
                            className={`${styles["rating-block"]} ${styles.set}`}></div>
                    ) : (
                        <div
                            key={index}
                            className={styles["rating-block"]}></div>
                    );
                })}
            </div>
        </>
    );
}
