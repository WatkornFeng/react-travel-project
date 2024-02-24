import { DateRange } from "react-day-picker";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDays } from "date-fns";
export interface IGuest {
  adult: number;
  child: number;
  room: number;
}
export interface IDate {
  from: number | undefined;
  to: number | undefined;
}

interface IinitailState {
  place: string;
  guest: IGuest;
  date: IDate;
}
const initialState: IinitailState = {
  place: "",
  guest: {
    adult: 1,
    child: 0,
    room: 1,
  },
  date: {
    from: new Date().getTime(), // today
    to: new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(), // tomorrow
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    incrementGuest(state, action: PayloadAction<string>) {
      if (action.payload === "adult") state.guest.adult += 1;
      if (action.payload === "child") state.guest.child += 1;
      if (action.payload === "room") {
        if (state.guest.room >= state.guest.adult) {
          state.guest.adult += 1;
          state.guest.room += 1;
        } else {
          state.guest.room += 1;
        }
      }
    },
    decrementGuest(state, action: PayloadAction<string>) {
      if (action.payload === "adult") state.guest.adult -= 1;
      if (action.payload === "child") state.guest.child -= 1;
      if (action.payload === "room") state.guest.room -= 1;
    },
    setDefaultDate(state) {
      state.date = initialState.date;
    },
    addCheckOutDate(state, action: PayloadAction<number>) {
      state.date.to = addDays(action.payload, 1).getTime();
    },

    selectDateRange: {
      prepare(event: DateRange | undefined) {
        if (!event) {
          return {
            payload: {
              from: undefined,
              to: undefined,
            },
          };
        }
        return {
          payload: {
            from: event.from ? event.from.getTime() : undefined,
            to: event.to ? event.to.getTime() : undefined,
          },
        };
      },
      reducer(state, action: PayloadAction<IDate>) {
        state.date.from = action.payload.from;
        state.date.to = action.payload.to;
      },
    },

    selectPlace(state, action: PayloadAction<string>) {
      state.place = action.payload;
    },
  },
});

export const {
  incrementGuest,
  decrementGuest,
  setDefaultDate,
  addCheckOutDate,
  selectDateRange,
  selectPlace,
} = searchSlice.actions;
export default searchSlice.reducer;
