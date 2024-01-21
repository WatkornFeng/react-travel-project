import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FilterRating from "./FilterRating";
import FilterGuestRating from "./FilterGuestRating";
import FilterPropertyType from "./FilterPropertyType";
import MainCard from "../../components/MainCard";

const filterStyle = {
  paddingBottom: "20px",
  boxShadow: "0px 24px 3px -24px grey",
  // backgroundColor: "red",
  // border: "1px solid gray  ",
  padding: "20px",
};
function SideBarFilter() {
  return (
    <Stack gap={2} display={{ xs: "none", md: "block" }}>
      <Typography variant="h6">Filter</Typography>
      <MainCard elevation={2}>
        <Box sx={filterStyle}>
          <FilterRating />
        </Box>
        <Box sx={filterStyle}>
          <FilterGuestRating />
        </Box>
        <Box sx={filterStyle}>
          <FilterPropertyType />
        </Box>
      </MainCard>
    </Stack>
  );
}

export default SideBarFilter;
