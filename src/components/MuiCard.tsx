import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material"

export const MuiCard = () =>{
    return(
       
        <Box width={'300px'} display={'flex'}>
            <Card elevation={24}>
                <CardMedia
                component={'img'}
                height={'140'}
                image="https://source.unsplash.com/random"
                alt="unsplash image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component={'div'}>
                        React
                    </Typography>
                     <Typography variant="body2" color={'text.secondary'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus pariatur doloribus unde at 
                        tempore libero ea aspernatur quis, debitis ipsam saepe harum blanditiis, accusamus laudantium dolorum et culpa aliquam!
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small">Share</Button>
                     <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
} 