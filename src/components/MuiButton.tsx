import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
export const MuiButton = ()=>{
    const [formats , setFormats] = useState<string| null>(null)
    console.log(formats)
    const handleFormatsChange = (_event: React.MouseEvent<HTMLElement>, updatatedFormats: string | null) =>{
        setFormats(updatatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained" href="https://google.com.br">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Stack spacing={2} direction= 'row'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

             <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>alert('Clicado')}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon/> } disableElevation >Send</Button>

                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon/>
                </IconButton>
            </Stack>

            <Stack direction={'row'}>
                <ButtonGroup variant="contained">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={'row'}>
                <ButtonGroup variant="contained" orientation= "vertical" size="small" color="secondary" aria-label=" alignment button group">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
    </Stack>

            <Stack direction={'row'}>
                <ToggleButtonGroup 
                aria-label="text formatting" 
                value={formats} 
                onChange={ handleFormatsChange}
                exclusive
                >
                    <ToggleButton value={'bold'} aria-label="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={'underlined'} aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}