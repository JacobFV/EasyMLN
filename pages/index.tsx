import { Box, Button, Typography } from "@mui/material"
import React from "react"
import BasicContent from "../components/basicContent"
import DefaultLayout from "../components/defaultLayout"

export default () => 
<DefaultLayout>

    <Typography variant="h1">
        EasyMLN
    </Typography>
    <Typography variant="h2">
        Simplifying data analysis from end-to-end
    </Typography>

    [Slideshow with videos]

    <Typography variant="body1">
        Exploring, analyzing, and visualizing the complex underlying structure of big data shouldn't require speaking computer-ese. EasyMLN unifies all three process under an end-to-end node-based graphic user interface.
    </Typography>

<BasicContent odd>
    <Box>
        <Typography variant="h2">
            Node-based workflows
        </Typography>
        <Typography variant="body1">
            EasyMLN simplifies data analysis and visualization into a drag-and-drop problem. Build a **workflow** by placing and connecting a graph of **nodes**. There are three main categories of nodes:
        </Typography>
        <Typography variant="body1">
            <b>Input nodes</b>: EasyMLN workflows accept data supplied in various formats including .csv, .json, .txt, and raw values. You can either specify your data in the workflow, require it to be given by the experimenter, or download it directly from an external URL.
        </Typography>
        <Typography variant="body1">
            <b>Analysis nodes</b>: Connect operation-specific nodes togethor to compose advanced data manipulation operations. EasyMLN provides nodes for a variety multilayer network analysis operations right out of the box including (LIST). It also lets you write custom javascript when there aren't any nodes that meet your needs. 
        </Typography>
        <Typography variant="body1">
            <b>Visualization nodes</b>: Output processed data for human consumption. Generate professional-quality bargraphs, linegraphs, [LIST POPULAR OUTPUT], ... even 
        </Typography>
    </Box>
    <Box>
        [Continuously scrolling LTR of gallary of nodes with transparent backgrounds]
        [Continuously scrolling LTR of gallary of nodes with transparent backgrounds]
        [Continuously scrolling LTR of gallary of nodes with transparent backgrounds]
    </Box>
</BasicContent>

<BasicContent even>
    <Box>
    <Typography variant="h2">
        Run experiments
    </Typography>
    <Typography variant="body1">
        Once you have an workflow, it's time to run an experiment on it. Specify input values, click the run button, and viola! You will be presented with a view of the workflow's output visualizations. Most visualizations expand when they are clicked on, and a few are even interactive. 
    </Typography>
    </Box>
    <Box>
        [fade gallery with transparent background of these features]
    </Box>
</BasicContent>

<BasicContent odd>
    <Box>
    <Typography variant="h2">
        Researcher-oriented
    </Typography>
    <Typography variant="body1">
        Experiments are automatically tracked for you, so you can refer back to them for later human analysis. It's easy to download the generated visualizations as image files. You can also add text notes, adjust the arrangement of inputs and outputs, and share the entire experiment document with others so they can verify and reproduce your findings. Finally, you can directly generate a publication-quality PDF report of your experiment to provide as supplementary material to your research publications.
    </Typography>
    </Box>
    <Box>
        [fade gallery with transparent background of these features]
    </Box>
</BasicContent>

<BasicContent even>
    <Box>
    <Typography variant="h2">
        Community-oriented 
    </Typography>
    <Typography variant="body1">
        It's easy to share workflows and experiments with others. View the gallery of publically shared workflows and experiments below:
    </Typography>
    <Button variant="contained" color="primary">Gallery</Button>
    </Box>
    <Box>
        Trending:
        [list trending workflows]
    </Box>
</BasicContent>

<BasicContent odd>
    <Box>
    <Typography variant="h2">
        Free for all forever
    </Typography>
    <Typography variant="body1">
        Knowledge is power, and EasyMLN aims to remove as many hurdles between you and this power as possible. That's why EasyMLN is free forever. We'll never put a quota between you and your data-processing or bug you with advertisements. For you developers, this website is also completely open-source on [github](link). That being said, you can donate here.
    </Typography>
    </Box>
    <Box>
[list of donors]
</Box>
</BasicContent>

</DefaultLayout>