import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material"
export const MuiRadioButton = () =>{
    return(
        <Box>
            <FormControl>
            <FormLabel id="job-experience-group-label">
                Years of Experience
            </FormLabel>
            <RadioGroup name="job-experience-group" aria-label="job-experience-group-label">
                <FormControlLabel control={<Radio/>} label='0-2' value={'0-2'}/>
                <FormControlLabel control={<Radio/>} label='3-5' value={'3-5'}/>
                <FormControlLabel control={<Radio/>} label='6-10' value={'6-10'}/>
            </RadioGroup>
            </FormControl>
        </Box>
    )
}