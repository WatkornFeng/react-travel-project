import FlexBox from "../../components/FlexBox";
import { Box, Grid, Paper, Typography } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import MainCard from "../../components/MainCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

import PlaceIcon from "@mui/icons-material/Place";
function calStarRate(num: number) {
  return Array.from({ length: num }, (_, index) => index + 1);
}

interface Props {
  rating: number;
  name: string;
}
function HotelCardHead({ rating, name }: Props) {
  const numOfStar = calStarRate(rating);
  return (
    <Box
      sx={{
        // padding: "18px",
        // bgcolor: "orange",
        height: "50%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          mb: "10px",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          mb: "10px",
        }}
      >
        {numOfStar.map((e) => (
          <StarIcon key={e} sx={{ fontSize: "24px", color: "primary.dark" }} />
        ))}
      </Box>
      <FlexBox alignItem="flex-start">
        <PlaceIcon sx={{ fontSize: "24px", color: "primary.dark" }} />
        <Typography display="inline-block" sx={{ fontSize: "0.7rem" }}>
          location
        </Typography>
      </FlexBox>
      <Box>
        <Typography display="inline-block" sx={{ fontSize: "0.7rem" }}>
          Breakfast
        </Typography>
        <Typography display="inline-block" sx={{ fontSize: "0.7rem" }}>
          Free Wifi
        </Typography>
      </Box>
    </Box>
  );
}

export default HotelCardHead;
