import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import FavoriteButton from "../../components/FavoriteButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  padding: "15px",
  color: `${theme.palette.primary.main}`,
  "&:hover": {
    color: `${theme.palette.primary.main}`,
    textDecoration: "underline",
  },
}));
function HotelDetailNavigate() {
  const { placeParam } = useParams();

  const handleFavorite = () => {
    //
  };
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <KeyboardBackspaceIcon />
          <StyledLink to={`/hotels/${placeParam}`}>
            <Typography fontWeight="bold" color="primary.dark">
              See all properties
            </Typography>
          </StyledLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FavoriteButton handleFavorite={handleFavorite} position="relative" />
          <Typography fontWeight="bold">Save</Typography>
        </Box>
      </Box>
    </>
  );
}

export default HotelDetailNavigate;
