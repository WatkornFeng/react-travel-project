import { Box, Typography } from "@mui/material";
import HeadSection from "../../components/HeadSection";
import MainCard from "../../components/MainCard";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import HotelDetailAmentityList from "./HotelDetailAmentityList";
import CustomAccordion from "../../components/CustomAccordion";

function HotelDetailAmentities() {
  const widthViewPort_1000 = useMatchViewPort(1000);
  const widthViewPort_700 = useMatchViewPort(700);
  return (
    <>
      <HeadSection>Amentities</HeadSection>
      <MainCard elevation={2}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: widthViewPort_700
              ? "repeat(1,1fr)"
              : widthViewPort_1000
              ? "repeat(2,1fr)"
              : "repeat(3,1fr)",
          }}
        >
          {[1, 2, 3, 4].map((e, index) => {
            return (
              <Box key={index}>
                {widthViewPort_700 ? (
                  <CustomAccordion
                    summary="Hotel Services"
                    details={["item1", "item2", "item3"]}
                  />
                ) : (
                  <HotelDetailAmentityList />
                )}
              </Box>
            );
          })}
        </Box>
      </MainCard>
      <Typography fontWeight="bold"></Typography>
    </>
  );
}

export default HotelDetailAmentities;
