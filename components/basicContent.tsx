import React from 'react';
import AnimatedVisualTextContent from './animatedVisualTextContent';

export default function BasicContent(props: {
    odd?: boolean,
    even?: boolean,
    animationStartFn?: () => void,
    animationStopFn?: () => void,
    children: React.ReactElement | React.ReactElement[],
}): React.ReactElement {
    // convert children to array if not already
    const children = Array.isArray(props.children) ? props.children : [props.children];

    if (children.length == 1) {
        return children[0];
    } else {
        return <AnimatedVisualTextContent
            visualContentFirst={props.odd==null}
            visualContent={children[1]}
            textContent={children[0]}
            animationStartFn={props.animationStartFn}
            animationStopFn={props.animationStopFn} />;
    }
}