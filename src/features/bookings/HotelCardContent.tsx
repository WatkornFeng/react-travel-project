import { Box } from "@mui/material";
import HotelCardReview from "./HotelCardReview";
import HotelCardPrice from "./HotelCardPrice";

interface Props {
  rating: number;
  price: number;
}

function HotelCardContent({ rating, price }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        height: "50%",
      }}
    >
      <Box
        sx={{
          height: "50%",
          width: "50%",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <HotelCardReview rating={rating} />
      </Box>
      <Box
        sx={{
          // bgcolor: "green",
          height: "75%",
          width: "50%",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <HotelCardPrice price={price} />
      </Box>
    </Box>
  );
}

export default HotelCardContent;
