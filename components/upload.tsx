import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import React from 'react';

const Input = styled('input')({
    display: 'none',
});

export default function UploadButton(props: {
    acceptFilter: string, 
    buttonText: string,
    onUpload: (file: File) => void
}) {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = Array.from(e.target.files)
        console.log("files:", files)
        props.onUpload(files[0])
    }

    return (
        <label htmlFor="contained-button-file">
            <Input 
                accept={props.acceptFilter} 
                id="contained-button-file" 
                multiple={false} 
                type="file" 
                onChange={handleFileChange}/>
            <Button variant="contained" component="span">
                {props.buttonText}
            </Button>
        </label>
    );
}