import { AccountTreeRounded, BiotechRounded, AccountCircleRounded, LogoutRounded, SettingsRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";
import User from "../types/user";


export default function UserBadge(props: { user?: User }) {
    if (!props.user) { 
        // not logged in
        return <Box>
            <Button variant="text" href="/create_account">
                Create Account
            </Button>
            <Button variant="text" href="/login">
                Log In
            </Button>
        </Box>
    } else {
        // logged in
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        return <div>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar 
                            sx={{ width: 32, height: 32 }}
                            src={props.user.profilePicUrl}
                            alt={props.user.name} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountTreeRounded fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Workflows</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BiotechRounded fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Experiments</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsRounded fontSize="small" />
                    </ListItemIcon>
                <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LogoutRounded fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    }
}
