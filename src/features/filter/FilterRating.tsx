import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Typography,
} from "@mui/material";

const ratings = [5, 4, 3, 2, 1];

function FilterRating() {
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Star Rating
      </Typography>
      <FormGroup>
        {ratings.map((rating) => (
          <FormControlLabel
            key={rating}
            control={
              <>
                <Checkbox size="small" />
                <Rating name="read-only" value={rating} readOnly size="small" />
              </>
            }
            label=""
          />
        ))}
      </FormGroup>
    </>
  );
}

export default FilterRating;
