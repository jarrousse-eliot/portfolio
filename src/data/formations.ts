export type Formation = {
    degree: string;
    school: string;
    year: string;
    logo: string;
    link: string;
    skills: string[];
};

export const formations: Formation[] = [
    {
        degree: "formations.degrees.engineering",
        school: "ESIEA",
        year: "2022-2025",
        logo: "https://www.esiea.fr/wp-content/uploads/2020/05/logo-esiea.png",
        link: "https://www.esiea.fr",
        skills: ["Cybersecurity", "AdvancedProgramming", "Agile", "MachineLearning"]
    },
    {
        degree: "formations.degrees.preparatory",
        school: "ESIEA",
        year: "2020-2022",
        logo: "https://www.esiea.fr/wp-content/uploads/2020/05/logo-esiea.png",
        link: "https://www.esiea.fr",
        skills: ["SoftwareEngineering", "WebDevelopment", "DatabaseManagement", "TeamCollaboration"]
    }
];