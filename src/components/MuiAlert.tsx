import { Stack, Alert, AlertTitle, Button } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
export const MuiAlert = () =>{
    return (
        <Stack spacing={2}>
            <Alert severity="error"> This is  an error Alert</Alert>
            <Alert severity="warning"> This is  an warning Alert</Alert>
            <Alert severity="info"> This is  an info Alert</Alert>
            <Alert severity="success"> This is  a success Alert</Alert>

            <Alert variant='filled'severity="error" onClose={()=> alert('Close Alert')}> 
            <AlertTitle>Error</AlertTitle>
            This is  an error Alert</Alert>
            <Alert variant='filled'severity="warning"> 
            <AlertTitle>Warning</AlertTitle>
            This is  an warning Alert</Alert>
            <Alert variant='filled'severity="info"> 
            <AlertTitle>Info</AlertTitle>
            This is  an info Alert</Alert>
            <Alert variant='filled'severity="success" icon={<CheckIcon fontSize='inherit'/>} action={
                <Button color="inherit" size="small" > UNDO</Button>
            }> 
            <AlertTitle>Success</AlertTitle>
            This is  a success Alert</Alert>

            <Alert variant='outlined'severity="error"> This is  an error Alert</Alert>
            <Alert variant='outlined'severity="warning"> This is  an warning Alert</Alert>
            <Alert variant='outlined'severity="info"> This is  an info Alert</Alert>
            <Alert variant='outlined'severity="success"> This is  a success Alert</Alert>
        </Stack>
    )
}