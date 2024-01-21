import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import MainCard from "../../components/MainCard";
import FilterGuestRating from "./FilterGuestRating";
import FilterRating from "./FilterRating";
import FilterPropertyType from "./FilterPropertyType";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMatchViewPort from "../../hooks/useMatchViewPort";
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  // height: "600px",
  bgcolor: "white",
  borderRadius: "20px",
  boxShadow: 24,

  // padding: "0px 10px s0px 20px",
  padding: "10px 20px 130px 40px",
};

function FilterModal() {
  const matchesMedium = useMatchViewPort(1000);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log("O", open);
  // console.log("M", matches);

  const isModalOpen = open && matchesMedium ? true : false;

  // console.log(isModalOpen);
  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box sx={{ width: "300px" }}>
        <Button
          onClick={handleOpen}
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
          Filter
        </Button>
      </Box>

      <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={styleModal}>
          <Box
            sx={{
              // bgcolor: "red",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button onClick={handleClose} sx={{ ml: "-20px" }}>
              <CloseIcon color="primary" />
            </Button>
            <Box>
              <Typography variant="h6">Filter</Typography>
            </Box>
            <Button onClick={handleClose}>
              <Typography variant="body1">Close</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
            }}
          >
            <FilterRating />
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
