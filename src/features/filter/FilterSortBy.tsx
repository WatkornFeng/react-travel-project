import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import useMatchViewPort from "../../hooks/useMatchViewPort";
function FilterSortBy() {
  const matches_670 = useMatchViewPort(670);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: matches_670 ? "100%" : 300 }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty

        // inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <Typography variant="subtitle2">Highest Rating</Typography>
        </MenuItem>
        <MenuItem value={10}>
          <Typography variant="subtitle2">Highest Price</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterSortBy;
