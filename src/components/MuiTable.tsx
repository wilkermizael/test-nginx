import { TableContainer,Table ,TableHead, TableBody,TableRow, TableCell,Paper } from "@mui/material"
export const MuiTable=  ()=>{
    return (
       <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label='Simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map( row =>(
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                             <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>   
                            </TableRow>
                        ))
                    }
                    
                </TableBody>
            </Table>

       </TableContainer>
    )
}

const tableData = 
    [{
  "id": 1,
  "first_name": "Pierette",
  "last_name": "Chipping",
  "email": "pchipping0@over-blog.com",
  "gender": "Female",
  "ip_address": "38.78.250.213"
}, {
  "id": 2,
  "first_name": "Lesly",
  "last_name": "Pethrick",
  "email": "lpethrick1@aboutads.info",
  "gender": "Female",
  "ip_address": "14.105.5.39"
}, {
  "id": 3,
  "first_name": "Tabbie",
  "last_name": "Bucksey",
  "email": "tbucksey2@simplemachines.org",
  "gender": "Male",
  "ip_address": "68.172.254.128"
}, {
  "id": 4,
  "first_name": "Eliot",
  "last_name": "Sapauton",
  "email": "esapauton3@elpais.com",
  "gender": "Male",
  "ip_address": "202.16.102.109"
}, {
  "id": 5,
  "first_name": "Lib",
  "last_name": "Hicken",
  "email": "lhicken4@apache.org",
  "gender": "Female",
  "ip_address": "219.40.227.206"
}, {
  "id": 6,
  "first_name": "Angie",
  "last_name": "Shirt",
  "email": "ashirt5@aol.com",
  "gender": "Female",
  "ip_address": "136.105.86.188"
}, {
  "id": 7,
  "first_name": "Gerhardine",
  "last_name": "Baus",
  "email": "gbaus6@buzzfeed.com",
  "gender": "Female",
  "ip_address": "193.183.98.67"
}, {
  "id": 8,
  "first_name": "Brana",
  "last_name": "Cardnell",
  "email": "bcardnell7@ezinearticles.com",
  "gender": "Genderqueer",
  "ip_address": "5.134.83.68"
}, {
  "id": 9,
  "first_name": "Harrison",
  "last_name": "Blanchet",
  "email": "hblanchet8@blogger.com",
  "gender": "Male",
  "ip_address": "132.181.35.236"
}, {
  "id": 10,
  "first_name": "Kienan",
  "last_name": "Rankling",
  "email": "krankling9@wunderground.com",
  "gender": "Male",
  "ip_address": "53.113.32.14"
}]
