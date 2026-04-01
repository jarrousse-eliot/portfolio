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
    },
    Cybersecurity: {
        name: "Cybersecurity",
        type: "hard-skill",
        mastery: 7,
        category: "security"
    },
    AdvancedProgramming: {
        name: "Advanced Programming",
        type: "hard-skill",
        mastery: 7,
        category: "programming"
    },
    MachineLearning: {
        name: "Machine Learning",
        type: "hard-skill",
        mastery: 4,
        category: "programming"
    },
    SoftwareEngineering: {
        name: "Software Engineering",
        type: "hard-skill",
        mastery: 7,
        category: "engineering"
    },
    WebDevelopment: {
        name: "Web Development",
        type: "hard-skill",
        mastery: 7,
        category: "web"
    },
    DatabaseManagement: {
        name: "Database Management",
        type: "hard-skill",
        mastery: 6,
        category: "database"
    },
    Mathematics: {
        name: "Mathematics",
        type: "hard-skill",
        mastery: 7,
        category: "science"
    },
    Physics: {
        name: "Physics",
        type: "hard-skill",
        mastery: 6,
        category: "science"
    },
    EngineeringFundamentals: {
        name: "Engineering Fundamentals",
        type: "hard-skill",
        mastery: 7,
        category: "engineering"
    },
    TeamCollaboration: {
        name: "Team Collaboration",
        type: "soft-skill",
        mastery: 8
    },
    ProblemSolving: {
        name: "Problem Solving",
        type: "soft-skill",
        mastery: 8
    },
    Communication: {
        name: "Communication",
        type: "soft-skill",
        mastery: 7
    },
    Leadership: {
        name: "Leadership",
        type: "soft-skill",
        mastery: 6
    },
    CriticalThinking: {
        name: "Critical Thinking",
        type: "soft-skill",
        mastery: 8
    }
};


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
    },
    Flutter: {
        name: "Flutter", 
        type: "framework", 
        mastery: 4, 
        category: "web"
    },
    Dart: {
        name: "Dart", 
        type: "prog-language", 
        mastery: 4, 
        category: "web"
    },
    C: {
        name: "C", 
        type: "prog-language", 
        mastery: 7
    },
    CSharp: {
        name: "C#", 
        type: "prog-language", 
        mastery: 6
    },
    Java: {
        name: "Java", 
        type: "prog-language", 
        mastery: 6
    },
    JavaScript: {
        name: "JavaScript", 
        type: "prog-language", 
        mastery: 7, 
        category: "web"
    },
    Python: {
        name: "Python", 
        type: "prog-language", 
        mastery: 6
    },
    Lua: {
        name: "Lua", 
        type: "prog-language", 
        mastery: 3
    },
    MUI: {
        name: "MUI", 
        type: "framework", 
        mastery: 5, 
        category: "web"
    }
};


export const projects: Project[] = [
    {
        title: "portfolio",
        description: "blablabla",
        technologies: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'MUI'], 
        repo: "https://github.com/jarrousse/portfolio",
        tags: ['solo', 'english', 'french', 'german'],  
        demo: "https://jarrousse-eliot.github.io/portfolio/"
    }, 
    {
        title: "thermonova", 
        description: "Je ne sais pas quoi mettre là", 
        technologies: ['Flutter', 'Dart'], 
        repo: "https://gitlab.esiea.fr/t404/flutter-app", 
        tags: ['group', 'french'], 
    }
]
