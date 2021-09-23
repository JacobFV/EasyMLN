import {Box,CssBaseline,ThemeProvider,Container,createTheme} from '@mui/material'
import HomestyleAppBar from '../components/homestyleAppBar'
import React from 'react';
import Copyright from '../components/copyright';

export default function DefaultLayout(props: {children}) {
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
        <CssBaseline />
        <HomestyleAppBar />
        <Box sx={{m: 8}} />

        {props.children}

        <Box sx={{m: 2}} />
        <Copyright/>
        </Container>
        </ThemeProvider>
    )
}