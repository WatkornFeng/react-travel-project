import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { styled } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { RootState, useAppDispatch } from "../../../store";
import { selectPlace } from "../searchSlice";
import { thaiProvinces } from "../../../data/place";

const StyledBox = styled(Box)(({ theme }) => ({
  border: "2px solid #d4cccc",
  backgroundColor: "white",
  borderRadius: "3px",
  width: "100%",
  display: "flex",
  color: "rgba(0, 0, 0, 0.26)",

  alignItems: "center",
  // padding: "8px",
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
function SelectPlace() {
  const place = useSelector((state: RootState) => state.search.place);
  const dispatch = useAppDispatch();
  const { placeParam } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectplace = (province: string) => {
    const queryString = searchParams.toString();
    if (!placeParam) {
      // console.log("no fetch...");
      dispatch(selectPlace(province));
      return;
    }
    dispatch(selectPlace(province));
    // console.log("Fetch....");
    // handle fecth fn // and chage param to that place
    // navigate(`/hotels/${province}?${queryString}`);
  };
  // console.log(place);
  // console.log(placeParam, place);
  // console.log(placeParam || place);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      fullWidth
      options={thaiProvinces}
      // value={placeParam || place}
      // value={place ?? placeParam}
      value={placeParam ?? place}
      sx={{
        bgcolor: "white",
        border: "1px solid transparent",
        height: "100%",
        "&:hover": {
          border: "1px solid primary.main",
        },

        "& .MuiInputBase-input": {
          fontSize: "1rem",
          fontWeight: "bold",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 0,
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Where are you going?"
          InputProps={{
            ...params.InputProps,

            startAdornment: (
              <InputAdornment position="end">
                <PlaceIcon
                  sx={{
                    color: "rgba(0, 0, 0, 0.26)",
                    marginLeft: -1,
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, province: string) => {
        const { className, ...prop } = props;
        if (!province) return;
        return (
          <Box {...prop} component="li" key={province}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                color: "primary.main",
                width: "100%",
                height: "100%",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={() => handleSelectplace(province)}
            >
              <PlaceIcon
                sx={{
                  color: "red",
                  mr: 2,
                }}
              />

              <Typography fontWeight="bold"> {province}</Typography>
            </Box>
          </Box>
        );
      }}
    />
  );
}

export default SelectPlace;
