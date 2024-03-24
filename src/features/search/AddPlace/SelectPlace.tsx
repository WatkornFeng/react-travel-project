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
import { IProvinceObject, selectPlace } from "../searchSlice";
import { thaiProvinces } from "../../../data/place";
import { useGetProvincesQuery } from "../../../services/apiProvinceSlice";
import BouncingDotsLoader from "../../../components/BouncingDotsLoader";
import { SyntheticEvent, useEffect, useState } from "react";

const StyledAutocompleteBox = {
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
};
const StyledDropDownList = {
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
};

interface IProps {
  isFetching: boolean;
  province: IProvinceObject[];
}

function SelectPlace({ isFetching, province }: IProps) {
  // const { data, isError, isFetching } = useGetProvincesQuery();
  // const [province, setProvince] = useState<IProvinceObject[]>([]);

  // console.log("select place ", isFetching);

  // console.log(province);
  const place = useSelector((state: RootState) => state.search.place);
  const dispatch = useAppDispatch();
  const [dataLocalStorage, setDataLocaStorage] = useState();
  // console.log(place);
  const { placeParam } = useParams();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString());
  // const storedData = localStorage.getItem("province");
  // let pro;
  // if (storedData) {
  //   pro = JSON.parse(storedData);
  // }
  // console.log(pro);

  // useEffect(() => {
  //   if (data) {
  //     const { provinces } = data;
  //     const provinceObjectArr = provinces.map((prov) => ({
  //       province: prov.name,
  //       id: prov._id,
  //       cover: prov.pictureCover.url,
  //     }));
  //     provinceObjectArr.push({ province: "", id: "", cover: "" });
  //     setProvince([...provinceObjectArr]);
  //   }
  // }, [data]);
  const storedData = localStorage.getItem("province");
  useEffect(() => {
    let pro;
    if (storedData) {
      pro = JSON.parse(storedData);
      setDataLocaStorage(pro);
    }
  }, [storedData]);
  // const handleSelectplace = (selectValue: IProvinceObject) => {
  //   // const queryString = searchParams.toString();
  //   // console.log("x");
  //   // console.log(province);

  //   // if (!placeParam) {
  //   //   // console.log("no fetch...");
  //   //   dispatch(selectPlace(province));
  //   //   return;
  //   // }
  //   // console.log(selectValue);

  //   localStorage.setItem("province", JSON.stringify(selectValue));

  //   // dispatch(selectPlace(selectValue));
  //   // console.log("Fetch....");
  //   // handle fecth fn // and chage param to that place
  //   // navigate(`/hotels/${selectValue.province}?${queryString}`);
  // };
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: IProvinceObject | null
  ) => {
    if (newValue !== null) {
      return localStorage.setItem("province", JSON.stringify(newValue));
    }
    // dispatch(selectPlace(newValue));
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="provincesList"
        fullWidth
        disabled={isFetching}
        onChange={handleChange}
        options={province}
        // value={place?.province}
        value={dataLocalStorage || { province: "", id: "", cover: "" }}
        getOptionLabel={(option) => (option as IProvinceObject).province}
        // value={placeParam || place}
        isOptionEqualToValue={(option, value) =>
          (option as IProvinceObject).province === value.province
        }
        sx={StyledAutocompleteBox}
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
        renderOption={(props, province: IProvinceObject) => {
          const { className, ...prop } = props;
          if (!province.id) return;
          return (
            <Box {...prop} component="li" key={province.id}>
              <Box
                sx={StyledDropDownList}
                // onClick={() => handleSelectplace(province)
                // }
              >
                <PlaceIcon
                  sx={{
                    color: "red",
                    mr: 2,
                  }}
                />

                <Typography fontWeight="bold"> {province.province}</Typography>
              </Box>
            </Box>
          );
        }}
      />
    </>
  );
}

export default SelectPlace;
