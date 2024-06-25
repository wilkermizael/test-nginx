
import NavigateNextIcon  from "@mui/icons-material/NavigateNext"
import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

export const MuiBreadcrumbs = () =>{
    return(
        <Box m={2}>
            <Breadcrumbs aria-label=" breadcrumbs"
            separator={<NavigateNextIcon fontSize="small"/>}
            maxItems={2}
            >
                <Link underline="hover" href='#'> Home</Link>
                <Link underline="hover" href='#'> Catalog</Link>
                <Link underline="hover" href='#'> Accessories</Link>
                <Typography color={'tex.primary'}> Shoes</Typography>
                
            </Breadcrumbs>
        </Box>
    )
}