import { styled } from "@mui/material";
import cover from "./assets/images/mountain.jpg";
import MainNavBar from "./components/MainNavBar";

import FilterComp from "./components/FilterComp";

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

function App() {
  return (
    <>
      <BackgroundContainer>
        <MainNavBar />
        <FilterComp />
      </BackgroundContainer>
    </>
  );
}

export default App;

/*
https://blog.webdevsimplified.com/2022-07/react-folder-structure/ */
