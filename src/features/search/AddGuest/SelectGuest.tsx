import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Fade, List, Popper, styled } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { RootState, useAppDispatch } from "../../../store";

import GuestList from "./GuestList";
import SearchBox from "../SearchBox";
import { useParams } from "react-router-dom";

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

const lists = ["room", "adult", "child"];

function SelectGuest() {
  const guest = useSelector((state: RootState) => state.search.guest);

  const dispatch = useAppDispatch();
  const { placeParam } = useParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    // if (placeParam) console.log("FETCH...................");

    setAnchorEl(null);
  };

  const { adult, child, room } = guest;
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
                  {lists.map((list) => (
                    <GuestList key={list} list={list} />
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
