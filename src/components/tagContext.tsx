import type { FunctionComponent } from 'react';
import Context from './context';
import type { Tag } from '../data/projects.ts';
import { tags, technologies } from '../data/projects.ts';
import { useTranslation } from 'react-i18next';

interface TagProps {
    tag: string, 
}


const TagContext: FunctionComponent<TagProps> = ({ tag }) => {
    const { t } = useTranslation();
    console.log(tags);

    let mytag: Tag | undefined = tags[tag];

    if (mytag == undefined) {
        mytag = technologies[tag];
        if (mytag == undefined) return <div className="techno">{tag}</div>; 
    }

    return (
        <Context id={mytag.name}>
            <div className="techno">{t(mytag.name, { ns: "tags" })}</div>
            <div className="tagContext">
                <div className="inline-flex">
                    <h3>{mytag.name}</h3>
                    <p>&#123;{t(`category.${mytag.category}`, { ns: "tags" })}&#125;</p>
                </div>
                <p className="subtitle">{t(`type.${mytag.type}`, { ns: "tags" })}</p>
                <p className="label">Mastery</p>
                <progress max="10" value={mytag.mastery}></progress>
            </div>
        </Context>    
    )

}

export default TagContext;
