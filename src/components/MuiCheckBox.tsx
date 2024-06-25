import { Box, FormControlLabel, Checkbox, FormHelperText, FormControl, FormLabel, FormGroup } from "@mui/material"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from "react"
export const MuiCheckBox = () =>{
    const [accept, setAccept] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log(skills)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAccept(event.target.checked)
    }
    const skillsChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter( (skill) => skill !== event.target.value))
        }
    }
    return(
      <Box>
        
            <Box>
              <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={accept} onChange={handleChange}/>}>

              </FormControlLabel>
              
              <FormHelperText></FormHelperText>
            </Box>

            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon  ={<BookmarkIcon/>} checked={accept} onChange={(handleChange)} >

                </Checkbox>
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel 
                        label="HTML" 
                        control={<Checkbox value={'html'} 
                        checked={skills.includes('html')} 
                        onChange={skillsChange}/>}/>

                          <FormControlLabel 
                        label="CSS" 
                        control={<Checkbox value={'css'} 
                        checked={skills.includes('css')} 
                        onChange={skillsChange}/>}/>

                          <FormControlLabel 
                        label="Javascript" 
                        control={<Checkbox value={'javascript'} 
                        checked={skills.includes('javascript')} 
                        onChange={skillsChange}/>}/>

                    </FormGroup>
                </FormControl>
            </Box>
      </Box>
    )
}