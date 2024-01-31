import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useParams } from "react-router-dom";
import BackgroundPicture from "../components/BackgroundPicture";
import { countries } from "../data/reccom";
import MainLayout from "../components/MainLayout";

import Footer from "../components/Footer";

import MainCard from "../components/MainCard";

import {
  SearchHotelContextType,
  useHotelSearch,
} from "../context/SearchContext";
import SearchBar from "../features/search/SearchBar";
import SideBarFilter from "../features/filter/SideBarFilter";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { cy } from "date-fns/locale";
import FilterModal from "../features/filter/FilterModal";
import FilterSortBy from "../features/filter/FilterSortBy";
import useMatchViewPort from "../hooks/useMatchViewPort";
import HotelCard from "../features/bookings/HotelCard";
import { hotelData } from "../data/hotel";

const HeroTypography = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bold",
});

const searchHotelCardStyled = {
  // position: "relative",
  marginBottom: "75px",
  paddingTop: "40px",
  minHeight: "250px",
  padding: "20px",

  // backgroundColor: "red",
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "lightgreen",
}));

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

function Hotels() {
  const matches_670 = useMatchViewPort(670);
  const matches_1000 = useMatchViewPort(1000);
  const { country } = useParams();
  // const { state } = useHotelSearch() as SearchHotelContextType;
  const countryData = countries.find(
    (e) => e.country.toLowerCase() === country
  );
  const breadcrumbs = [
    <Link key="1" to="/" style={breadcrumbStyled}>
      HOME
    </Link>,
    <Link key="2" to={`/hotels/${country}`} style={breadcrumbStyled}>
      HOTELS
    </Link>,
  ];
  return (
    <>
      <BackgroundPicture src={countryData?.pictureContainer}>
        <MainLayout>
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
                  matches_670 ? "1.5rem" : matches_1000 ? "2rem" : "3rem"
                }`,
              }}
              color="White"
            >
              Hotels in {country?.toUpperCase()}
            </HeroTypography>

            <Typography color="White">
              {countryData?.numberHotels} hotels avaliable
            </Typography>
          </Box>

          <MainCard elevation={10} sx={searchHotelCardStyled}>
            <SearchBar />
          </MainCard>

          <Grid container spacing={2}>
            <Grid item sm={0} md={3}>
              <SideBarFilter />
              <FilterModal />
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack
                direction={matches_670 ? "column" : "row"}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "25px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  539 properties found
                </Typography>

                <FilterSortBy />
              </Stack>
              <Stack spacing={2}>
                {hotelData.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    cover={hotel.imageCover}
                    name={hotel.name}
                    rating={hotel.rating}
                    description={hotel.description}
                    guestReview={hotel.guestReview}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </MainLayout>

        <Footer />
      </BackgroundPicture>
    </>
  );
}

export default Hotels;
