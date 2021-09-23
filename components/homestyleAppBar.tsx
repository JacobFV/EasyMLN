import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import EasyMLNIcon from "./appIcon";
import UserBadge from "./userBadge";


export default function HomestyleAppBar(props: {}) {

    const user=null; //TODO: get user from session

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton>
                        <EasyMLNIcon />
                    </IconButton>
                    <Button href="/gallery">Gallery</Button>
                    <Button href="/learn">Learn</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <UserBadge user={user}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}