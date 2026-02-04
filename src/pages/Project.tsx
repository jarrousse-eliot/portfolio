import type { FunctionComponent } from "react";
import { projects } from '../data/projects';
import { useTranslation } from "react-i18next";
import TagContext from "../components/tagContext";


const Projects: FunctionComponent = () => {    
    const { t } = useTranslation();    

    return (
        <section className="page">
            <h2>Projects</h2>

            {projects.map((project, name) => (
                <div key={name} className="project-card">
                    <h1>{t('name',  { ns: project.title })}</h1>
                    <p>{t('description', { ns: project.title })}</p>
                    <p className="taglist"><strong>Tech:</strong>{
                        project.technologies.map((techno, ) => (
                            <TagContext tag={techno}/>
                        ))
                    }</p>
                    <p className="taglist"><strong>Tags:</strong>{
                        project.tags.map((tag, ) => (
                            <TagContext tag={tag}/>
                        ))
                    }</p>

                    <a href={project.repo} target="_blank" className="btn">GitHub</a>
                    {project.demo && (                    
                        <a href={project.demo} target="_blank" className="btn">Live Demo</a>
                    )}
                    </div>
                ))}
        </section>
    )
}

export default Projects;
