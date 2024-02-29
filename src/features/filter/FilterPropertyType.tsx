import { Box, Checkbox, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { IProperty, queryProperties } from "./filterSlice";

function FilterPropertyType() {
  const { properties } = useSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();

  const handleClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(queryProperties(event.target.value));
  };
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Property Type
      </Typography>

      {properties.map(({ isChecked, type }: IProperty) => (
        <Box
          key={type}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox
            size="small"
            checked={isChecked}
            value={type}
            onChange={handleClickCheckbox}
          />

          <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
            {type}
          </Typography>
        </Box>
      ))}
    </>
  );
}

export default FilterPropertyType;
{
  /* <FormGroup>
{properties.map(({ isChecked, type }: IProperty) => (
  <FormControlLabel
    control={
      <>
        <Checkbox
          size="small"
          checked={isChecked}
          value={type}
          onChange={handleClickCheckbox}
        />

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
</FormGroup> */
}
