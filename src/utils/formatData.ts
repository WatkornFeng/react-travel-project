import { IDate, IGuest } from "../features/search/searchSlice";
import { timestampToFormatDate } from "./formatDate";

interface Idata {
  date: IDate;
  guest: IGuest;
}
export function convertDataToArr(data: Idata) {
  const {
    date: { from, to },
    guest: { adult, child, room },
  } = data;
  const arr: string[] = [];
  // console.log(from);

  const startDate = from
    ? "startDate=" + timestampToFormatDate(from)
    : "startDate=Please select a date";
  const endDate = to
    ? "endDate=" + timestampToFormatDate(to)
    : "endDate=Please select a date";

  arr.push(startDate);
  arr.push(endDate);
  arr.push(`adults=${adult}`);
  arr.push(`children=${child}`);
  arr.push(`rooms=${room}`);
  return arr;
}
