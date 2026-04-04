import type { FunctionComponent } from "react";
import { useState, useMemo } from "react";
import { projects } from '../data/projects';
import { useTranslation } from "react-i18next";
import TagContext from "../components/tagContext";
import '../styles/projects.css';
import type { TFunction } from "i18next";

// Collect all unique tag keys from all projects
const allTagKeys = Array.from(
    new Set(projects.flatMap(p => [...p.technologies, ...p.tags]))
);

function getTagName(key: string, t: TFunction<"translation",undefined>): string {
    return t(key, { ns: "tags" });
}

function scoreProject(
    project: typeof projects[0],
    query: string,
    t: TFunction<"translation",undefined>
): number {
    if (!query.trim()) return 1;
    const q = query.toLowerCase();

    const projectName = t('name', { ns: project.title }).toLowerCase();
    const projectDesc = t('description', { ns: project.title }).toLowerCase();
    const techNames = project.technologies.map(k => getTagName(k, t).toLowerCase());
    const tagNames = project.tags.map(k => getTagName(k, t).toLowerCase());

    let score = 0;
    if (projectName.includes(q)) score += 10;
    if (projectName.startsWith(q)) score += 5;
    if (projectDesc.includes(q)) score += 4;
    techNames.forEach(n => { if (n.includes(q)) score += 3; });
    tagNames.forEach(n => { if (n.includes(q)) score += 2; });

    return score;
}

const Projects: FunctionComponent = () => {
    const { t } = useTranslation();
    const [query, setQuery] = useState("");
    const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

    const toggleTag = (key: string) => {
        setActiveTags(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };

    const filteredAndSorted = useMemo(() => {
        return projects
            .map(p => ({ project: p, score: scoreProject(p, query, t) }))
            .filter(({ project, score }) => {
                const matchesQuery = !query.trim() || score > 0;
                const matchesTags = activeTags.size === 0 || [...activeTags].every(
                    tag => project.technologies.includes(tag) || project.tags.includes(tag)
                );
                return matchesQuery && matchesTags;
            })
            .sort((a, b) => b.score - a.score)
            .map(({ project }) => project);
    }, [query, activeTags, t]);

    const hasActiveFilters = query.trim() !== "" || activeTags.size > 0;

    return (
        <section className="page">
            <h2>{t('nav.projects', { ns: 'common' })}</h2>

            {/* Search bar */}
            <div className="projects-search-bar">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="projects-search-input"
                    placeholder={t('projects.search_placeholder', { ns: 'common' })}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    aria-label="Search projects"
                />
                {query && (
                    <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                        ✕
                    </button>
                )}
            </div>

            {/* Tag filters */}
            <div className="projects-tag-filters">
                <span className="filter-label">{t('projects.filter_by', { ns: 'common' })}</span>
                <div className="filter-tags">
                    {allTagKeys.map(key => (
                        <button
                            key={key}
                            className={"techno filter-tag" + (activeTags.has(key) ? ' active' : '')}
                            onClick={() => toggleTag(key)}
                        >
                            {getTagName(key, t)}
                        </button>
                    ))}
                </div>
                {activeTags.size > 0 && (
                    <button className="filter-clear" onClick={() => setActiveTags(new Set())}>
                        {t('projects.clear_filters', { ns: 'common' })}
                    </button>
                )}
            </div>

            {/* Results count */}
            {hasActiveFilters && filteredAndSorted.length > 0 && (
                <p className="results-count">
                    {t('projects.results_count', { ns: 'common', count: filteredAndSorted.length })}
                </p>
            )}

            {/* Project cards or empty state */}
            {filteredAndSorted.length === 0 ? (
                <div className="no-results">
                    <span className="no-results-icon">🔎</span>
                    <p className="no-results-title">{t('projects.no_results', { ns: 'common' })}</p>
                    <p className="no-results-sub">{t('projects.no_results_hint', { ns: 'common' })}</p>
                    {hasActiveFilters && (
                        <button
                            className="btn no-results-reset"
                            onClick={() => { setQuery(""); setActiveTags(new Set()); }}
                        >
                            {t('projects.reset', { ns: 'common' })}
                        </button>
                    )}
                </div>
            ) : (
                filteredAndSorted.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <h1>{t(`${project.title}.name`, { ns: 'projects' })}</h1>
                        <p>{t(`${project.title}.description`, { ns: 'projects' })}</p>
                        <p className="taglist">
                            <strong>Tech:</strong>
                            {project.technologies.map((techno, i) => (
                                <TagContext key={i} tag={techno} />
                            ))}
                        </p>
                        <p className="taglist">
                            <strong>Tags:</strong>
                            {project.tags.map((tag, i) => (
                                <TagContext key={i} tag={tag} />
                            ))}
                        </p>
                        <a href={project.repo} target="_blank" className="btn">GitHub</a>
                        {project.demo && (
                            <a href={project.demo} target="_blank" className="btn">Live Demo</a>
                        )}
                    </div>
                ))
            )}
        </section>
    );
};

export default Projects;