import { Box, Stack, Typography, Zoom } from "@mui/material";

import SelectActivity from "../../components/AddActivity/SelectActivity";
import ContainerButton from "../../components/ContainerButton";
import SearchButton from "../../components/MainButton";

function SearchActivities() {
  return (
    <Box sx={{ width: "100%" }}>
      <Zoom in={true} timeout={500}>
        <Stack gap={2}>
          <Box
            sx={{
              // bgcolor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" color="primary" sx={{}}>
              Looking for things to do? Search your favorite activities, and
              we'll find the perfect attractions for you.
            </Typography>
          </Box>
          <Stack
            direction="column"
            gap={1}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            <SelectActivity />
          </Stack>
          {/* <Box sx={{ bgcolor: "red" }}>Or pick popular category </Box> */}
        </Stack>
      </Zoom>
      <ContainerButton>
        <SearchButton nameBtn="Search" textBtn="Activities" />
      </ContainerButton>
    </Box>
  );
}

export default SearchActivities;
