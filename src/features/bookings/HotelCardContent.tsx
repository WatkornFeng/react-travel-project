import { Box } from "@mui/material";
import HotelRateReview from "./HotelRateReview";
import HotelPrice from "./HotelPrice";

function HotelCardContent() {
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
        <HotelRateReview />
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
        <HotelPrice />
      </Box>
    </Box>
  );
}

export default HotelCardContent;
