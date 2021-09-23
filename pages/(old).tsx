import Link from 'next/link'
import VersionedWorkflow from '../types/versionedWorkflow'
import { 
  Button,
  Card, CardMedia, CardProps, CardContent, CardActions, CardHeader
 } from '@mui/material'
 import {
  CreateRounded, PlayArrowRounded,
 } from '@mui/icons-material'

function WorkflowCard(workflow: VersionedWorkflow) {

  return (
    <Card>
      <CardMedia>
        <img src={workflow.previewImageURL} />
      </CardMedia>

      <CardHeader>
        <h2>{workflow.latest.meta.name}</h2>
      </CardHeader>

      <CardContent>
        <p>{workflow.latest.meta.description}</p>
      </CardContent>

      <CardActions>
        <Button>
          <Link href={`/editor/${workflow.meta.guid}`}>
            <CreateRounded/> <a>edit</a>
          </Link>
        </Button>

        <Button>
          <Link href={`/experiment/${workflow.meta.guid}`}>
            <PlayArrowRounded/> <a>run</a>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

function Index() {
    return (
        <div>
            <h1>EasyMLN</h1>
        </div>
    );
}

export default Index;