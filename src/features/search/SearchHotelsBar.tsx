import { Box, Fade, IconButton, Stack, Zoom } from "@mui/material";
import SelectDate from "./AddDate/SelectDate";
import SelectPlace from "./AddPlace/SelectPlace";
import SelectGuest from "./AddGuest/SelectGuest";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import SearchButton from "./SearchButton";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../components/Logo";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { IProvinceObject } from "./searchSlice";

interface IProps {
  isFetchingProvince: boolean;
  province: IProvinceObject[];
}
function SearchHotelsBar({ isFetchingProvince, province }: IProps) {
  const matches_1120 = useMatchViewPort(1120);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(true);

  return (
    <Fade in={true} timeout={500}>
      <Stack
        direction={matches_1120 ? "column" : "row"}
        color="primary"
        sx={{
          position: "fixed",
          p: 2,
          top: 0,
          zIndex: 3,
          paddingRight: 4,
          gap: 2,
          width: "100vw",
          bgcolor: "primary.light",
        }}
      >
        {matches_1120 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // bgcolor: "red",
              }}
            >
              <Logo />
              {!isSearchBarOpen && (
                <>
                  <IconButton
                    onClick={() => setIsSearchBarOpen((prev) => !prev)}
                  >
                    <ArrowDropDownIcon fontSize="large" color="primary" />
                  </IconButton>
                </>
              )}
              {isSearchBarOpen && (
                <>
                  <IconButton
                    onClick={() => setIsSearchBarOpen((prev) => !prev)}
                  >
                    <ArrowDropUpIcon fontSize="large" color="primary" />
                  </IconButton>
                </>
              )}
            </Box>
          </>
        )}
        {(isSearchBarOpen || !matches_1120) && (
          <>
            <SelectPlace isFetching={isFetchingProvince} province={province} />
            <SelectDate />
            <SelectGuest />
            <Box sx={{ minWidth: "200px" }}>
              <SearchButton nameBtn="search" />
            </Box>
          </>
        )}
      </Stack>
    </Fade>
  );
}

export default SearchHotelsBar;
