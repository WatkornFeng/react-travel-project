import { useNavigate, useParams } from "react-router-dom";

import { useGetHotelQuery } from "../services/apiHotelSlice";

import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import Footer from "../components/Footer";
import HotelDetailNavigate from "../features/bookings/HotelDetailNavigate";
import HotelDetailPicture from "../features/bookings/HotelDetailPicture";
import useMatchViewPort from "../hooks/useMatchViewPort";
import ImageSilder from "../components/ImageSilder";

import HeadSection from "../components/HeadSection";

import StarRating from "../components/StarRating";
import HotelDetailDescription from "../features/bookings/HotelDetailDescription";
import HotelDetailTab from "../features/bookings/HotelDetailTab";
import HotelDetailAmentities from "../features/bookings/HotelDetailAmentities";
import MainCard from "../components/MainCard";
import HotelDetailRoom from "../features/bookings/HotelDetailRoom";
import HotelDetailReviews from "../features/reviews/HotelDetailReviews";
import { useEffect, useReducer, useRef, useState } from "react";
import { useElementHeight } from "../hooks/useElementHeight";
import HotelRateReview from "../features/bookings/HotelCardReview";
import { useInView } from "react-intersection-observer";
const overviewStyle = {
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
};
// interface heightAction {
//   type: string;
//   payload: IState;
// }
// interface IState {
//   overview: number | null;
//   rooms: number | null;
//   amenities: number | null;
//   reviews: number | null;
// }
// const initialState: IState = {
//   overview: 0,
//   rooms: 0,
//   amenities: 0,
//   reviews: 0,
// };
// function reducer(state: number, action: heightAction) {
//   if(action === "")
//   return state;
// }
function HotelDetail() {
  const navigate = useNavigate();
  const { placeParam, nameHotel } = useParams();
  const obj = { placeParam, nameHotel };
  const [elementId, setElementId] = useState("overview");
  const [refOverview, inViewOverview] = useInView({
    threshold: 0.2,
  });

  const [refRooms, inViewRooms] = useInView({
    threshold: 0.2,
  });
  const [refAmenities, inViewAmenities] = useInView({
    threshold: 0.2,
  });

  const [refReviews, inViewReviews] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewOverview) {
      setElementId("overview");
      return;
    }
    if (inViewRooms) {
      setElementId("rooms");
      return;
    }
    if (inViewAmenities) {
      setElementId("amenities");
      return;
    }
    if (inViewReviews) {
      setElementId("reviews");
      return;
    }
  }, [inViewOverview, inViewRooms, inViewAmenities, inViewReviews]);
  if (!placeParam || !nameHotel) navigate(-1);

  return (
    <>
      <Container>
        <HotelDetailTab elementId={elementId} setElementId={setElementId} />
        <Box component="section" id="overview" ref={refOverview} sx={{ mb: 2 }}>
          <HotelDetailDescription />
        </Box>

        <Box
          component="section"
          id="rooms"
          ref={refRooms}
          sx={{ mb: 2, pt: "50px" }}
        >
          <HotelDetailRoom />
        </Box>
        <Box
          component="section"
          id="amenities"
          ref={refAmenities}
          sx={{ mb: 2, pt: "50px" }}
        >
          <HotelDetailAmentities />
        </Box>
        <Box
          component="section"
          id="reviews"
          ref={refReviews}
          sx={{ mb: 2, pt: "50px" }}
        >
          <HotelDetailReviews />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default HotelDetail;
// {
//   !gethotel ? <Empty resourceName="hotel" /> : <>{gethotel.data.hotel.name}</>;
// }
{
  /* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="big" color="primary.main" />
        </Box> */
}

// useEffect(() => {
//   // console.log("x");
//   const controlNavbar = () => {
//     const scrollPosY = window.scrollY + 50;
//     if (scrollPosY <= heightOverview) setElementId("overview");
//     else if (scrollPosY > heightOverview && scrollPosY <= heightRooms)
//       setElementId("rooms");
//     else if (scrollPosY > heightRooms && scrollPosY <= heightAmenities)
//       setElementId("amenities");
//     else if (scrollPosY > heightAmenities) setElementId("reviews");
//   };

//   // Attach the scroll event listener
//   window.addEventListener("scroll", controlNavbar);
//   return () => {
//     window.removeEventListener("scroll", controlNavbar);
//   };
// }, [heightOverview, heightRooms, heightAmenities, heightReviews]);
