import { useState } from "react";

import { Box, Fade, Popper, styled } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { getDate } from "date-fns";
import { formatDateToPlaceholder } from "../../../utils/formatDate";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calender from "../../../components/Calender/Calender";
import SearchBox from "../SearchBox";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";

import { addCheckOutDate, setDefaultDate } from "../searchSlice";
import { useParams } from "react-router-dom";

const ContainerCalender = styled(Box)({
  border: "1px solid #d4cccc",
  borderRadius: "3px",
  backgroundColor: "white",
  padding: "15px",
});

function SelectDate() {
  const dateTimestamp = useSelector((state: RootState) => state.search.date);
  const dispatch = useAppDispatch();
  const { placeParam } = useParams();

  const date = {
    from: dateTimestamp.from ? new Date(dateTimestamp.from) : undefined,
    to: dateTimestamp.to ? new Date(dateTimestamp.to) : undefined,
  };

  const datePlaceholder = formatDateToPlaceholder(date);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    if (!date.from) {
      dispatch(setDefaultDate());
    } else if (!date.to || getDate(date.from) === getDate(date.to)) {
      dispatch(addCheckOutDate(date.from.getTime()));
    }
    // if (placeParam) console.log("FETCH...................");
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
                <Calender selectedDay={date} />
              </ContainerCalender>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}
export default SelectDate;
