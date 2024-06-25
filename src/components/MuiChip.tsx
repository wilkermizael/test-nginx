import { Avatar, Chip, Stack } from "@mui/material"
import FaceIcon from "@mui/icons-material/Face"
import { useState } from "react"
export const MuiChip = () =>{
    const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
    const handlerDelete = (chipToDelete: string)=>{
        setChips( chips => chips.filter( chip => chip !== chipToDelete))
    }
    return(
        <Stack direction={'row'} spacing={'1'} margin={4}>
            <Chip
            label='Chip'
            color="primary"
            size="small"
            icon={<FaceIcon/>}
            />
            <Chip
            label='Chip outlined'
            color="secondary"
            size="small"
            variant="outlined"
            avatar={<Avatar>V</Avatar>}
            />
            <Chip label='Click' color="success" onClick={()=> alert('Success Clicked')}/>
            <Chip 
            label='Deleted' 
            color="error" 
            onClick={()=> alert('Success Clicked')}
            onDelete={()=> alert('Deleted handler called')}
            
            />
            {chips.map((chip)=> (
                <Chip key={chip} label={chip} onDelete={ ()=> handlerDelete(chip)}/>
            ))}
        </Stack>
    )
}