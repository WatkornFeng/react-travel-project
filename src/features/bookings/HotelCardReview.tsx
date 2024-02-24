import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { numberToOneDecimal } from "../../utils/formatNumber";

const ScoreBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "10px",
  borderRadius: "10px",
}));

function HotelRateReview({ rating }: { rating: number }) {
  return (
    <>
      <ScoreBox>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          {numberToOneDecimal(rating)}
        </Typography>
      </ScoreBox>
      <Box sx={{ flexDirection: "column" }}>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          Excellent
        </Typography>
        <Typography
          style={{ display: "inline-block" }}
          sx={{
            fontSize: "0.8rem",
            fontWeight: "normal",
            paddingRight: "5px",
          }}
        >
          1369
        </Typography>

        <Typography
          style={{ display: "inline-block" }}
          sx={{ fontSize: "0.8rem", fontWeight: "normal" }}
        >
          reviews
        </Typography>
      </Box>
    </>
  );
}

export default HotelRateReview;
