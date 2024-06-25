import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

type Skill = {
    id:number,
    label:string
}

export const MuiAutocomplete = ()=>{
    const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Typescript', 'Node.js']
    const [myValue, setMyValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    const skillOptions = skills.map((skill, index) =>({
        id: index +1,
        label: skill
    }))
    console.log({skill})
    return(
        <Stack spacing={2} width={'250px'}>
            <Autocomplete
                options={skills}
                renderInput={(params)=> <TextField {...params} label="Skills"/>}
                value={myValue}
                onChange={( _event: unknown, newValue: string | null)=> setMyValue(newValue)}
                freeSolo
            />
              <Autocomplete
                options={skillOptions}
                renderInput={(params)=> <TextField {...params} label="Skills"/>}
                value={skill}
                onChange={( _event: React.ChangeEvent<unknown>, newValue: Skill | null)=> setSkill(newValue)}
       
            />
        </Stack>
    )
}