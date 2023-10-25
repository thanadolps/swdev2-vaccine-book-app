import Booking from "@/app/booking/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

const initialState = {
  booking: null as BookingItem | null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookingItem>) => {
      state.booking = action.payload;
    },
    removeBook: (state, action: PayloadAction) => {
      state.booking = null;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
