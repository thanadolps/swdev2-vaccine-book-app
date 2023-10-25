"use client";

import { removeBook } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Page() {
  const booking = useAppSelector((state) => state.bookSlice.booking);
  const dispatch = useDispatch<AppDispatch>();

  function cancelBooking() {
    dispatch(removeBook());
    toast.success("Booking Cancelled");
  }

  return (
    <Card className="p-6 my-6 w-96 mx-auto" elevation={4}>
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 border-b-4 border-gray-400">
          Your Booking
        </h2>
        {booking == null ? (
          <h2 className="text-2xl font-bold text-neutral-600">
            No Vaccine Booking
          </h2>
        ) : (
          <>
            <p>
              <b>Firstname:</b> {booking.firstname}
            </p>
            <p>
              <b>Lastname:</b> {booking.lastname}
            </p>
            <p>
              <b>National ID:</b> {booking.nationalId}
            </p>
            <p>
              <b>Hospital:</b> {booking.hospital}
            </p>
            <p>
              <b>Date:</b> {booking.date.toLocaleDateString()}
            </p>
          </>
        )}
      </CardContent>
      <CardActions>
        {booking ? (
          <Button color="error" onClick={() => cancelBooking()}>
            Cancel booking
          </Button>
        ) : (
          <Button color="primary" size="large" href="/mybooking">
            Go Book Now
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
