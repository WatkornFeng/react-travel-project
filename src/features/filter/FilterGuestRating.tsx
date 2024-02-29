import { useSelector } from "react-redux";
import { Radio, Box, Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../store";
import { IRatings, queryRatings } from "./filterSlice";

function FilterGuestRating() {
  const { ratings: guestRating } = useSelector(
    (state: RootState) => state.filter
  );

  const dispatch = useAppDispatch();

  const handleClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(queryRatings(event.target.value));
  };

  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Guest Rating
      </Typography>

      {guestRating.map(({ grade, isChecked, value }: IRatings) => (
        <Box
          key={grade}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Radio
            size="small"
            checked={isChecked}
            onChange={handleClickCheckbox}
            value={grade}
            name="radio-buttons"
            inputProps={{ "aria-label": "Property type" }}
          />
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
            {grade} {value ? value : ""} {value ? "+" : ""}
          </Typography>
        </Box>
      ))}
    </>
  );
}

export default FilterGuestRating;
