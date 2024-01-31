import { Box, Fade, List, Popper, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import InputBox from "../InputBox";
import PlaceListEmpty from "./PlaceListEmpty";
import PlaceList from "./PlaceList";
import { useParams } from "react-router-dom";

// const Place = styled(Autocomplete)({
//   width: "100%",
//   backdropFilter: "blur(15px)",
//   border: "2px solid transparent",

//   "&:hover": {
//     border: "2px solid #fff",
//   },
//   "&:focus": {
//     border: "2px solid #fff",
//   },
// });

// const countriesFlag: readonly CountryType[] = [
//   { code: "AD", label: "Andorra", phone: "376" },
//   {
//     code: "AE",
//     label: "United Arab Emirates",
//     phone: "971",
//   },
//   { code: "AF", label: "Afghanistan", phone: "93" },
// ];
// interface CountryType {
//   code: string;
//   label: string;
//   phone: string;
//   suggested?: boolean;
// }

// interface Country {
//   id: "string";
//   place_name_en: "string";
// }
// const api = `https://api.maptiler.com/geocoding/Zurich.json?key=${
//   import.meta.env.VITE_MAPTILER_API_KEY
// }`;
interface Country {
  id: string;
  place_name_en: string;
}
// const fakedata: Country[] = [
//   {
//     id: "dsad",
//     place_name_en: "Zurich, Zurich, Switzerland",
//   },
//   {
//     id: "sds",
//     place_name_en: "Zurich, Switzerland",
//   },
//   {
//     id: "jhj",
//     place_name_en:
//       "Zurich Avenue, Kwu Tung Tin Sum, North District, New Territories, Hong Kong, China",
//   },
//   {
//     id: "fdsfd",
//     place_name_en: "Zurich, Netherlands",
//   },
//   {
//     id: "xxxs",
//     place_name_en: "Zurich, Kansas, United States",
//   },
// ];
const DropdownList = styled(List)({
  width: "500px",
  border: "1px solid #d4cccc",
  borderRadius: "3px",
  backgroundColor: "white",
  // backgroundColor: "green",
});
const ListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  // paddingInline: "15px",
  // backgroundColor: "red",
});

function SelectPlace() {
  const { country } = useParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userInput, setUserInput] = useState<string | undefined>(country || "");
  const [place, setPlace] = useState<Country[] | null>(null);

  // console.log("place", place?.length, "userInput", userInput);
  useEffect(() => {
    const getData = async () => {
      try {
        if (!userInput) return;

        const res = await fetch(
          `https://api.maptiler.com/geocoding/${userInput}.json?key=${
            import.meta.env.VITE_MAPTILER_API_KEY
          }`
        );
        // console.log(res);

        const json = await res.json();
        const data = json.features as Country[];

        setPlace(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [userInput]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    // console.log("clickaway");
    // if (place) {
    //   setAnchorEl(null);
    //   return;
    // }
    if (!userInput) {
      // console.log("x");
      setPlace(null);
      setAnchorEl(null);
      return;
    }
    setUserInput("");
    setPlace(null);
    setAnchorEl(null);
  };
  const handleClickPlace = (e: string) => {
    // console.log(e);
    setUserInput(e);
    setAnchorEl(null);
  };
  return (
    <div>
      <InputBox
        id="place-popper"
        handleClick={handleClick}
        input={userInput}
        setInput={setUserInput}
      />
      <Popper
        id="place-popper"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 999 }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <DropdownList>
                <ListContainer>
                  {place === null || place.length === 0 ? (
                    <PlaceListEmpty />
                  ) : (
                    place.map((e) => (
                      <PlaceList
                        key={e.id}
                        handleClickPlace={handleClickPlace}
                        place={e.place_name_en}
                      />
                    ))
                  )}
                </ListContainer>
              </DropdownList>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
}

export default SelectPlace;
{
  /* <Autocomplete
freeSolo
id="combo-box-demo"
options={countriesFlag}
sx={{
  width: "100%",
  height: "100%",
  // backdropFilter: "blur(15px)",
  border: "1px solid transparent",
  bgcolor: "white",
}}
renderOption={(props, option: CountryType) => (
  <Box
    component="li"
    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
    {...props}
  >
    <img
      loading="lazy"
      width="20"
      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
      alt=""
    />
    {option.label} ({option.code}) +{option.phone}
  </Box>
)}
renderInput={(params) => (
  <TextField
    {...params}
    sx={{ input: { cursor: "pointer" } }}
    placeholder="Find your next adventure..."
    InputProps={{
      ...params.InputProps,
      startAdornment: (
        <InputAdornment position="start" disablePointerEvents={true}>
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
)}
/> */
}
