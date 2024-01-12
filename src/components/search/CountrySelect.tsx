import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
export default function CountrySelect() {
  return (
    <Autocomplete
      freeSolo
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countriesFlag}
      autoHighlight
      // getOptionLabel={(option: CountryType | string) => option.label}
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
          placeholder="Choose a country"
          // inputProps={{
          //   ...params.inputProps,
          //   autoComplete: "new-password", // disable autocomplete and autofill
          // }}
        />
      )}
    />
  );
}
