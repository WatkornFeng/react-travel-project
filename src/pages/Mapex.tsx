import { useNavigate } from "react-router-dom";
import Map from "../components/Map/Map";
import { Button } from "@mui/material";
import Spinner from "../components/Spinner";
import { withAuthenticationRequired } from "@auth0/auth0-react";
export function Mapex() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        map
        <Map />
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Mapex, {
  onRedirecting: () => <Spinner size="small" color="primary" />,
});
