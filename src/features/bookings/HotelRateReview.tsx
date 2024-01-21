import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ScoreBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  color: "white",
  padding: "10px",
  borderRadius: "10px",
}));

function HotelRateReview() {
  return (
    <>
      <ScoreBox>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          8.8
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
