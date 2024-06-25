import { Stack, Rating, Typography } from "@mui/material"
import {useState} from 'react'
import  FavoriteIcon  from "@mui/icons-material/Favorite"
import  FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder"


export const MuiRating = () =>{
    const [value, setValue] = useState<number |null >(null)
    console.log({value})
 const handleChange = (_event: React.ChangeEvent< unknown>, newValue: number | null) =>{
        setValue(newValue)
}
    return(
        <Stack spacing={2}>
           <Typography component="legend" align="left">10 stars</Typography>
           <Rating 
           value={ value} 
           onChange={handleChange} 
           defaultValue={2} max={10} 
           precision={.5}
           size="large"
           readOnly
           icon={<FavoriteIcon fontSize="inherit" color="error"/>}
           emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
           />
        </Stack>
    )
}