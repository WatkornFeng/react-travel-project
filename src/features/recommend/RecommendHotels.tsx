import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { countries } from "../../data/reccom";
import { numberWithComma } from "../../utils/formatNumber";
import Flag from "../../components/Flag";
import { Link } from "react-router-dom";
import useMatchViewPort from "../../hooks/useMatchViewPort";

const BoxContent = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "14px",
  borderRadius: "20px",
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, " +
    "rgba(0, 0, 0, 0.2) 20%, rgba(0,0,0,0.0) 30%)",
  "&:hover": {
    cursor: "pointer",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, " +
      "rgba(0, 0, 0, 0.4) 70%, rgba(0,0,0,0.2) 100%)",
  },
});
const HeadContent = styled(Typography)({
  fontWeight: "bold",
  color: "white",
});
const Content = styled(Typography)({
  fontSize: "0.7rem",
  color: "white",
});
function HomeRecommendHotels() {
  const matches_800 = useMatchViewPort(800);
  const matches_600 = useMatchViewPort(600);

  // console.log(import.meta.env.VITE_HOSTAPI);
  return (
    <Stack direction="column" sx={{ mb: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "",
          marginBottom: "20px",
          // bgcolor: "green",
        }}
      >
        <AccessibilityNewIcon
          color="primary"
          sx={{ marginRight: "15px", scale: "1.1", alignSelf: "flex-start" }}
        />
        <Typography variant="h6">
          Find your place among the vast wonders of the world
        </Typography>
      </Box>

      <ImageList
        cols={matches_600 ? 1 : matches_800 ? 2 : 3}
        gap={20}
        rowHeight={300}
      >
        {countries.map((item) => (
          <Link to={`/hotels/${item.country.toLowerCase()}`} key={item.code}>
            <ImageListItem>
              <img
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={item.picture}
                alt={item.code}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  // objectFit: "cover",
                }}
              />

              <BoxContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <HeadContent variant="subtitle2">{item.country}</HeadContent>
                  <Flag countryCode={item.code} />
                </Box>
                <Content variant="body1">
                  {numberWithComma(item.numberHotels)} accommodations
                </Content>
              </BoxContent>
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Stack>
  );
}

export default HomeRecommendHotels;
{
  /* <ImageList
sx={{ width: "auto", height: "auto" }}
cols={3}
gap={10}
rowHeight="auto"
>
{itemData.map((item) => (
  <ImageListItem key={item.img}>
    <img
      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
      alt={item.title}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList> */
}

{
  /* <Box sx={{ position: "relative", border: "1px solid red" }}>
              <Box sx={{ bgcolor: "green", width: "auto" }}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  inset: 0,
                  color: "red",
                  zIndex: "100",
                }}
              >
                sdsad
              </Typography>
            </Box> */
}
