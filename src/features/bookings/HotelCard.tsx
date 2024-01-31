import { Box, Grid, Paper, Typography } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import MainCard from "../../components/MainCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import FlexBox from "../../components/FlexBox";
import HotelCardHead from "./HotelCardHead";
import HotelCardContent from "./HotelCardContent";
import HotelCardPicture from "./HotelCardPicture";
const hotelCardStyle = {
  overflow: "hidden",
  // height: "320px",
};
const hotelCardSmallStyle = {
  overflow: "hidden",
  // Height: "600px",
};
interface Props {
  name: string;
  description: string;
  rating: number;
  cover: string;
  guestReview: number;
}

function HotelCard({ cover, name, description, rating, guestReview }: Props) {
  const matches_650 = useMatchViewPort(650);
  const matches_850 = useMatchViewPort(850);

  return (
    <Link to="" style={{ textDecoration: "none" }}>
      <MainCard
        elevation={2}
        sx={matches_650 ? hotelCardSmallStyle : hotelCardStyle}
      >
        <Box
          display="grid"
          gridTemplateColumns={matches_650 ? "1fr" : "0.4fr 0.6fr"}
          gridTemplateRows={matches_650 ? "300px 300px" : "320px"}
        >
          <HotelCardPicture cover={cover} />
          <Box sx={{ padding: `${matches_850 ? "10px" : "16px"}` }}>
            <HotelCardHead rating={rating} name={name} />
            <HotelCardContent />
          </Box>
        </Box>
      </MainCard>
    </Link>
  );
}

export default HotelCard;
