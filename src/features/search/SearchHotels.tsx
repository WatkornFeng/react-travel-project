import { Box, Stack } from "@mui/material";

import SelectGuest from "./AddGuest/SelectGuest";
import SelectDate from "./AddDate/SelectDate";
import SelectPlace from "./AddPlace/SelectPlace";
import SearchButton from "./SearchButton";
import { IProvinceObject } from "./searchSlice";

interface IProps {
  isFetchingProvince: boolean;
  province: IProvinceObject[];
}
function SearchHotels({ isFetchingProvince, province }: IProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" gap={2}>
        <SelectPlace isFetching={isFetchingProvince} province={province} />
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <SelectDate />
          <SelectGuest />
        </Stack>
        <SearchButton nameBtn="Search" textBtn="hotels" />
      </Stack>
    </Box>
  );
}

export default SearchHotels;
