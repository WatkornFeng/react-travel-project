import { Box } from "@mui/material";

import useMatchViewPort from "../../hooks/useMatchViewPort";

interface Props {
  cover: string;
}
function HotelCardPicture({ cover }: Props) {
  const matches_650 = useMatchViewPort(650);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src={cover}
        height={matches_650 ? "300px" : "320px"}
        width="100%"
        style={{
          objectFit: "cover",
          position: "absolute",
        }}
      />
    </Box>
  );
}

export default HotelCardPicture;
