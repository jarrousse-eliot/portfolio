import type { FunctionComponent } from 'react';

interface ProgressArgs {
    max: number, 
    value: number, 
    animation: string;
}

const ProgressBar: FunctionComponent<ProgressArgs> = ({ max = 100, value = 100, animation = "" }) => {

    const prog = value/max;
    
    let animClass = "";
    if (animation == "ease-in") {
        animClass = "prog-animation-ease-in";
    } else if (animation == "ease-out") {
        animClass = "prog-animation-ease-out";
    } else if (animation == "ease-in-out") {
        animClass = "prog-animation-ease-in-out";
    }

    return (
        <div className="progressbar">
            <div id="compute" style={{"width": `${prog*100}%`}}>
                <div id="progress" className={animClass}>
                </div>
            </div>
        </div>
    )
}
export default ProgressBar;
