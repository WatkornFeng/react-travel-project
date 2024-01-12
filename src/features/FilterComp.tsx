import {
  Box,
  Typography,
  styled,
  Container,
  Button,
  Grow,
} from "@mui/material";

import SelectGuest from "./AddGuest/SelectGuest";
import SelectDate from "./AddDate/SelectDate";
import FilterCategory from "./Category/FilterCategory";
import SelectPlace from "./AddPlace/SelectPlace";

const FilterContainer = styled(Container)({
  // backgroundColor: "pink",
  maxWidth: "1200px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "100px",
});
const HeadTypography = styled(Typography)({
  textAlign: "center",
  color: "#fff",
  fontWeight: "bold",
  marginBottom: "70px",
});

const FilterBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  backgroundColor: "#fff",
  maxHeight: "400px",
  boxShadow:
    "0px 0px 30px 4px rgba(0,0,0,0.14),0px 10px 10px 0px rgba(0,0,0,0.22)",
  zIndex: 1,
});

const FilterSearchContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px",
  gap: 15,
});

function FilterComp() {
  return (
    <FilterContainer>
      <Grow in={true} style={{ transformOrigin: "-1 0 0" }} timeout={2000}>
        <HeadTypography variant="h5">
          Discover World and Uncover Stories
        </HeadTypography>
      </Grow>

      <FilterBox>
        <FilterCategory />
        <FilterSearchContainer>
          <SelectPlace />
          <SelectDate />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <SelectGuest />
            <Button variant="contained" color="secondary" fullWidth>
              SEARCH
            </Button>
          </Box>
        </FilterSearchContainer>
      </FilterBox>
    </FilterContainer>
  );
}

export default FilterComp;
