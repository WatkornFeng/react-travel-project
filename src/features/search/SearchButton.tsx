import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { convertDataToArr } from "../../utils/formatData";
import { IProvinceObject } from "./searchSlice";

interface Props {
  textBtn?: string;
  nameBtn?: string;
}

export interface IQueriesObj {
  rating: string;
  sort: string;
  adult: number;
  child: number;
  room: number;
  from: number | undefined;
  to: number | undefined;
}
function SearchButton({ textBtn, nameBtn }: Props) {
  const { place, guest, date } = useSelector(
    (state: RootState) => state.search
  );

  // console.log(place);

  const [searchParams, setSearchParams] = useSearchParams();
  // const queries = useSelector((state: RootState) => state.filter.queries);
  const { sort, rating, queries } = useSelector(
    (state: RootState) => state.filter
  );

  // console.log(searchParams.get("id"));
  const { placeParam } = useParams();

  const navigate = useNavigate();
  const [toggledModal, setToggledModal] = useState(false);

  const handleClickSearch = () => {
    const dataSearch = { date, guest };
    const queriesObject = { ...date, ...guest, rating, sort };
    const queryString = queries.concat(convertDataToArr(dataSearch)).join("&");
    const storedData = localStorage.getItem("province");
    // console.log(storedData !== null);
    let pro: IProvinceObject;
    if (storedData && JSON.parse(storedData) !== null) {
      pro = JSON.parse(storedData);
      // console.log("x");
      localStorage.setItem("province", JSON.stringify(pro));
      localStorage.setItem("queries", JSON.stringify(queriesObject));
      // if (placeParam) {
      //   navigate(`/hotels/${pro.province}?${queryString}`, {
      //     replace: true,
      //     state: pro,
      //   });
      //   return;
      // }
      navigate(`/hotels/${pro.province}?${queryString}`);

      return;
    }
    setToggledModal(true);
  };
  return (
    <>
      <CustomModal
        toggled={toggledModal}
        setToggled={setToggledModal}
        isNavigated={false}
        content={{
          topic: "You are not select Province !",
          details:
            "Please select the name of a province in Thailand to proceed...",
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: "100%",
          minHeight: "56px",
          height: "100%",
        }}
        onClick={handleClickSearch}
      >
        {nameBtn} {textBtn}
      </Button>
    </>
  );
}

export default SearchButton;
