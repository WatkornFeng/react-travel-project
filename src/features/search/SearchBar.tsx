import { Box, Stack } from "@mui/material";
import SelectGuest from "../../components/AddGuest/SelectGuest";
import SelectDate from "../../components/AddDate/SelectDate";
import SearchButton from "../../components/MainButton";
import SelectPlace from "../../components/AddPlace/SelectPlace";

function SearchBar() {
  return (
    <Stack direction="column" gap={2}>
      <SelectPlace />
      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <SelectDate />
        <SelectGuest />
      </Stack>
      <SearchButton nameBtn="Search" textBtn="Hotels" />
    </Stack>
  );
}

export default SearchBar;
