import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import MainCard from "../../components/MainCard";

import HotelCardHead from "./HotelCardHead";
import HotelCardContent from "./HotelCardContent";
import HotelCardPicture from "./HotelCardPicture";
// import { setHotelID } from "./hotelSlice";
import { useAppDispatch } from "../../store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteButton from "../../components/FavoriteButton";
interface Props {
  id: string;
  name: string;
  rating: number;
  cover?: string;
  stars: number;
  price: number;
  facilities: string[];
  location: string;
  slug: string;
  image: string;
  // description: string;
  // guestReview: number;
}

function HotelCard({
  name,
  stars,
  rating,
  price,
  facilities,
  location,
  slug,
  id,
  image,
}: Props) {
  const dispatch = useAppDispatch();
  const widthViewPort_650 = useMatchViewPort(650);
  const widthViewPort_850 = useMatchViewPort(850);
  const handleFavorite = () => {
    // console.log("Clikc fav");
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Link
        to={`/hotels/${location}/${slug}`}
        style={{ textDecoration: "none" }}
        // onClick={() => dispatch(setHotelID(slug))}
      >
        <MainCard elevation={2} sx={{ overflow: "hidden" }}>
          <Box
            display="grid"
            gridTemplateColumns={widthViewPort_650 ? "1fr" : "0.4fr 0.6fr"}
            gridTemplateRows={widthViewPort_650 ? "300px 300px" : "320px"}
          >
            <HotelCardPicture cover={image} />

            <Box sx={{ padding: `${widthViewPort_850 ? "10px" : "16px"}` }}>
              <HotelCardHead
                stars={stars}
                name={name}
                facilities={facilities}
                location={location}
              />
              <HotelCardContent rating={rating} price={price} />
            </Box>
          </Box>
        </MainCard>
      </Link>

      <FavoriteButton handleFavorite={handleFavorite} position="absolute" />
    </Box>
  );
}

export default HotelCard;
