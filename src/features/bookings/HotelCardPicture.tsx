import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useMatchViewPort from "../../hooks/useMatchViewPort";
interface Props {
  cover: string;
}
function HotelCardPicture({ cover }: Props) {
  const matches_650 = useMatchViewPort(650);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src={cover}
        height={matches_650 ? "300px" : "320px"}
        width="100%"
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          bgcolor: "white",
          borderRadius: "50%",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            color: "red",
          },
        }}
      >
        <FavoriteBorderIcon />
      </Box>
    </Box>
  );
}

export default HotelCardPicture;
