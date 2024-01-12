import {
  Box,
  Button,
  Container,
  Grow,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FeatureContent from "./FeatureContent";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const FeaturesContainer = styled(Container)({
  // backgroundColor: "pink",
  maxWidth: "1200px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

const contents = [
  {
    keyword: "Endless options",
    content: "Ensuring you book the perfect choice for your dream getaway.",
    icon: <BurstModeIcon />,
  },
  {
    keyword: "Safely payment",
    content:
      "Easily and securely payment make your travel plans are convenient.",
    icon: <LockIcon />,
  },
  {
    keyword: "Be your travel muse",
    content: "Many inspiration make your trip an unforgettable journey.",
    icon: <TravelExploreIcon />,
  },
];

const ArrowDownButtonStyle = styled(Button)({
  animation: "unfoldEffect 2s infinite",
  "@keyframes unfoldEffect": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10%)",
    },
    "100%": {
      transform: "translateY(10%)",
    },
  },
});

const ArrowDownButton = () => {
  return (
    <ArrowDownButtonStyle>
      <ArrowDropDownIcon />
    </ArrowDownButtonStyle>
  );
};
function FeaturesComp() {
  const [unfold, setUnfold] = useState(false);
  return (
    <FeaturesContainer>
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={2000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Why book with TravelLOGO?</Typography>
          <Button
            sx={{ width: "20px" }}
            onClick={() => setUnfold((prev) => !prev)}
          >
            {unfold ? <ArrowDropUpIcon /> : <ArrowDownButton />}
          </Button>
        </Box>
      </Grow>
      {unfold && (
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 1, md: 3 }}
        >
          {contents.map((content) => (
            <FeatureContent
              key={content.keyword}
              keyword={content.keyword}
              content={content.content}
              icon={content.icon}
            />
          ))}
        </Stack>
      )}
    </FeaturesContainer>
  );
}

export default FeaturesComp;
