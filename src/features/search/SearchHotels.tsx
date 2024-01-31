import { Box, Stack, Zoom } from "@mui/material";

import SelectDate from "../../components/AddDate/SelectDate";
import SelectGuest from "../../components/AddGuest/SelectGuest";
import SearchButton from "../../components/MainButton";
import ContainerButton from "../../components/ContainerButton";
import SelectPlace from "../../components/AddPlace/SelectPlace";

function SearchHotels() {
  return (
    <Box sx={{ width: "100%" }}>
      <Zoom in={true} timeout={500}>
        <Stack direction="column" gap={1} sx={{ width: "100%" }}>
          {/* <SelectPlace /> */}
          <SelectPlace />
          <Stack
            direction={{ sm: "column", md: "row" }}
            gap={1}
            sx={{ width: "100%" }}
          >
            <SelectDate />
            <SelectGuest />
          </Stack>
        </Stack>
      </Zoom>
      <ContainerButton>
        <SearchButton nameBtn="Search" textBtn="hotels" />
      </ContainerButton>
    </Box>
  );
}

export default SearchHotels;
