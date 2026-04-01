export type Formation = {
    degree: string;
    school: string;
    year: string;
    logo: string;
    link: string;
    skills: string[];
};

import formationJson from "./formations.json";

export const formations: Formation[] = formationJson as Formation[];