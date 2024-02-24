import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface IProps {
  handleFavorite: () => void;
  position: string;
}

function FavoriteButton({ handleFavorite, position }: IProps) {
  return (
    <IconButton
      onClick={handleFavorite}
      sx={{
        position: `${position}`,
        bgcolor: "white",
        top: position === "absolute" ? 15 : "",
        left: position === "absolute" ? 15 : "",
        color: "primary.main",
        "&:hover": {
          color: "red",
          backgroundColor: "white",
        },
      }}
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default FavoriteButton;
