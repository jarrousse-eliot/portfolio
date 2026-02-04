import type { FunctionComponent } from 'react';

type visibleEvent = {
    (elements: HTMLDivElement): void;
};

interface ParentIdProps {
    children: React.ReactElement[], 
    id: string, 
    onVisible: visibleEvent;
}


const Context: FunctionComponent<ParentIdProps> = ({ id, children, onVisible }) => {

    const hideContext = () => {
        const contexts: NodeListOf<HTMLElement> = document.querySelectorAll(".context");
        console.log(contexts);
        for (let i = 0; i < contexts.length; i++) {
            const cont = contexts.item(i);
            cont.style.visibility = "hidden";
        }
    }

    // this is with default html MouseEvent
    const handleContext = (event: MouseEvent | React.MouseEvent) => {
        event.stopPropagation();
        const children: HTMLDivElement | null = document.querySelector(`#${id} .context`);
        if (children == null) return;

        const target: HTMLDivElement = event.target as HTMLDivElement;
        const bodyRect = document.body.getBoundingClientRect(),
            elemRect = target.getBoundingClientRect(),
            maxLeft = bodyRect.width - children.offsetWidth;
        let offsettop = elemRect.top - bodyRect.top, 
            offsetleft = elemRect.left - bodyRect.left;

        if (offsettop - children.offsetHeight < 0) offsettop += children.offsetHeight + target.offsetHeight;
        if (offsetleft > maxLeft) offsetleft += target.offsetWidth - children.offsetWidth;
        
        children.style.top = `${offsettop-children.offsetHeight}px`;
        children.style.left = `${offsetleft}px`;

        hideContext();
        children.style.visibility = "visible";
        onVisible(children);
    }


    if (children.length >= 2) {
        const parent = children.shift();
        
        document.addEventListener("click", hideContext);

        if (parent == null) return children;


        return (
            <div id={id}>
                <div onClick={handleContext}>{parent}</div>
                <div className="context">{children}</div>                
            </div>
        ) 

    }

    const parent = document.getElementById(id);
        
    if (parent != null) {
        parent.addEventListener("click", handleContext);
        document.addEventListener("click", hideContext);
    } else return children;

    return (
        <>
        <div className="context">{children}</div>
        </>
    );
}

export default Context;
