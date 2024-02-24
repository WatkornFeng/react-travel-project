import { format, getDate } from "date-fns";
import { DateRange } from "react-day-picker";
function dateToString(from: Date, to?: Date): string {
  const fromDateString = `${from.toLocaleString("en-US", {
    weekday: "short",
  })} ${from.getDate()} ${from.toLocaleString("en-US", { month: "short" })}`;

  if (!to) {
    return `${fromDateString} ― Check-out date`;
  }
  const toDateString = `${to.toLocaleString("en-US", {
    weekday: "short",
  })} ${to.getDate()} ${to.toLocaleString("en-US", { month: "short" })}`;
  return `${fromDateString} ― ${toDateString}`;
}

export function timestampToFormatDate(timestamp: number) {
  const formattedDate = format(new Date(timestamp), "yyyy-MM-dd");

  return formattedDate;
}

export function formatDateToPlaceholder(selectedDay: DateRange | undefined) {
  const { from, to } = { ...selectedDay };

  let placeholder = "";
  if (from === undefined) {
    placeholder = "Please select date";
  } else if (to === undefined || getDate(from) === getDate(to!)) {
    placeholder = dateToString(from);
  } else {
    placeholder = dateToString(from, to);
  }

  return placeholder;
}
