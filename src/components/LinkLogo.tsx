import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import useMatchViewPort from "../hooks/useMatchViewPort";

interface Props {
  textColor?: string;
  fontSize?: string;
}
function LinkLogo({ textColor = "primary", fontSize = "verylarge" }: Props) {
  const widthViewPort_900 = useMatchViewPort(900);
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Logo />
        {!widthViewPort_900 && (
          <Typography
            variant="h5"
            color={textColor}
            fontWeight="bold"
            fontSize={fontSize}
            letterSpacing={"5px"}
          >
            SmileTravel
          </Typography>
        )}
      </Stack>
    </Link>
  );
}

export default LinkLogo;
