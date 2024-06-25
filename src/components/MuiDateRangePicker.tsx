import { Box} from "@mui/material"
import { DateRangePicker} from "@mui/lab";
export const MuiDateRangePiker = () =>{
    return (
      <Box width={"250px"}>
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
      </Box>
    );
}