import { useState } from "react";
import { Box, Fade, List, Popper, styled } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import GuestList from "./GuestList";
import SearchBox from "../SearchBox";
import {
  SearchHotelContextType,
  useHotelSearch,
} from "../../context/SearchContext";
const GuestDropdownList = styled(List)({
  width: "340px",
  border: "1px solid #d4cccc",
  borderRadius: "3px",
  backgroundColor: "white",
});
const GuestListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingInline: "15px",
});

const age = ["room", "adult", "child"];

function SelectGuest() {
  const { dispatch, state } = useHotelSearch() as SearchHotelContextType;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const { adult, child, room } = state;
  const adultPlaceHolder = `${
    adult <= 1 ? `${adult} adult` : `${adult} adults`
  }`;
  const childPlaceHolder = `${
    child <= 1 ? `${child} child` : `${child} children`
  }`;
  const roomPlacehodler = `${room <= 1 ? `${room} room` : `${room} rooms`}`;
  const placeHolder = child
    ? roomPlacehodler + ", " + adultPlaceHolder + ", " + childPlaceHolder
    : roomPlacehodler + ", " + adultPlaceHolder;

  return (
    <>
      <SearchBox
        id="SelectGuest-poppe"
        handleClick={handleClick}
        placeHolder={placeHolder}
        startIcon={<PeopleIcon />}
        label="Rooms and Guests"
      />
      <Popper
        id="SelectGuest-poppe"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 999 }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <GuestDropdownList>
                <GuestListContainer>
                  {age.map((list) => (
                    <GuestList
                      key={list}
                      list={list}
                      guest={state}
                      dispatch={dispatch}
                    />
                  ))}
                </GuestListContainer>
              </GuestDropdownList>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}

export default SelectGuest;
