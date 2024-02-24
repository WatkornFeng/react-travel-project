import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calender.css";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../store";
import {
  selectDateRange,
  addCheckOutDate,
  setDefaultDate,
} from "../../features/search/searchSlice";
import { useParams } from "react-router-dom";
import { getDate } from "date-fns";

interface TypeCalender {
  selectedDay: DateRange | undefined;
}

function Calender({ selectedDay }: TypeCalender) {
  const dispatch = useAppDispatch();
  const disabledDay: DateRange = {
    from: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    to: new Date(0), // 1970-01-01
  };

  const onSetSelectedDate = (event: DateRange | undefined) => {
    dispatch(selectDateRange(event));
  };

  return (
    <DayPicker
      mode="range"
      showOutsideDays
      numberOfMonths={2}
      selected={selectedDay}
      onSelect={onSetSelectedDate}
      disabled={disabledDay}
    />
  );
}

export default Calender;
