import { useSelector } from "react-redux";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
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

      <FormGroup>
        {guestRating.map(({ grade, isChecked, value }: IRatings) => (
          <FormControlLabel
            key={value}
            control={
              <>
                <Checkbox
                  size="small"
                  checked={isChecked}
                  value={grade}
                  onChange={handleClickCheckbox}
                />
                <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {grade} {value ? value : ""} {value ? "+" : ""}
                </Typography>
              </>
            }
            label=""
          />
        ))}
      </FormGroup>
    </>
  );
}

export default FilterGuestRating;
