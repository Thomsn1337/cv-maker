export interface GeneralData {
    firstName: string;
    lastName: string;
    about: string;
    title: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    location: string;
}

export interface SchoolData {
    name: string;
    id: string;
    subject: string;
    startYear: string;
    endYear: string;
}

export interface CompanyData {
    name: string;
    id: string;
    position: string;
    activities: Array<string>;
    startYear: string;
    endYear: string;
}

type NumberRange = 1 | 2 | 3 | 4 | 5;

export interface SkillData {
    name: string;
    id: string;
    rating: NumberRange;
}

export interface CVData {
    general: GeneralData;
    education: Array<SchoolData>;
    experience: Array<CompanyData>;
    skills: Array<SkillData>;
    languages: Array<SkillData>;
}
