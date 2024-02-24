import { useAuth0 } from "@auth0/auth0-react";
import PersonIcon from "@mui/icons-material/Person";
import { Button, styled } from "@mui/material";
import Spinner from "./Spinner";
const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "14px",
  height: "3rem",
  padding: "1rem",
}));
function LoginButton() {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <StyledButton
      variant="contained"
      startIcon={
        isLoading ? <Spinner size="small" color="grey" /> : <PersonIcon />
      }
      disabled={isLoading}
      onClick={() => loginWithRedirect()}
    >
      Login
    </StyledButton>
  );
}

export default LoginButton;
