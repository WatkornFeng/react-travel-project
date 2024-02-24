import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Button,
  styled,
  Box,
  Container,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import useMatchViewPort from "../hooks/useMatchViewPort";
import MainNavMobile from "./MainNavMobile";

import LinkLogo from "./LinkLogo";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAddUserMutation } from "../services/apiUserSlice";
import Username from "./Username";
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
  // backgroundColor: "red",
  alignItems: "center",
  // paddingInline: 50,
  gap: 20,
});
// const StyledButton = styled(Button)(({ theme }) => ({
//   border: `2px solid ${theme.palette.primary.main}`,
//   borderRadius: "14px",
//   height: "65px",
//   width: "120px",
//   padding: "10px",
// }));
// const linkStyle = {
//   margin: "16px",
//   textDecoration: "none",
//   // color: "red",
// };
function MainNavBar() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches_700 = useMatchViewPort(700);
  const isModalOpen = mobileOpen && matches_700 ? true : false;

  const [addUser] = useAddUserMutation();

  useEffect(() => {
    if (!user) return;
    const callAPI = async () => {
      try {
        const token = await getAccessTokenSilently();

        addUser({ user, token });
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  }, [user]);

  return (
    <>
      <StyledAppBar position="relative" elevation={2}>
        <MainNavContainer>
          <LinkLogo />

          <MainNavButton>
            {user && <Username />}
            {!isAuthenticated && !matches_700 && <LoginButton />}
            {isAuthenticated && !matches_700 && <LogoutButton />}
            <IconButton
              sx={{
                display: matches_700 ? "inline-flex" : "none",
              }}
              onClick={() => setMobileOpen((prevState) => !prevState)}
            >
              <MenuIcon
                fontSize={"large"}
                sx={{
                  color: "primary.main",
                }}
              />
            </IconButton>
          </MainNavButton>
          {isModalOpen && <MainNavMobile setMobileOpen={setMobileOpen} />}
        </MainNavContainer>
      </StyledAppBar>
    </>
  );
}

export default MainNavBar;
