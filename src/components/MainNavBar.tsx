import {
  AppBar,
  Button,
  Typography,
  styled,
  Box,
  // Link,
  Container,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // backgroundColor: "#fff",
  background: "transparent",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90px",
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
            >
              Login
            </StyledButton>

            <StyledButton variant="outlined" color="primary">
              Sign up
            </StyledButton>
          </MainNavButton>
        </MainNavContainer>
      </StyledAppBar>
    </>
  );
}

export default MainNavBar;
// {/* <StyledAppBar position="static" elevation={24}>
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
    >
      Login
    </StyledButton>

    <StyledButton variant="outlined" color="primary">
      Sign up
    </StyledButton>
  </MainNavButton>
</MainNavContainer>;
// </StyledAppBar> */}
