export type Tag = {
    name:  string
    type: string
    mastery?: number
    category?: string
}


export type Project = {
    title: string
    description: string
    technologies: string[] // Tag key
    repo: string
    tags: string[] // Tag key
    demo?: string
}

import tagJson from "./tags.json";
export const tags: Record<string, Tag> = tagJson.tags as Record<string, Tag>;

export const technologies: Record<string, Tag> = tagJson.technologies as Record<string, Tag>;

import projectJson from "./projects.json";
export const projects: Project[] = projectJson as Project[];
