import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calender.css";
import { Dispatch, SetStateAction } from "react";
interface TypeCalender {
  selectedDay: DateRange | undefined;
  setSelectedDate: Dispatch<SetStateAction<DateRange | undefined>>;
  disabledDay: DateRange;
}

function Calender({ selectedDay, setSelectedDate, disabledDay }: TypeCalender) {
  return (
    <DayPicker
      mode="range"
      showOutsideDays
      numberOfMonths={2}
      selected={selectedDay}
      onSelect={setSelectedDate}
      disabled={disabledDay}
    />
  );
}

export default Calender;
