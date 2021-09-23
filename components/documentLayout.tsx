import { TimerRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player"
import BasicContent from "./basicContent";
import DefaultLayout from "./defaultLayout";

export default function DocumentLayout(props: {
    title: string;
    description: string;
    video_url: string;
    estimated_time?: string;
    children;
}): React.ReactElement {

    return (
        <DefaultLayout>
            <BasicContent odd>
                <Box>
                    <Typography variant="h1">
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.description}
                    </Typography>
                    {props.estimated_time &&
                    <Typography variant="body2">
                        <TimerRounded /> {props.estimated_time}
                    </Typography>}
                </Box>
                
                {props.video_url &&
                <ReactPlayer
                    url={props.video_url}
                    controls={true}
                />}

                {props.children}
            </BasicContent>
        </DefaultLayout>
    );
}