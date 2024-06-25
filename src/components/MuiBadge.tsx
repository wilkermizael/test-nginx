import MailIcon from "@mui/icons-material/Mail"
import { Badge, Stack } from "@mui/material"

export const MuiBadge = ()=>{
    return(
        <Stack spacing={2} direction={'row'} margin={5}>
            <Badge badgeContent={5} color="primary">
                <MailIcon/>
            </Badge>

            <Badge badgeContent={0} color="secondary" showZero>
                <MailIcon/>
            </Badge>

            <Badge badgeContent={100} color="success">
                <MailIcon/>
            </Badge>

            <Badge badgeContent={100} color="primary" max={999}>
                <MailIcon/>
            </Badge>

            <Badge variant="dot" color="primary" invisible={true}>
                <MailIcon/>
            </Badge>
        </Stack>
    )
}