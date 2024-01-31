import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const navItems = ["sign up", "log in", "Contact"];
const navMobileStyles = {
  position: "absolute",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  top: 0,
  left: 0,
  width: "100%",
  height: "500px",
  zIndex: 9998,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: " blur(10px)",
};

interface Props {
  ref: React.RefObject<HTMLElement>;
}

const navItemStyles = {
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
};

function MainNavMobile() {
  // { ref }: Props
  return (
    <Box
      sx={navMobileStyles}
      // ref={ref}
    >
      <Box
        sx={{
          // bgcolor: "red",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {navItems.map((item) => (
          <Link to="#" key={item} style={navItemStyles}>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            > */}
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontSize: "1.5rem",
                "&:hover": {
                  color: "primary.light",
                },
              }}
            >
              {item.toUpperCase()}
            </Typography>
            {/* </Box> */}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default MainNavMobile;
