import { useState } from "react";
import SearchBox from "../SearchBox";
import HikingIcon from "@mui/icons-material/Hiking";
import SearchIcon from "@mui/icons-material/Search";
function SelectActivity() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <SearchBox
        id="SelectActivity-poppe"
        handleClick={handleClick}
        placeHolder="Discover activities for your upcoming weekend..."
        startIcon={<HikingIcon />}
        endIcon={<SearchIcon />}
      />
    </>
  );
}

export default SelectActivity;
