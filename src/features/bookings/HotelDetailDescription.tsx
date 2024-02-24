import { Box, Paper, Stack, Typography } from "@mui/material";
import HotelRateReview from "./HotelCardReview";
import StarRating from "../../components/StarRating";
import HeadSection from "../../components/HeadSection";
import ImageSilder from "../../components/ImageSilder";
import HotelDetailNavigate from "./HotelDetailNavigate";
import HotelDetailPicture from "./HotelDetailPicture";
import MainCard from "../../components/MainCard";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import MapLeaflet from "../../components/Map/MapLeaflet";
import PlaceIcon from "@mui/icons-material/Place";
interface IProps {
  description: string;
}
const overviewStyle = {
  padding: "1rem",
};
function HotelDetailDescription() {
  const widthViewPort_1000 = useMatchViewPort(1000);
  return (
    <>
      <Paper elevation={2}>
        <HotelDetailNavigate />
        {widthViewPort_1000 ? <ImageSilder /> : <HotelDetailPicture />}
      </Paper>
      <MainCard elevation={2} sx={overviewStyle}>
        <Stack spacing={2} direction={widthViewPort_1000 ? "column" : "row"}>
          <Stack spacing={2}>
            <HeadSection>Hotel Name</HeadSection>
            <Box>
              <StarRating stars={3} size="1.4rem" color="primary.dark" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <HotelRateReview rating={2} />
            </Box>

            <Typography fontWeight="bold">
              Discover Serenity Springs Inn, your idyllic retreat for relaxation
              and rejuvenation. Nestled amidst nature's beauty, our hotel offers
              luxurious accommodations, a tranquil atmosphere, and unparalleled
              hospitality. Whether you seek a romantic escape or a peaceful
              getaway, our serene oasis. Discover Serenity Springs Inn, your
              idyllic retreat for
            </Typography>
          </Stack>
          <Box minWidth={"40%"} p={"0.5rem"}>
            <MainCard
              elevation={2}
              sx={{ overflow: "hidden", marginBottom: "1rem" }}
            >
              <MapLeaflet />
            </MainCard>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <PlaceIcon color="primary" />

              <Typography fontWeight={500}>
                Roman Southwark, Mulvaney Way, Kipling Estate, Southwark, London
                Borough of Southwark, London, Greater London, England, SE1 3RF,
                United Kingdom
              </Typography>
            </Box>
          </Box>
        </Stack>
      </MainCard>
    </>
  );
}

export default HotelDetailDescription;
