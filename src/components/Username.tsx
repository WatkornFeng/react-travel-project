import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useMatchViewPort from "../hooks/useMatchViewPort";

const settings = ["Profile", "Account", "Dashboard"];
function Username() {
  const { user } = useAuth0();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const widthViewPort_700 = useMatchViewPort(700);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user && !widthViewPort_700 && (
        <>
          <Tooltip title="user account">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={"user avatar"} src={user.picture} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-user"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography color="primary" fontWeight="bold">
            {user.name}
          </Typography>
        </>
      )}
    </>
  );
}

export default Username;
