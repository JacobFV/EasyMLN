/* displays blocks of content that
    - alternate the side of visual content on wide displays
    - only let one content block animate at a time
*/

import { Box } from "@mui/material"
import React from "react"



export default function AnimatedVisualTextContent(props: {
    visualContentFirst: boolean,
    visualContent: React.ReactElement,
    textContent: React.ReactElement,
    animationStartFn?: () => void,
    animationStopFn?: () => void,
}): React.ReactElement {

    const smallSize = "sm"
    const largeSize = "lg"

    const inlineVisualContentSettings = {display: "flex"}
    const inlineTextContentSettings = {display: "flex", flexDirection: "column"}
    const inlineBox = (
            <Box sx={{display: { smallSize: 'block', largeSize: 'none'}}}>
                <Box sx={props.visualContentFirst ? inlineVisualContentSettings : inlineTextContentSettings}>
                    {props.visualContentFirst ? props.visualContent : props.textContent}
                </Box>
                <Box sx={!props.visualContentFirst ? inlineVisualContentSettings : inlineTextContentSettings}>
                    {!props.visualContentFirst ? props.visualContent : props.textContent}
                </Box>
            </Box>
    )

    const notInlineVisualContentSettings = {display: "block"}
    const notInlineTextContentSettings = {display: "block"}
    const notInlineBox = (
        <Box sx={{display: { smallSize: 'none', largeSize: 'block'}}}>
            <Box sx={props.visualContentFirst ? notInlineTextContentSettings : notInlineVisualContentSettings}>
                {props.visualContentFirst ? props.textContent : props.visualContent}
            </Box>
            <Box sx={!props.visualContentFirst ? notInlineTextContentSettings : notInlineVisualContentSettings}>
                {!props.visualContentFirst ? props.textContent : props.visualContent}
            </Box>
        </Box>
    )

    return (
        <Box 
        onMouseEnter={(e) => {props.animationStartFn && props.animationStartFn()}}
        onMouseLeave={(e) => {props.animationStopFn && props.animationStopFn()}}
         >
            {inlineBox}
            {notInlineBox}
        </Box>
    );
}
