import { Box, styled, Button } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import HikingIcon from "@mui/icons-material/Hiking";
import { useState } from "react";

const CategoryContainer = styled(Box)({
  position: "absolute",
  top: -20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  boxShadow:
    "0px 0px 10px 4px rgba(0,0,0,0.14),0px 5px 5px 0px rgba(0,0,0,0.22)",
  borderRadius: "10px",
  paddingInline: "20px",
  gap: 20,
  zIndex: 2,
});
const CategoryButton = styled(Button)(({ theme, value }) => ({
  border: "4px solid transparent",
  color:
    value === "true"
      ? `${theme.palette.primary.dark}`
      : `${theme.palette.secondary.dark}`,
  borderBottom:
    value === "true" ? `4px solid ${theme.palette.primary.dark}` : "",
  "&:hover": {
    borderBottom: `4px solid ${theme.palette.primary.dark}`,
    backgroundColor: "#fff",
  },
}));

function CategoryComp() {
  const [active, setActive] = useState<string>("true");
  return (
    <CategoryContainer>
      <CategoryButton value={active} startIcon={<HotelIcon />}>
        Hotels
      </CategoryButton>
      <CategoryButton startIcon={<HikingIcon />}>Things to Do</CategoryButton>
    </CategoryContainer>
  );
}

export default CategoryComp;
