import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import StarRating from "../../components/StarRating";

interface Props {
  stars: number;
  name: string;
  facilities: string[];
  location: string;
}
function HotelCardHead({ stars, name, facilities, location }: Props) {
  // const numOfStar = calStarRate(stars);

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
        <StarRating stars={stars} size="1rem" color="primary.dark" />
        {/* {numOfStar.map((e) => (
          <StarIcon key={e} sx={{ fontSize: "1rem", color: "primary.dark" }} />
        ))} */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          // flexDirection: "row",
          alignItems: "center",
          // bgcolor: "red",
          mb: 1,
        }}
      >
        <PlaceIcon sx={{ fontSize: "24px", color: "primary.dark" }} />
        <Typography
          display="inline-block"
          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
        >
          {location}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {facilities.map((facility, index) => (
          <Box
            key={index}
            sx={{
              mr: 1,
              p: 0.5,
              bgcolor: "primary.light",
              borderRadius: "5px",
            }}
          >
            <Typography
              key={facility}
              display="inline-block"
              sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
            >
              {facility}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HotelCardHead;
