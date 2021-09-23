import React from 'react';
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/private-theming';

import { Box, Button, ButtonGroup, CssBaseline, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { EditRounded, PlayArrowRounded, ShareRounded, VisibilityRounded } from '@mui/icons-material';

import { TabPanel, BasicTabs } from "../../../components/basicTabs";
import UploadButton from '../../../components/upload';

import Workflow from '../../../types/workflow';
import timeAgo from '../../../lib/timeAgo';
import { canEditWorkflow } from '../../../lib/auth/auth';
import User from '../../../types/user';
import * as consts from '../../../lib/consts'

import { onSnapshot, doc, getDoc } from '@firebase/firestore';
import { createTheme } from '@material-ui/core';

export default class Workflow extends React.Component {

    versionedWorkflowListener;
    latestWorkflowContentListener;

    db;

    constructor(props) {
        super(props);

        const router = useRouter()
        this.state = {
            workflowId: router.query.wid,
            contributors: null, // User[]
            versionedWorkflow: null, // VersionedWorkflow?
            latestWorkflowContent: null // WorkflowContent?
        }
    }

    componentDidMount() {
        this.getWorkflow();
    }

    getWorkflow() {
        const versionedWorkflowRef = doc(this.db, 'versioned_workflows', this.state.workflowId)

        this.versionedWorkflowListener = onSnapshot(
            versionedWorkflowRef, async workflowDoc => {
            const versionedWorkflow = workflowDoc.data() as VersionedWorkflow;
            
            // get contributors
            this.db.collection('users')
                .where('id', 'in', versionedWorkflow.contributorUids)
                .get().then(snapshot => {
                    this.setState({
                        contributors: snapshot.docs.map(doc => doc.data() as User)
                    })
                })

            // if latestWorkflowContents has changed (including no longer being null)
            if(versionedWorkflow.allVersionIds.length != this.state.versionedWorkflow.allVersionIds.length) {
                // unsubscrbe the previous listener
                this.latestWorkflowContentListener()
                // create a new listener
                const latestWorkflowContentsRef = doc(this.db, 'workflow_contents', 
                    versionedWorkflow.allVersionIds[versionedWorkflow.allVersionIds.length-1].toString())
                this.latestWorkflowContentListener = onSnapshot(
                    latestWorkflowContentsRef, workflowContentDoc => {
                        this.setState({
                            latestWorkflowContents: workflowContentDoc.data() as WorkflowContent
                        })
                    })
                }

            // update state with versionedWorkflow
            this.setState({
                versionedWorkflow: versionedWorkflow,
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    unsubscribe() {
        this.versionedWorkflowListener()
        this.latestWorkflowContentListener()
    }

    render() {

        const theme = createTheme()

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                </Container>
            </ThemeProvider>
        )
        return <div>
            <DetailsHeader versionedWorkflow={this.state.versionedWorkflow} />

            <BasicTabs panelTitles={["Overview", "Versions"]}>
                <OverviewTab
                    versionedWorkflow={this.state.versionedWorkflow}
                    contributors={this.state.contributors}
                    workflowContent={this.state.workflowContent} />
                <VersionsTab
                    versionedWorkflow={this.state.versionedWorkflow}
                    contributors={this.state.contributors}
                    workflowContent={this.state.workflowContent} />
                <ExperimentsTab
                    versionedWorkflow={this.state.versionedWorkflow}
                    contributors={this.state.contributors}
                    workflowContent={this.state.workflowContent} />
            </BasicTabs>
        </div>
    }

}