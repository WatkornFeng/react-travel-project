import { useSelector } from "react-redux";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { RootState, useAppDispatch } from "../../store";
import { querySort } from "./filterSlice";
import useMatchViewPort from "../../hooks/useMatchViewPort";

function FilterSortBy() {
  const widthViewPort_670 = useMatchViewPort(670);
  const { queries } = useSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();

  const handleSelectChange = (event: SelectChangeEvent) => {
    dispatch(querySort(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: widthViewPort_670 ? "100%" : 300 }}>
      <Select
        value={queries[0]}
        onChange={handleSelectChange}
        displayEmpty
        sx={{ bgcolor: "white" }}
        MenuProps={{ disableScrollLock: true }}
      >
        <MenuItem value={"sort=RATING_HIGH_TO_LOW"}>
          <Typography variant="subtitle2">Highest Rating </Typography>
        </MenuItem>
        <MenuItem value={"sort=PRICE_HIGH_TO_LOW"}>
          <Typography variant="subtitle2">Highest Price</Typography>
        </MenuItem>
        <MenuItem value={"sort=RATING_LOW_TO_HIGH"}>
          <Typography variant="subtitle2">Lowest Rating </Typography>
        </MenuItem>
        <MenuItem value={"sort=PRICE_LOW_TO_HIGH"}>
          <Typography variant="subtitle2">Lowest Price (Default)</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterSortBy;
