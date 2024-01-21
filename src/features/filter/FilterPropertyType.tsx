import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
const propertyType = [
  "Hotel",
  "Hostel",
  "Resort",
  "Apartment",
  "Aparthotel",
  "B&B",
  "Homes",
  "Villas",
];
function FilterPropertyType() {
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Property Type
      </Typography>
      <FormGroup>
        {propertyType.map((type) => (
          <FormControlLabel
            control={
              <>
                <Checkbox size="small" />
                <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
                  {type}
                </Typography>
              </>
            }
            label=""
            key={type}
            sx={{ fontSize: "0.8rem" }}
          />
        ))}
      </FormGroup>
    </>
  );
}

export default FilterPropertyType;
