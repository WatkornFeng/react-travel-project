import { Box, Typography, styled, Container, Button } from "@mui/material";
import ContainerComp from "./ContainerComp";
import CategoryComp from "./CategoryComp";
import SearchPlace from "./SearchPlace";
import SelectGuest from "./AddGuest/SelectGuest";
import CheckInOut from "./CheckInOut/SelectDate";
import SelectDate from "./CheckInOut/SelectDate";

const HeadTypography = styled(Typography)({
  textAlign: "center",
  color: "#fff",
  fontWeight: "bold",
  marginBottom: "40px",
});

const CardOption = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "25px",
  backgroundColor: "#fff",
  maxHeight: "400px",
  boxShadow:
    "0px 0px 30px 4px rgba(0,0,0,0.14),0px 10px 10px 0px rgba(0,0,0,0.22)",
  zIndex: 1,
});

const ContainerOption = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px",
  gap: 15,
});

function FilterComp() {
  return (
    <ContainerComp content="main">
      <HeadTypography variant="h5">
        Discover World and Uncover Stories
      </HeadTypography>

      <CardOption>
        <CategoryComp />
        <ContainerOption>
          <SearchPlace />
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
        </ContainerOption>
      </CardOption>
    </ContainerComp>
  );
}

export default FilterComp;
