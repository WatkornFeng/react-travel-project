import { Box, Grid, Stack } from "@mui/material";
import cover from "../../assets/images/hotel/hotel-1.jpg";
function HotelDetailPicture() {
  return (
    <Grid container height={500}>
      <Grid item xs={6}>
        <Box bgcolor={"white"} height={"100%"} sx={{ mr: 0.5 }}>
          <img style={{ width: "100%", height: "100%" }} src={cover} />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Stack height={"100%"} spacing={0.5}>
          <Box height={"50%"} sx={{ pr: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={cover} />
          </Box>
          <Box height={"50%"} sx={{ pr: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={cover} />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack height={"100%"} spacing={0.5}>
          <Box height={"50%"} sx={{ pl: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={cover} />
          </Box>
          <Box height={"50%"} sx={{ pl: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={cover} />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default HotelDetailPicture;
