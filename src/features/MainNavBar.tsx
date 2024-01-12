import {
  AppBar,
  Button,
  Typography,
  styled,
  Box,
  Container,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  // backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: ` 0 0 10px 10px ${theme.palette.secondary.light}`,
  height: "100px",
  marginBottom: "100px",
}));

const MainNavContainer = styled(Container)({
  backgroundColor: "pink",
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
function MainNavBar() {
  return (
    <StyledAppBar position="static">
      <MainNavContainer>
        <Typography variant="h5" color="primary">
          TravelerLOGO
        </Typography>
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
  );
}

export default MainNavBar;
