import { Box, Fade, List, Popper, styled } from "@mui/material";
import { useReducer, useState } from "react";
import GuestBox from "./GuestBox";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import GuestList from "./GuestList";

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
interface TypeInitialState {
  adult: number;
  children: number;
  room: number;
}
interface ActionType {
  type: string;
  payload?: number;
}
const age = ["room", "adult", "children"];
const iniitialState = {
  adult: 1,
  children: 0,
  room: 1,
};

function reducer(
  state: TypeInitialState,
  action: ActionType
): TypeInitialState {
  switch (action.type) {
    case "inc-adult":
      return {
        ...state,
        adult: state.adult + 1,
      };
    case "inc-children":
      return {
        ...state,
        children: state.children + 1,
      };
    case "inc-room":
      if (state.room >= state.adult)
        return {
          ...state,
          adult: state.adult + 1,
          room: state.room + 1,
        };
      return {
        ...state,
        room: state.room + 1,
      };
    case "dec-adult":
      return {
        ...state,
        adult: state.adult - 1,
      };
    case "dec-children":
      return {
        ...state,
        children: state.children - 1,
      };
    case "dec-room":
      return {
        ...state,
        room: state.room - 1,
      };
    default:
      throw new Error("Action unknown");
  }
}
function SelectGuest() {
  const [selectGuest, dispatch] = useReducer(reducer, iniitialState);
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
    // setOpen((previousOpen) => !previousOpen);
  };
  const handleClickAway = () => {
    setAnchorEl(null);
    // setOpen(false);
  };

  const { adult, children, room } = selectGuest;
  const adultPlaceHolder = `${
    adult <= 1 ? `${adult} adult` : `${adult} adults`
  }`;
  const childPlaceHolder = `${
    children <= 1 ? `${children} child` : `${children} children`
  }`;
  const roomPlacehodler = `${room <= 1 ? `${room} room` : `${room} rooms`}`;
  const placeHolder = children
    ? roomPlacehodler + ", " + adultPlaceHolder + ", " + childPlaceHolder
    : roomPlacehodler + ", " + adultPlaceHolder;

  // const canBeOpen = open && Boolean(anchorEl);
  // const id = canBeOpen ? "SelectGuest-popper" : undefined;

  return (
    <>
      <GuestBox
        id="SelectGuest-poppe"
        handleClick={handleClick}
        placeHolder={placeHolder}
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
                      guest={selectGuest}
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
// function SelectGuest() {
//   const [selectGuest, setSelectGuest] =
//     useState<TypeInitialState>(iniitialState);
//   const { adult, child, room } = selectGuest;
//   // console.log(adult, child, room);
//   const placeHolder = `adult ${adult} child ${child} room ${room}`;
//   return (
//     <Autocomplete
//       sx={{
//         width: "1000px",
//       }}
//       options={age}
//       disableClearable
//       renderOption={(props, option) => (
//         <GuestList option={option} {...props} guest={selectGuest} />
//       )}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           placeholder={placeHolder}
//           sx={{ input: { cursor: "pointer" } }}
//           InputProps={{
//             ...params.InputProps,
//             startAdornment: (
//               <InputAdornment position="start" disablePointerEvents={true}>
//                 <PeopleIcon />
//               </InputAdornment>
//             ),
//             endAdornment: (
//               <InputAdornment position="end" disablePointerEvents={true}>
//                 <KeyboardArrowDownIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// }
{
  /* <Select
      placeholder={placeHolder}
      sx={{
        width: "100%",
      }}
      value={selectGuest}
      displayEmpty
      renderValue={adult === 1 ? () => <p>{placeHolder}</p> : undefined}
    >
      <MenuItem value="option1">
        {" "}
        <Button>
          <RemoveCircleIcon />
        </Button>
        x
        <Button>
          <AddIcon />
        </Button>
      </MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select> */
}
