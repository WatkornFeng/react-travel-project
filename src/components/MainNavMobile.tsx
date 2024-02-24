import {
  Box,
  Stack,
  IconButton,
  styled,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

import Username from "./Username";
import AccountLink from "./AccountLink";

import CloseIcon from "@mui/icons-material/Close";

const NavMobileStyles = styled(Box)(() => ({
  position: "absolute",
  backgroundColor: "rgba(252, 251, 251, 0.95)",
  // backgroundColor: `${theme.palette.primary.light}`,

  top: 0,
  left: 0,
  width: "100%",
  height: "20rem",
  zIndex: 1,

  boxShadow: "3px 26px 32px -9px rgba(0,0,0,0.75)",
}));

interface Props {
  ref: React.RefObject<HTMLElement>;
}

interface IProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainNavMobile({ setMobileOpen }: IProps) {
  const { isAuthenticated, user } = useAuth0();
  return (
    <NavMobileStyles>
      <IconButton onClick={() => setMobileOpen((prevState) => !prevState)}>
        <CloseIcon
          fontSize="large"
          sx={{
            color: "primary.main",
            zIndex: 9999,
          }}
        />
      </IconButton>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          paddingInline: 10,
        }}
      >
        {user && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography color="primary" fontWeight="bold">
                WELCOME
              </Typography>
              <>
                <Avatar alt={"user avatar"} src={user.picture} />
                <Typography color="primary" fontWeight="bold">
                  {user.name}
                </Typography>
              </>
            </Box>
            <AccountLink />
          </>
        )}
        {!user && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography color="primary" fontWeight="bold" variant="h5">
                WELCOME TO
              </Typography>
              <Typography color="primary" fontWeight="bold" variant="h6">
                SMILE TRAVEL
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  color="primary"
                  fontWeight="normal"
                  variant="subtitle1"
                >
                  <strong>Sign in</strong>
                  {"  "}
                  <em>to get special offers </em>
                  <strong style={{ color: "red" }}>!</strong>
                </Typography>
              </Box>
            </Box>
          </>
        )}
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </Stack>
    </NavMobileStyles>
  );
}

export default MainNavMobile;
