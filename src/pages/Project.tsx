import type { FunctionComponent } from "react";
import { projects } from '../data/projects';
import { useTranslation } from "react-i18next";

const Projects: FunctionComponent = () => {    
    const { t } = useTranslation();    

    return (
        <section className="page">
            <h2>Projects</h2>

            {projects.map((project, name) => (
                <div key={name} className="project-card">
                    <h3>{t('name',  { ns: project.title })}</h3>
                    <p>{t('description', { ns: project.title })}</p>
                    <p><strong>Tech:</strong> {project.technologies.join(', ')}</p>

                    <a href={project.repo} target="_blank">GitHub</a>
                    {project.demo && (
                        <a href={project.demo} target="_blank"> Live Demo</a>
                    )}
                    </div>
                ))}
        </section>
    )
}

export default Projects;
