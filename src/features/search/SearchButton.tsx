import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { convertDataToArr } from "../../utils/formatData";

interface Props {
  textBtn?: string;
  nameBtn?: string;
}
function SearchButton({ textBtn, nameBtn }: Props) {
  const { place, guest, date } = useSelector(
    (state: RootState) => state.search
  );
  const queries = useSelector((state: RootState) => state.filter.queries);

  const { placeParam } = useParams();

  const navigate = useNavigate();
  const [toggledModal, setToggledModal] = useState(false);

  const handleClickSearch = () => {
    const dataSearch = { date, guest };
    const queryString = queries.concat(convertDataToArr(dataSearch)).join("&");

    // handle case when no places
    if (!place && !placeParam) return setToggledModal(true);

    navigate(`/hotels/${place || placeParam}?${queryString}`);
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
