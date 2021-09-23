import { Box, IconButton } from "@mui/material";
import appinfo from "../src/common/appInfo";

export default function EasyMLNIcon(props: any) {
    return (
        <IconButton
            href="/"
            >
                <Box component="img" sx={{ m: 1 }}  src='icon.svg' />
        </IconButton>
    );
}