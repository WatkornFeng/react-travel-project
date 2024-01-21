import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
const guestRating = [
  "Outstanding 9+",
  "Very Good 8+",
  "Good 7+",
  "Satisfactory 6+",
];
function FilterGuestRating() {
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Guest Rating
      </Typography>
      <FormGroup>
        {guestRating.map((rating) => (
          <FormControlLabel
            key={rating}
            control={
              <>
                <Checkbox size="small" />
                <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {rating}
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
