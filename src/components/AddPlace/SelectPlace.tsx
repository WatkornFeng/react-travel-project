import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

const countriesFlag: readonly CountryType[] = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
];
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
function SelectPlace() {
  return (
    <Autocomplete
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
    />
  );
}

export default SelectPlace;