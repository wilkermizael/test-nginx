import {Typography} from '@mui/material'
import styled from 'styled-components';
export const MuiTypography = ()=>{

const StyledTypography = styled(Typography)`
  
    color: red;

`;
    return(
        <div>
            <StyledTypography variant='h1'>Styled Typography</StyledTypography>
            <Typography variant='h1'gutterBottom> h1 Heading</Typography>
            <Typography variant='h2'> h2 Heading</Typography>
            <Typography variant='h3'> h3 Heading</Typography>
            <Typography variant='h4'> h4 Heading</Typography>

            <Typography variant='subtitle1'> Subtitle 1</Typography>
            <Typography variant='subtitle2'> Subtitle 2</Typography>

            <Typography variant='body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem ipsa, eum quae aspernatur beatae voluptatum ducimus magnam itaque iure molestiae illo deleniti pariatur unde repellendus porro inventore. Vero, explicabo.1</Typography>
            <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex, maiores earum ut eos delectus ipsa quia ullam voluptatum! Repellendus ipsa alias blanditiis eligendi excepturi assumenda corporis hic facere adipisci!  </Typography>
        </div>
    )
}

