import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Box, Fade, Popper, styled } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { addDays, getDate } from "date-fns";
import { formatDateToPlaceholder } from "../../utils/formatDate";
// import CheckInOutBox from "./DateBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calender from "../Calender/Calender";
import SearchBox from "../SearchBox";
import { AddDateContextType, useAddDate } from "../../context/AddDateContext";
const ContainerCalender = styled(Box)({
  border: "1px solid #d4cccc",
  borderRadius: "3px",
  backgroundColor: "white",
  padding: "15px",
  // overflowY: "auto",
});

function SelectDate() {
  const { selectedDay, setSelectedDate, defaultSelected, disabledDay } =
    useAddDate() as AddDateContextType;
  const datePlaceholder = formatDateToPlaceholder(selectedDay);

  ////////////////////////////////////

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    const checkDay = { ...selectedDay };

    if (!checkDay?.from) {
      setSelectedDate(defaultSelected);
    } else if (
      !checkDay?.to ||
      getDate(checkDay.from!) === getDate(checkDay.to!)
    ) {
      setSelectedDate({
        from: checkDay.from,
        to: addDays(checkDay.from!, 1),
      });
    }

    setAnchorEl(null);
  };

  return (
    <>
      <SearchBox
        id="Calender-popper"
        handleClick={handleClick}
        placeHolder={datePlaceholder}
        startIcon={<CalendarMonthIcon />}
        label="Date Check in and out"
      />
      <Popper
        id="Calender-popper"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 999 }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <ContainerCalender>
                <Calender
                  disabledDay={disabledDay}
                  selectedDay={selectedDay}
                  setSelectedDate={setSelectedDate}
                />
              </ContainerCalender>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}
export default SelectDate;
// const checkDay = { ...selectedDay };
// console.log(!checkDay?.from);
// if (!checkDay?.from) {
//   setSelectedDate(defaultSelected);
//   setAnchorEl(null);
//   return;
// }
// if (!checkDay?.to) {
//   setSelectedDate({
//     from: checkDay.from,
//     to: addDays(checkDay.from!, 1),
//   });
//   setAnchorEl(null);
//   return;
// }
// if (getDate(checkDay.to!) === getDate(checkDay.from!)) {
//   setSelectedDate({
//     from: checkDay.from,
//     to: addDays(checkDay.from!, 1),
//   });
//   setAnchorEl(null);
//   return;
// }
// setAnchorEl(null);
