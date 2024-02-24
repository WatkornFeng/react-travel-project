import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import HeadSection from "../../components/HeadSection";
import MainCard from "../../components/MainCard";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import ReviewBar from "./ReviewBar";
import Flag from "../../components/Flag";
import ReviewByGuest from "./ReviewByGuest";
import ReviewSummary from "./ReviewSummary";

function HotelDetailReviews() {
  const widthViewPort_900 = useMatchViewPort(900);
  return (
    <>
      <HeadSection>Reviews</HeadSection>
      <MainCard elevation={2}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: widthViewPort_900 ? "1fr" : "0.4fr 0.6fr",
          }}
        >
          <ReviewSummary />
          <Stack sx={{ p: "0.7rem" }} spacing={1}>
            <ReviewByGuest />
            <ReviewByGuest />
            <ReviewByGuest />
            <ReviewByGuest />
            <ReviewByGuest />
          </Stack>
        </Box>
      </MainCard>
    </>
  );
}

export default HotelDetailReviews;
