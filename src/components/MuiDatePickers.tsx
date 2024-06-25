import { Stack } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import dayjs from 'dayjs';

export const MuiDatePickers = () => {
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  return (
    <Stack spacing={4} direction={"row"}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker label="Agendamento" 
        value={selectedDate}
        onChange={(newValue)=> setSelectedDate(newValue)}
        />
      </DemoContainer>
    </Stack>
  );
};

