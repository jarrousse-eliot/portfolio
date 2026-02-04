import type { FunctionComponent } from 'react';
import Context from './context';
import type { Tag } from '../data/projects.ts';
import { tags, technologies } from '../data/projects.ts';
import { useTranslation } from 'react-i18next';
import ProgressBar from './ProgressBar';

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

    function animate_progressbar(elements: HTMLDivElement) {
        const elem = elements.querySelector(".progressbar #progress");
        if (elem == null) return;
        elem.classList.add("prog-animation-ease-in");
    }

    return (
        <Context id={mytag.name} onVisible={animate_progressbar} >
            <div className="techno">{t(mytag.name, { ns: "tags" })}</div>
            <div className="tagContext">
                <div className="inline-flex">
                    <h3>{mytag.name}</h3>
                    { mytag.category != undefined ? (<p>
                        &#123;{t(`category.${mytag.category}`, { ns: "tags" })}&#125;</p>) : (<></>) }
                </div>
                <p className="subtitle">{t(`type.${mytag.type}`, { ns: "tags" })}</p>
                { mytag.mastery != undefined ? (
                    <><p className="label">Mastery</p>
                    <div style={{"display": "flex"}}>
                    <div style={{"width": "150px", "height": "fit-content", "alignSelf": "center"}}>
                        <ProgressBar max={10} value={mytag.mastery == undefined ? 5 : mytag.mastery} animation=""/>
                    </div>
                    <p style={{"margin": "5px"}}>{mytag.mastery == undefined ? 5 : mytag.mastery}/10</p>
                    </div></>) : (<></>)}
            </div>
        </Context>    
    )

}

export default TagContext;
