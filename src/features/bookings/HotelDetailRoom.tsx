import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import HeadSection from "../../components/HeadSection";
import MainCard from "../../components/MainCard";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import PeopleIcon from "@mui/icons-material/People";
const rooms = [1, 2, 3, 4];
const url =
  "https://res.cloudinary.com/dp2atg2zj/image/upload/f_auto,q_auto/v1/rooms/xga4t3avr3mhxhpttnh1";
function HotelDetailRoom() {
  const widthViewPort_1000 = useMatchViewPort(1000);
  const widthViewPort_700 = useMatchViewPort(700);
  return (
    <>
      <HeadSection>Choose your room</HeadSection>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: widthViewPort_700
            ? "repeat(1,1fr)"
            : widthViewPort_1000
            ? "repeat(2,1fr)"
            : "repeat(3,1fr)",
          gap: 2,
          // marginInline: widthViewPort_700 ? 6 : widthViewPort_900 ? 4 : 2,
        }}
      >
        <MainCard
          elevation={2}
          sx={{
            overflow: "hidden",
            height: widthViewPort_700 ? "30rem" : "25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // bgcolor: "green",
            marginInline: widthViewPort_700 ? 6 : "",
          }}
        >
          <Box sx={{ height: "40%" }}>
            <img
              src={url}
              alt="room image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack
            spacing={1}
            sx={{
              p: "0.7rem",
              borderBottom: "0.5px solid rgba(0,0,0,0.1)",
              // bgcolor: "red",
              height: "43%",
            }}
          >
            <Typography fontWeight="bold">Room name</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FreeBreakfastIcon fontSize={"small"} />
              <Typography fontWeight="light">Free breakfast</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <WifiIcon fontSize={"small"} />
              <Typography fontWeight="light">Free Wifi</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <PeopleIcon fontSize={"small"} />
              <Typography fontWeight="light">Sleeps 2</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <LocalHotelIcon fontSize={"small"} />
              <Typography fontWeight="light">2 Twin Beds</Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              // bgcolor: "blue"
              height: "17%",
              p: "0.4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontWeight="bold" fontSize="1.2rem">
                  $122
                </Typography>
                <Typography fontWeight="normal" fontSize="0.8rem">
                  $149 total
                </Typography>
                <Typography fontWeight="normal" fontSize="0.6rem">
                  (includes taxes & fee)
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", p: 1.5 }}
                >
                  Reserve
                </Button>
              </Box>
            </Box>
          </Box>
        </MainCard>
        <MainCard
          elevation={2}
          sx={{
            overflow: "hidden",
            height: widthViewPort_700 ? "30rem" : "25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // bgcolor: "green",
            marginInline: widthViewPort_700 ? 6 : "",
          }}
        >
          <Box sx={{ height: "40%" }}>
            <img
              src={url}
              alt="room image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack
            spacing={1}
            sx={{
              p: "0.7rem",
              borderBottom: "0.5px solid rgba(0,0,0,0.1)",
              // bgcolor: "red",
              height: "43%",
            }}
          >
            <Typography fontWeight="bold">Room name</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FreeBreakfastIcon fontSize={"small"} />
              <Typography fontWeight="light">Free breakfast</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <WifiIcon fontSize={"small"} />
              <Typography fontWeight="light">Free Wifi</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <PeopleIcon fontSize={"small"} />
              <Typography fontWeight="light">Sleeps 2</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <LocalHotelIcon fontSize={"small"} />
              <Typography fontWeight="light">2 Twin Beds</Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              // bgcolor: "blue"
              height: "17%",
              p: "0.4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontWeight="bold" fontSize="1.2rem">
                  $122
                </Typography>
                <Typography fontWeight="normal" fontSize="0.8rem">
                  $149 total
                </Typography>
                <Typography fontWeight="normal" fontSize="0.6rem">
                  (includes taxes & fee)
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", p: 1.5 }}
                >
                  Reserve
                </Button>
              </Box>
            </Box>
          </Box>
        </MainCard>
        <MainCard
          elevation={2}
          sx={{
            overflow: "hidden",
            height: widthViewPort_700 ? "30rem" : "25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // bgcolor: "green",
            marginInline: widthViewPort_700 ? 6 : "",
          }}
        >
          <Box sx={{ height: "40%" }}>
            <img
              src={url}
              alt="room image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack
            spacing={1}
            sx={{
              p: "0.7rem",
              borderBottom: "0.5px solid rgba(0,0,0,0.1)",
              // bgcolor: "red",
              height: "43%",
            }}
          >
            <Typography fontWeight="bold">Room name</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FreeBreakfastIcon fontSize={"small"} />
              <Typography fontWeight="light">Free breakfast</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <WifiIcon fontSize={"small"} />
              <Typography fontWeight="light">Free Wifi</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <PeopleIcon fontSize={"small"} />
              <Typography fontWeight="light">Sleeps 2</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <LocalHotelIcon fontSize={"small"} />
              <Typography fontWeight="light">2 Twin Beds</Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              // bgcolor: "blue"
              height: "17%",
              p: "0.4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontWeight="bold" fontSize="1.2rem">
                  $122
                </Typography>
                <Typography fontWeight="normal" fontSize="0.8rem">
                  $149 total
                </Typography>
                <Typography fontWeight="normal" fontSize="0.6rem">
                  (includes taxes & fee)
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", p: 1.5 }}
                >
                  Reserve
                </Button>
              </Box>
            </Box>
          </Box>
        </MainCard>
      </Box>
    </>
  );
}

export default HotelDetailRoom;
