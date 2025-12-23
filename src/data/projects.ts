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

export const tags: Record<string, Tag> = {
    Agile: {
        name: "Agile", 
        type: "method", 
        mastery: 8, 
        category: "Agile"
    }, 
    group: {
        name: "group", 
        type: "ptype"
    }, 
    solo: {
        name: "solo", 
        type: "ptype"
    }, 
    english: {
        name: "english", 
        type: "language", 
        mastery: 8
    }, 
    french: {
        name: "french", 
        type: "language", 
        mastery: 10
    }, 
    german: {
        name: "german", 
        type: "language", 
        mastery: 4
    }
}


export const technologies: Record<string, Tag> = {
    React: {
        name: "React", 
        type: "framework", 
        mastery: 5, 
        category:"web"
    }, 
    Jira: {
        name: "Jira", 
        type: "application", 
        mastery: 7, 
        category: "Agile"
    }, 
    HTML: {
        name: "HTML", 
        type: "prog-language", 
        mastery: 8, 
        category: "web"
    },
    CSS: {
        name: "CSS", 
        type: "prog-language", 
        mastery: 8, 
        category: "web"
    },
    TypeScript: {
        name: "TypeScript", 
        type: "prog-language", 
        mastery: 6, 
        category: "web"
    }, 
    Vite: {
        name: "Vite", 
        type: "framework", 
        mastery: 3, 
        category: "web"
    }

}


export const projects: Project[] = [
    {
        title: "portfolio",
        description: "blablabla",
        technologies: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'], 
        repo: "https://github.com/jarrousse/portfolio",
        tags: ['solo', 'english'],  
        demo: "https://jarrousse-eliot.github.io/portfolio/"
    }

]
