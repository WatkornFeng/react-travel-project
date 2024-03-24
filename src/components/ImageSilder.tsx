import { useRef, useState } from "react";
import cover from "../assets/images/hotel/hotel-1.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box, IconButton, Slide, styled, useTheme } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { current } from "@reduxjs/toolkit";
interface IProps {
  images: string[];
}
const x = [
  "https://res.cloudinary.com/dp2atg2zj/image/upload/v1707935098/eq45cqjlduoydihedodx.jpg",
  "https://res.cloudinary.com/dp2atg2zj/image/upload/v1707935083/jrfe5uo0tnwnbdtfwno2.jpg",
  "https://res.cloudinary.com/dp2atg2zj/image/upload/v1707935098/eq45cqjlduoydihedodx.jpg",
  "https://res.cloudinary.com/dp2atg2zj/image/upload/v1707935083/jrfe5uo0tnwnbdtfwno2.jpg",
  "https://res.cloudinary.com/dp2atg2zj/image/upload/v1707935098/eq45cqjlduoydihedodx.jpg",
];

function ImageSilder() {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImage] = useState(1);

  const handlePrevImg = () => {
    setCurrentImage((index) => index - 1);
  };
  const handleNextImg = () => {
    setCurrentImage((index) => index + 1);
  };
  return (
    <Box
      position="relative"
      height={500}
      sx={{
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {x.map((url, index) => (
        <img
          key={index}
          style={{
            width: "100%",
            flexShrink: 0,
            objectFit: "cover",
            transition: "transform 0.5s ease-out",
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
          src={url}
        />
      ))}
      {currentImageIndex >= 0 && (
        <IconButton
          onClick={handlePrevImg}
          disabled={currentImageIndex === 0}
          sx={{
            position: "absolute",
            color: "primary.main",
            bgcolor: "white",
            top: "50%",
            transform: "translate(0,-50%)",
            boxShadow: "0 12px 24px rgba(0,0,0,2)",
            left: 0,
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
      )}
      {currentImageIndex <= 4 && (
        <IconButton
          onClick={handleNextImg}
          disabled={currentImageIndex === 4}
          sx={{
            position: "absolute",
            color: "primary.main",
            bgcolor: "white",
            top: "50%",
            transform: "translate(0,-50%)",
            boxShadow: "0 12px 24px rgba(0,0,0,2)",
            right: 0,
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      )}

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          pb: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "50%",
          transform: "translate(-50%,0)",
          background: "transparent",
          // boxShadow: "0px 0px 41px 0px white",
          gap: 1,
        }}
      >
        {x.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: "1rem",

              width: "1rem",
              background: `${
                index === currentImageIndex
                  ? theme.palette.primary.dark
                  : "white"
              }`,
              borderRadius: "50%",
              border: `0.2rem solid ${theme.palette.primary.dark}`,
              boxShadow: "0px 0px 41px 0px rgba(0,0,0,1)",
              transition: "transform 1s",
              transform: `${index === currentImageIndex ? "scale(1.2)" : ""}`,
            }}
          >
            &nbsp;
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ImageSilder;
