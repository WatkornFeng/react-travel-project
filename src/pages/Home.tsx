import { styled } from "@mui/material";
import cover from "../assets/images/mountain.jpg";

import MainNavBar from "../features/MainNavBar";
import FilterComp from "../features/FilterComp";
import FeaturesComp from "../features/FeaturesComp";
const BackgroundContainer = styled("div")({
  width: "100%",
  maxHeight: "600px",
  backgroundImage: `url(${cover})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: "0",
  marginBottom: "250px",
});

function Home() {
  return (
    <>
      <BackgroundContainer>
        <MainNavBar />
        <FilterComp />
        <FeaturesComp />
      </BackgroundContainer>
    </>
  );
}

export default Home;
