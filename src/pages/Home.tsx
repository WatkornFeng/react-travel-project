import { Box, Container, styled } from "@mui/material";
import cover from "../assets/images/country/mountain.jpg";

// import MainLayout from "../components/MainLayout";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

import RecommendProd from "../features/recommend/RecommendProd";
import RecommendHotels from "../features/recommend/RecommendHotels";
import HeroMessage from "../components/HeroMessage";
import MainCard from "../components/MainCard";

import CategoryTabList from "../features/search/CategoryTabList";
// import SearchHotels from "../features/search/SearchHotels";
import { useState } from "react";
import SearchActivities from "../features/search/SearchActivities";

import useMatchViewPort from "../hooks/useMatchViewPort";
import SearchHotels from "../features/search/SearchHotels";
import SearchHotelsBar from "../features/search/SearchHotelsBar";
import useScrollVisibility from "../hooks/useScrollVisibility";

const HomeBackground = styled("div")({
  width: "100%",
  maxHeight: "500px",
  backgroundImage: `url(${cover})`,
  // backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // zIndex: "0",
});

const CardStyle = {
  position: "relative",
  paddingTop: "40px",
  minHeight: "325px",
  marginBottom: "75px",
  // backgroundColor: "red",
};
const CardStyleSmall = {
  position: "relative",
  paddingTop: "40px",
  marginBottom: "75px",
  minHeight: "350px",
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            // bgcolor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function Home() {
  const matchesMedium = useMatchViewPort(1000);
  const [value, setValue] = useState(0);
  const isVisible = useScrollVisibility(600);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      {isVisible ? <SearchHotelsBar /> : null}
      <MainNavBar />
      <HomeBackground>
        <Container>
          <Box sx={{ paddingTop: "75px", marginBottom: "100px" }}>
            <HeroMessage />
          </Box>

          <MainCard
            elevation={10}
            sx={matchesMedium ? CardStyleSmall : CardStyle}
          >
            <CategoryTabList handleChange={handleChange} value={value} />
            <CustomTabPanel value={value} index={0}>
              <SearchHotels />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <SearchActivities />
            </CustomTabPanel>
          </MainCard>

          <RecommendProd />
          <RecommendHotels />
        </Container>
        <Footer />
      </HomeBackground>
    </>
  );
}

export default Home;
