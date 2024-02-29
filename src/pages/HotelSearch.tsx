import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// data

// shared components
import BackgroundPicture from "../components/BackgroundPicture";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
// Features
import SideBarFilter from "../features/filter/SideBarFilter";
import FilterModal from "../features/filter/FilterModal";
import FilterSortBy from "../features/filter/FilterSortBy";
import HotelCard from "../features/bookings/HotelCard";
import SearchHotels from "../features/search/SearchHotels";
import SearchHotelsBar from "../features/search/SearchHotelsBar";
//CustomHook
import useScrollVisibility from "../hooks/useScrollVisibility";
import useMatchViewPort from "../hooks/useMatchViewPort";

import Empty from "../components/Empty";
import { places, thaiProvinces } from "../data/place";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";

import { useGetHotelsQuery } from "../services/apiHotelSlice";
import HotelCardSkeleton from "../features/bookings/HotelCardSkeleton";
import { convertDataToArr } from "../utils/formatData";
import CustomModal from "../components/CustomModal";

const HeroTypography = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bold",
});

const searchHotelCardStyled = {
  marginBottom: "75px",
  paddingTop: "40px",
  minHeight: "250px",
  padding: "20px",
};

const breadcrumbStyled = {
  textDecoration: "none",
  fontWeight: "normal",
  fontSize: "0.7rem",
  padding: "10px",
  color: "darkgreen",
  "& :hover": {
    textDecoration: "underline",
  },
};

function HotelSearch() {
  const { placeParam } = useParams();
  const { queries, isModalFilterOpen } = useSelector(
    (state: RootState) => state.filter
  );
  // console.log(isModalFilterOpen);
  const { date, guest } = useSelector((state: RootState) => state.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryString = searchParams.toString();
  // console.log(queryString);
  const obj = { queryString, placeParam };
  const { data: gethotels, error, isFetching } = useGetHotelsQuery(obj);
  const widthViewPort_670 = useMatchViewPort(670);
  const widthViewPort_1000 = useMatchViewPort(1000);
  const isVisible = useScrollVisibility(600);
  const [openModal, isOpenModal] = useState(false);
  // console.log(queries);
  // console.log(isModalFilterOpen);

  useEffect(() => {
    if (isModalFilterOpen) return;
    const dataSearch = { date, guest };
    const dataArr = convertDataToArr(dataSearch);
    const concatenatedArray = queries.concat(dataArr);
    setSearchParams(concatenatedArray.join("&"));
  }, [queries]);

  // console.log("Fetching" + isFetching);

  ////////////////
  const placeData = places.find((place) => place.province === placeParam);

  const breadcrumbs = [
    <Link key="1" to="/" style={breadcrumbStyled}>
      HOME
    </Link>,
    <Link key="2" to={`/hotels/${placeParam}`} style={breadcrumbStyled}>
      HOTELS
    </Link>,
  ];

  return (
    <>
      {!thaiProvinces.includes(placeParam!) && (
        <CustomModal
          toggled={true}
          setToggled={isOpenModal}
          content={{
            topic: "No Place/Province Found!",
            details: "Please select Province in Thailand",
          }}
          isNavigated={true}
        />
      )}
      {isVisible ? <SearchHotelsBar /> : null}
      {/* <>{isModalFilterOpen}</> */}
      <BackgroundPicture src={placeData?.imgContainer}>
        <Container>
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              bgcolor: "white",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  sx={{ color: "darkgreen" }}
                />
              }
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "100px",
              marginBottom: "100px",
            }}
          >
            <HeroTypography
              variant="h1"
              sx={{
                fontSize: `${
                  widthViewPort_670
                    ? "1.5rem"
                    : widthViewPort_1000
                    ? "2rem"
                    : "3rem"
                }`,
              }}
              color="White"
            >
              Hotels in {placeParam?.toUpperCase()}
            </HeroTypography>

            <Typography color="White">
              {/* {placeData?.numberHotels} hotels avaliable */}
            </Typography>
          </Box>

          <MainCard elevation={10} sx={searchHotelCardStyled}>
            <SearchHotels />
          </MainCard>

          <Grid container spacing={2}>
            <Grid item xs={0} md={3}>
              <SideBarFilter />
              <FilterModal />
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack
                direction={widthViewPort_670 ? "column" : "row"}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "25px",
                }}
              >
                {isFetching ? (
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Searching . . .
                  </Typography>
                ) : (
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {gethotels?.length} properties found
                  </Typography>
                )}

                <FilterSortBy />
              </Stack>
              {isFetching ? (
                <Stack spacing={2}>
                  {Array.from(new Array(4)).map((_, index) => (
                    <HotelCardSkeleton key={index} />
                  ))}
                </Stack>
              ) : gethotels?.length === 0 || !gethotels ? (
                <Empty resourceName="hotels" />
              ) : (
                <Stack spacing={2}>
                  {gethotels.data.hotels.map(
                    ({
                      _id,
                      name,
                      star,
                      rating,
                      price,
                      facilities,
                      location,
                      slug,
                      image,
                    }) => (
                      <HotelCard
                        key={_id}
                        id={_id}
                        name={name}
                        stars={star}
                        rating={rating}
                        price={price}
                        facilities={facilities}
                        location={location}
                        slug={slug}
                        image={image}
                      />
                    )
                  )}
                </Stack>
              )}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </BackgroundPicture>
    </>
  );
}

export default HotelSearch;
