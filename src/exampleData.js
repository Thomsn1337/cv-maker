import { v4 as uuidv4 } from "uuid";

/** @typedef {import("@customTypes/cv-data").CVData} CVData */

/** @type {CVData} */
const exampleData = {
    general: {
        firstName: "John",
        lastName: "Smith",
        about: "I use vim, btw. While also using Arch, btw.",
        title: "Software Developer",
        phone: "+39 123 456 7890",
        email: "john.smith@fakemail.com",
        dateOfBirth: "2001-04-23",
        location: "Italy",
    },
    education: [
        {
            name: "Local Engineering School",
            id: uuidv4(),
            subject: "Electronics",
            startYear: "2015",
            endYear: "2020",
        },
        {
            name: "Engineering School",
            id: uuidv4(),
            subject: "Data science",
            startYear: "2012",
            endYear: "2015",
        },
    ],
    experience: [
        {
            name: "The Corporate",
            id: uuidv4(),
            position: "Junior Electrical Engineer",
            activities: [
                "Planning electrical circuits",
                "Developing prototypes for new products",
                "Documenting designs, prototype tests and programs",
            ],
            startYear: "2020",
            endYear: "2022",
        },
        {
            name: "The Startup",
            id: uuidv4(),
            position: "Junior Frontend Developer",
            activities: [
                "Developing UI components",
                "Applying styles",
                "Writing unit tests",
                "Documenting the development process",
            ],
            startYear: "2022",
            endYear: "2024",
        },
    ],
    skills: [
        {
            name: "HTML",
            id: uuidv4(),
            rating: 4,
        },
        {
            name: "CSS",
            id: uuidv4(),
            rating: 4,
        },
        {
            name: "JavaScript",
            id: uuidv4(),
            rating: 4,
        },
        {
            name: "React",
            id: uuidv4(),
            rating: 3,
        },
    ],
    languages: [
        {
            name: "German",
            id: uuidv4(),
            rating: 5,
        },
        {
            name: "Italian",
            id: uuidv4(),
            rating: 3,
        },
        {
            name: "English",
            id: uuidv4(),
            rating: 4,
        },
    ],
};

export default exampleData;
