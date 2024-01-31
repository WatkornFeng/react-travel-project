import {
  AppBar,
  Button,
  Typography,
  styled,
  Box,
  // Link,
  Container,
  Menu,
  IconButton,
  Drawer,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import useMatchViewPort from "../hooks/useMatchViewPort";
import MenuIcon from "@mui/icons-material/Menu";
import MainNavMobile from "./MainNavMobile";
import CloseIcon from "@mui/icons-material/Close";
import useScrollVisibility from "../hooks/useScrollVisibility";
import useClickOutside from "../hooks/useClickOutside ";
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  // background: "transparent",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90px",
  // position: "sticky",
}));

const MainNavContainer = styled(Container)({
  // backgroundColor: "pink",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const MainNavButton = styled(Box)({
  display: "flex",

  alignItems: "center",
  gap: 20,
});
const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "14px",
  height: "65px",
  width: "120px",
  padding: "10px",
}));

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "red",
};

function MainNavBar() {
  const matches_700 = useMatchViewPort(700);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isModalOpen = mobileOpen && matches_700 ? true : false;
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // useClickOutside(dropdownRef, () => {
  //   console.log("clickOutside");
  //   // Callback: Close the dropdown when clicked outside
  //   setMobileOpen(false);
  // });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledAppBar position="relative" elevation={2}>
        <MainNavContainer>
          <Link to="/" style={linkStyle}>
            <Typography variant="h5" color="primary">
              TravelerLOGO
            </Typography>
          </Link>
          <MainNavButton>
            <StyledButton
              variant="contained"
              color="primary"
              startIcon={<PersonIcon />}
              sx={{
                display: matches_700 ? "none" : "",
              }}
            >
              Login
            </StyledButton>

            <StyledButton
              variant="outlined"
              color="primary"
              sx={{
                display: matches_700 ? "none" : "",
              }}
            >
              Sign up
            </StyledButton>
            <IconButton
              sx={{
                display: matches_700 ? "inline-flex" : "none",
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon
                fontSize={"large"}
                sx={{
                  color: "primary.main",
                }}
              />
            </IconButton>
            {isModalOpen && (
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon
                  fontSize="large"
                  sx={{
                    color: "primary.main",
                    zIndex: 9999,
                  }}
                />
              </IconButton>
            )}
          </MainNavButton>
          {isModalOpen && (
            <MainNavMobile
            //  ref={dropdownRef}
            />
          )}
        </MainNavContainer>
      </StyledAppBar>
    </>
  );
}

export default MainNavBar;
