/** @typedef {import("@customTypes/cv-data").GeneralData} GeneralData */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

/**
 * @param {Object} params
 * @param {GeneralData} params.data
 * @param {object} params.styles
 *
 * @returns {JSX.Element}
 */
export default function GeneralSection({ data, styles }) {
    const date = new Date(data.dateOfBirth);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${day}.${month}.${year}`;

    return (
        <section className={styles.general}>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    {formattedDate}
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} />
                    {data.phone}
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    {data.email}
                </li>
                <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    {data.location}
                </li>
            </ul>
        </section>
    );
}
