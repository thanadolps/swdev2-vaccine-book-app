"use client";

import { Select, MenuItem, TextField, Paper, Button } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Hospital } from "@/models/hospital";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBook } from "@/redux/features/bookSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type BookingFormProps = {
  hospitals: Hospital[];
};

type BookingFormData = {
  name: string;
  id: number;
  hospital: string;
  date: dayjs.Dayjs;
};

export default function BookingForm(props: BookingFormProps) {
  const { register, control, handleSubmit } = useForm<BookingFormData>();
  const disptach = useDispatch<AppDispatch>();
  const router = useRouter();

  function onSubmit({ name, id, hospital, date }: BookingFormData) {
    const [firstname, lastname] = name.split(" ");

    disptach(
      addBook({
        firstname: firstname,
        lastname: lastname,
        nationalId: id + "",
        hospital,
        date: date.format("DD/MM/YYYY"),
      })
    );

    toast.success("Booking Success");
    router.push("/mybooking");
  }

  return (
    <Paper className="m-4 p-6" elevation={4}>
      <h2 className="text-2xl font-bold mb-4">Book you vaccine 💉🏥 </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <TextField
          required
          label="your name"
          variant="outlined"
          {...register("name")}
        />

        <TextField
          required
          label="your citizen id"
          variant="outlined"
          type="number"
          {...register("id")}
        />

        <Select
          required
          label="hospital"
          defaultValue=""
          {...register("hospital")}
        >
          <MenuItem value="" disabled selected>
            Select Hospital
          </MenuItem>
          {props.hospitals.map((hospital) => (
            <MenuItem key={hospital.id} value={hospital.name}>
              {hospital.name}
            </MenuItem>
          ))}
        </Select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker label="date" onChange={onChange} value={value} />
            )}
            control={control}
            name="date"
            defaultValue={dayjs()}
          />
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
