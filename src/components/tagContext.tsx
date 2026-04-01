import type { FunctionComponent, MouseEvent } from 'react';
import * as React from 'react';
import type { Tag } from '../data/projects.ts';
import { tags, technologies } from '../data/projects.ts';
import { useTranslation } from 'react-i18next';
import ProgressBar from './ProgressBar';
import { Popover } from '@mui/material';

interface TagProps {
    tag: string, 
}


const TagContext: FunctionComponent<TagProps> = ({ tag }) => {
    const { t } = useTranslation();

    let mytag: Tag | undefined = tags[tag];

    if (mytag == undefined) {
        mytag = technologies[tag];
        if (mytag == undefined) return <button className="techno">{tag}</button>; 
    }

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        const elem = event.currentTarget.querySelector(".progressbar #progress");
        if (elem == null) return;
        elem.classList.add("prog-animation-ease-in");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `${mytag.name}-popover` : undefined;

    return (
        <>
            <button aria-describedby={id} onClick={handleClick} className="techno">
                {t(tag, { ns: "tags" })}
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div style={{padding: '0% 5%'}}>
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
            </Popover>
        </>  
    )

}

export default TagContext;
