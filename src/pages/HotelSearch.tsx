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
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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
import { IQueriesObj } from "../features/search/SearchButton";
import { IProvinceObject } from "../features/search/searchSlice";
import { useGetProvincesQuery } from "../services/apiProvinceSlice";

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
  const widthViewPort_670 = useMatchViewPort(670);
  const widthViewPort_1000 = useMatchViewPort(1000);
  const isVisible = useScrollVisibility(600);

  const { placeParam } = useParams();
  // const { queries, isModalFilterOpen } = useSelector(
  //   (state: RootState) => state.filter
  // );

  // console.log(isModalFilterOpen);
  // const { date, guest, place } = useSelector(
  //   (state: RootState) => state.search
  // );

  // console.log(place);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryString = searchParams.toString();
  // console.log(queryString);
  const obj = { queryString, placeParam };
  const { data: gethotels, error, isFetching } = useGetHotelsQuery(obj);
  const {
    data: getProvinces,
    isError,
    isFetching: fetchingProvince,
  } = useGetProvincesQuery();
  const [provincesObj, setProvinceObj] = useState<IProvinceObject[]>([]);
  const [openWarningModal, isOpenWarningModal] = useState(false);
  const [queryData, setQueryData] = useState<null | IQueriesObj>(null);
  const [provinceData, setProvinceData] = useState<null | IProvinceObject>(
    null
  );

  const province = localStorage.getItem("province");
  const query = localStorage.getItem("queries");

  useEffect(() => {
    if (getProvinces) {
      const { provinces } = getProvinces;
      const provinceObjectArr = provinces.map((prov) => ({
        province: prov.name,
        id: prov._id,
        cover: prov.pictureCover.url,
      }));
      provinceObjectArr.push({ province: "", id: "", cover: "" });
      setProvinceObj([...provinceObjectArr]);
    }
  }, [getProvinces]);
  useEffect(() => {
    if (province) setProvinceData(JSON.parse(province));
    if (query) setQueryData(JSON.parse(query));

    if (
      placeParam &&
      province &&
      placeParam !== JSON.parse(province).province
    ) {
      const matchProvince = provincesObj.find((pro) => {
        if (pro.province === placeParam) {
          return pro;
        }
      });
      localStorage.setItem("province", JSON.stringify(matchProvince));
    }
  }, [province, query, placeParam, provincesObj]);

  // useEffect(() => {
  //   // console.log("x");
  //   if (isModalFilterOpen) return;
  //   // if (placeParam !== place?.province) return;
  //   // const dataSearch = { date, guest };
  //   // const dataArr = convertDataToArr(dataSearch);
  //   // const concatenatedArray = queries.concat(dataArr);
  //   // setSearchParams(concatenatedArray.join("&"));
  // }, [isModalFilterOpen]);

  const breadcrumbs = [
    <Link key="1" to="/" style={breadcrumbStyled}>
      HOME
    </Link>,
    <Link
      key="2"
      to={`/hotels/${placeParam}/${queryString}`}
      style={breadcrumbStyled}
    >
      HOTELS
    </Link>,
  ];

  return (
    <>
      {!thaiProvinces.includes(placeParam!) && (
        <CustomModal
          toggled={true}
          setToggled={isOpenWarningModal}
          content={{
            topic: "No Place/Province Found!",
            details: "Please select Province in Thailand",
          }}
          isNavigated={true}
        />
      )}
      {isVisible ? (
        <SearchHotelsBar
          isFetchingProvince={fetchingProvince}
          province={provincesObj}
        />
      ) : null}
      {/* <>{isModalFilterOpen}</> */}
      {/* <BackgroundPicture src={placeData?.imgContainer}> */}
      <BackgroundPicture src={provinceData?.cover}>
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
              Hotels in {provinceData?.province}
            </HeroTypography>

            <Typography color="White">
              {/* {placeData?.numberHotels} hotels avaliable */}
            </Typography>
          </Box>

          <MainCard elevation={10} sx={searchHotelCardStyled}>
            <SearchHotels
              isFetchingProvince={fetchingProvince}
              province={provincesObj}
            />
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
// useEffect(() => {
//   // Fetch data from localStorage and URL on component mount
//   const storedData = localStorage.getItem("province");
//   let province;
//   if (storedData) {
//     province = JSON.parse(storedData);
//   }
//   const urlData = new URLSearchParams(location.search).get("data");

//   // If data exists in localStorage and URL, merge them
//   if (storedData && urlData) {
//     setData({ ...province, ...JSON.parse(urlData) });
//   } else if (storedData) {
//     // If data exists only in localStorage, use it
//     setData(province);
//   } else if (urlData) {
//     // If data exists only in URL, use it
//     setData(JSON.parse(urlData));
//   }
// }, [location.search]);
