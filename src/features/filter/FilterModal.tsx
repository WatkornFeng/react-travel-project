import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TuneIcon from "@mui/icons-material/Tune";

import FilterGuestRating from "./FilterGuestRating";
import FilterStars from "./FilterStars";
import FilterPropertyType from "./FilterPropertyType";

import useMatchViewPort from "../../hooks/useMatchViewPort";
import { RootState, useAppDispatch } from "../../store";
import { toggleModalFilter } from "./filterSlice";
import { convertDataToArr } from "../../utils/formatData";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "white",
  borderRadius: "20px",
  boxShadow: 24,
  padding: "10px 20px 130px 40px",
};

function FilterModal() {
  const widthViewPort_1000 = useMatchViewPort(1000);

  const { queries, isModalFilterOpen } = useSelector(
    (state: RootState) => state.filter
  );
  const { date, guest } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = isModalFilterOpen && widthViewPort_1000 ? true : false;

  const dataSearch = { date, guest };
  const dataArr = convertDataToArr(dataSearch);
  const concatenatedArray = queries.concat(dataArr);

  useEffect(() => {
    // console.log("UseEffect");
    if (!isModalOpen) {
      dispatch(toggleModalFilter(false));
      setSearchParams(concatenatedArray.join("&"));
    }
  }, [isModalOpen]);

  const submithandler = () => {
    setSearchParams(concatenatedArray.join("&"));
    dispatch(toggleModalFilter(false));
  };
  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box sx={{ width: "300px" }}>
        <Button
          onClick={() => dispatch(toggleModalFilter(true))}
          fullWidth
          sx={{
            bgcolor: "primary.main",
            borderRadius: "20px",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <TuneIcon fontSize="small" sx={{ mr: 2 }} />
          Filter
        </Button>
      </Box>

      <Modal open={isModalFilterOpen}>
        <Box sx={styleModal}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Filter</Typography>
          </Box>

          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
            }}
          >
            <FilterStars />
            <FilterGuestRating />
            <FilterPropertyType />
          </Box>
          <Box
            sx={{
              bgcolor: "white",
            }}
          >
            <Button
              fullWidth
              color="primary"
              variant="contained"
              sx={{ borderRadius: "20px", height: "70px" }}
              onClick={submithandler}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default FilterModal;
