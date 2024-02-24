import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import Flag from "../../components/Flag";
import { Link, useNavigate } from "react-router-dom";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import { places } from "../../data/place";
import { useAppDispatch } from "../../store";

import { selectPlace } from "../search/searchSlice";

const BoxContent = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "24px",
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
  fontSize: "1rem",
  fontWeight: "bold",
  color: "white",
});
const Content = styled(Typography)({
  fontSize: "0.7rem",
  color: "white",
});

function HomeRecommendHotels() {
  const dispatch = useAppDispatch();
  const widthViewPort_800 = useMatchViewPort(800);
  const widthViewPort_600 = useMatchViewPort(600);

  return (
    <Stack direction="column" sx={{ mb: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "",
          marginBottom: "20px",
        }}
      >
        <AccessibilityNewIcon
          color="primary"
          sx={{ marginRight: "15px", scale: "1.1", alignSelf: "flex-start" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">
            Find your place among the vast wonders of the{" "}
            <strong>Thailand </strong>
            <Flag countryCode="TH" />
          </Typography>
        </Box>
      </Box>

      <ImageList
        cols={widthViewPort_600 ? 1 : widthViewPort_800 ? 2 : 3}
        gap={20}
        rowHeight={300}
      >
        {places.map(({ province, img }) => (
          <Link
            // to={`/hotels/${place.province}?sort=PRICE_LOW_TO_HIGH`}

            to={`/hotels/${province}`}
            // to={`/hotels/search`}
            key={province}
            onClick={() => dispatch(selectPlace(province))}
          >
            <ImageListItem>
              <img
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                // srcSet={img}
                src={img}
                alt={province.toLowerCase()}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  // objectFit: "cover",
                }}
              />

              <BoxContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HeadContent>{province}</HeadContent>
                </Box>
                <Content variant="body1">
                  {/* {numberWithComma(item.numberHotels)} accommodations */}
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
