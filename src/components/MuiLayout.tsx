import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

export const MuiLayout = () => {
    return (
        <Paper sx={{ padding:'32px'}} elevation={24} >
        <Stack sx={{ border: '1px solid'}} direction={'row'} spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                transition: 'background-color 0.3s, width 0.3s', // Transição suave padrão
                '&:active': {
                    backgroundColor: 'secondary.main',
                    width: '150px',
                    transition: 'background-color 0.3s, width 0.3s', // Transição suave quando hover
                },
                '&:not(:active)': {
                    backgroundColor: 'primary.main',
                    width: '100px',
                    transition: 'all 1s'
                }
            }}
        >
            CodeEvolution
        </Box>

        <Box 
        display={'flex'} 
        height={'100px'} 
        width={'100px'}
        bgcolor={'success.light'}
        p={2}
        >

        </Box>
        </Stack>
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} sm={6}>
                <Box bgcolor={'primary.light'} p={2}> Item 1</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor={'primary.light'} p={2}> Item 2</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor={'primary.light'} p={2}> Item 3</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor={'primary.light'} p={2}> Item 4</Box>
            </Grid>
        </Grid>
        </Paper>
    );
};