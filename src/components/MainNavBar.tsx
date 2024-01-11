import { AppBar, Button, Typography, styled, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import ContainerComp from "./ContainerComp";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // backgroundColor: "#fff",

  backgroundColor: "transparent",
  boxShadow: ` 0 0 10px 10px ${theme.palette.secondary.light}`,
  height: "100px",
  marginBottom: "80px",
}));

const NavButton = styled(Box)({
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

function MainNavBar() {
  return (
    <StyledAppBar position="static">
      <ContainerComp content="nav">
        <Typography variant="h5" color="primary">
          TravelerLOGO
        </Typography>
        <NavButton>
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
        </NavButton>
      </ContainerComp>
    </StyledAppBar>
  );
}

export default MainNavBar;
