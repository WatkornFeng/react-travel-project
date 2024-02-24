import { useSelector } from "react-redux";
import { Box, Button, ListItem, ListItemText, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IGuest, incrementGuest, decrementGuest } from "../searchSlice";
import { useAppDispatch } from "../../../store";
import { RootState } from "../../../store";

function checkBtnDisabled(list: string, number: number) {
  if (list === "adult" || list === "room") {
    if (number === 1) return true;
    return false;
  } else {
    if (number === 0) return true;
    return false;
  }
}
function createListText(age: string, numguest: number) {
  if (age === "child") {
    if (numguest > 1) {
      return "children";
    } else {
      return "child";
    }
  }
  if (age === "adult") {
    if (numguest > 1) {
      return "adults";
    } else {
      return "adult";
    }
  }
  if (age === "room") {
    if (numguest > 1) {
      return "rooms";
    } else {
      return "room";
    }
  }
}
function GuestList({ age }: { age: string }) {
  const guest = useSelector((state: RootState) => state.search.guest);
  const dispatch = useAppDispatch();
  const { adult, room } = guest;
  // const { adult,child, room } = guest;

  const number = guest[age as keyof IGuest];

  const isDisabled = checkBtnDisabled(age, number);
  const adultEqualRoom = adult === room;
  const decBtnIsDisabled =
    age === "adult" ? (adultEqualRoom ? true : false) : isDisabled;

  const ListText = createListText(age, number);
  return (
    <ListItem
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <ListItemText primary={ListText} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => dispatch(decrementGuest(age))}
          disabled={decBtnIsDisabled}
        >
          <RemoveCircleIcon
            sx={{
              color: decBtnIsDisabled ? "primary.light" : "primary.dark",
            }}
          />
        </Button>
        <Box
          sx={{
            display: "flex",
            width: "24px",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {number}
          </Typography>
        </Box>
        <Button
          onClick={() => dispatch(incrementGuest(age))}
          disabled={number === 12}
        >
          <AddCircleIcon
            sx={{ color: number === 12 ? "primary.light" : "primary.dark" }}
          />
        </Button>
      </Box>
    </ListItem>
  );
}

export default GuestList;
