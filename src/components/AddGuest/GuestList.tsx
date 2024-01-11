import { Box, Button, ListItem, ListItemText } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface TypeInitialState {
  adult: number;
  children: number;
  room: number;
}
interface ActionType {
  type: string;
  payload?: number;
}

function checkBtnDisabled(list: string, number: number) {
  if (list === "adult" || list === "room") {
    if (number === 1) return true;
    return false;
  } else {
    if (number === 0) return true;
    return false;
  }
}
function createListText(list: string, numguest: number) {
  if (list === "children") {
    if (numguest > 1) {
      return "children";
    } else {
      return "child";
    }
  }
  if (list === "adult") {
    if (numguest > 1) {
      return "adults";
    } else {
      return "adult";
    }
  }
  if (list === "room") {
    if (numguest > 1) {
      return "rooms";
    } else {
      return "room";
    }
  }
}
function GuestList({
  list,
  guest,
  dispatch,
}: {
  list: string;
  guest: TypeInitialState;
  dispatch: React.Dispatch<ActionType>;
}) {
  const { adult, children, room } = guest;
  const number = guest[list as keyof TypeInitialState];

  const isDisabled = checkBtnDisabled(list, number);
  const adultEqualRoom = adult === room;
  const decBtnIsDisabled =
    list === "adult" ? (adultEqualRoom ? true : false) : isDisabled;

  const ListText = createListText(list, number);
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
          onClick={() => dispatch({ type: `dec-${list}` })}
          disabled={decBtnIsDisabled}
        >
          <RemoveCircleIcon
            sx={{
              color: decBtnIsDisabled ? "secondary.light" : "primary.dark",
            }}
          />
        </Button>
        <Box
          sx={{
            display: "flex",
            width: "24px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </Box>
        <Button
          onClick={() => dispatch({ type: `inc-${list}` })}
          disabled={number === 12}
        >
          <AddCircleIcon
            sx={{ color: number === 12 ? "secondary.light" : "primary.dark" }}
          />
        </Button>
      </Box>
    </ListItem>
  );
}

export default GuestList;
