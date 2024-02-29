import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 500,
  // height: 230,
  // height: "600px",
  bgcolor: "white",
  borderRadius: "20px",
  boxShadow: 24,

  // padding: "0px 10px s0px 20px",
  padding: "80px 10px 70px 30px",
};
const styleCloseBtn = {
  position: "absolute",
  top: "15%",
  transform: "translate(-50%, -50%)",
  width: 50,
  height: 30,
  padding: "30px",
};

interface IProps {
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    topic: string;
    details: string;
  };
  isNavigated: boolean;
}
function CustomModal({
  toggled,
  setToggled,
  content: { topic, details },
  isNavigated,
}: IProps) {
  const navigate = useNavigate();
  const handleClose = () => {
    if (isNavigated) return navigate("/");
    setToggled(false);
  };

  return (
    <Modal
      open={toggled}
      onClose={handleClose}
      aria-labelledby="modal-label"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton sx={styleCloseBtn} onClick={handleClose}>
          <CloseIcon sx={{ fontWeight: "bold" }} />
        </IconButton>
        <Typography id="modal-label" variant="h6" component="h2">
          {topic}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {details}
        </Typography>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          sx={{
            position: "absolute",
            right: 10,
            bottom: 10,
          }}
        >
          OK
        </Button>
      </Box>
    </Modal>
  );
}

export default CustomModal;
