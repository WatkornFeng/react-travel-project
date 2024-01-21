import { Box, Typography } from "@mui/material";

function HotelPrice() {
  return (
    <>
      <Box sx={{ fontSize: "0.5rem" }}>
        <Typography
          style={{ display: "inline-block" }}
          sx={{
            textDecoration: "line-through",
            paddingRight: "5px",
          }}
        >
          $200
        </Typography>
        <Typography
          style={{ display: "inline-block" }}
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          $178
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.8rem" }}>$214 total</Typography>
      <Typography sx={{ fontSize: "0.7rem" }}>includes taxes & fees</Typography>
    </>
  );
}

export default HotelPrice;
