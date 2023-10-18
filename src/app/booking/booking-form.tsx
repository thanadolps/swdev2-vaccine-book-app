"use client";

import {
  Select,
  MenuItem,
  TextField,
  Card,
  Paper,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Hospital } from "@/models/hospital";

type BookingFormProps = {
  hospitals: Hospital[];
};

export default function BookingForm(props: BookingFormProps) {
  return (
    <Paper className="m-4 p-6" elevation={4}>
      <h2 className="text-2xl font-bold mb-4">Book you vaccine 💉🏥 </h2>
      <form
        className="flex flex-col gap-3"
        action="https://postman-echo.com/post"
        method="POST"
      >
        <TextField required name="name" label="your name" variant="outlined" />
        <TextField
          required
          name="id"
          label="your citizen id"
          variant="outlined"
          type="number"
        />
        <Select required name="hospital" label="hospital">
          {props.hospitals.map((hospital) => (
            <MenuItem key={hospital.id} value={hospital.name}>
              {hospital.name}
            </MenuItem>
          ))}
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="date" />
        </LocalizationProvider>

        <div className="flex flex-col">
          <Button variant="outlined" type="submit">
            Book
          </Button>

          <span className="text-xs text-gray-500">
            by booking, you agree to our{" "}
            <a
              href="https://raw.githubusercontent.com/collective/example.p4p5/master/LICENSE.GPL"
              target="_blank"
              className="text-blue-500"
            >
              terms and conditions
            </a>
          </span>
        </div>
      </form>
    </Paper>
  );
}
