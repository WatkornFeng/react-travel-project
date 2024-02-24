import { Tab, Tabs } from "@mui/material";

import useScrollVisibility from "../../hooks/useScrollVisibility";
import useMatchViewPort from "../../hooks/useMatchViewPort";
const tabData = [
  { value: "overview", label: "Overview" },
  { value: "rooms", label: "Rooms" },
  { value: "amenities", label: "Amenities" },
  { value: "reviews", label: "Reviews" },
];
function HotelDetailTab({
  elementId,
  setElementId,
}: {
  elementId: string;
  setElementId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const isVisible = useScrollVisibility(0);
  const widthViewPort_650 = useMatchViewPort(650);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    const element = document.getElementById(newValue)!;
    element.scrollIntoView();
    setElementId(newValue);
  };

  return (
    <Tabs
      value={elementId}
      onChange={handleChange}
      indicatorColor="primary"
      aria-label="Hotel Details Tabs"
      // scrollButtons={true}
      TabIndicatorProps={{
        sx: {
          bgcolor: "primary",
          height: "0.3rem",
        },
      }}
      sx={{
        position: isVisible ? "sticky" : "",
        top: isVisible ? 0 : "-50px",
        bgcolor: "white",
        height: "2.5rem",
        zIndex: 9999,
        pt: "0.2rem",
        transition: isVisible ? "top 0.3s" : "",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
      }}
    >
      {tabData.map(({ value, label }) => (
        <Tab
          key={value}
          value={value}
          label={label}
          sx={{
            fontWeight: "bold",
            fontSize: widthViewPort_650 ? "0.7rem" : "1rem",
          }}
        />
      ))}
    </Tabs>
  );
}

export default HotelDetailTab;
{
  /* <Tab value="overview" label="Overview" href="#overview" />
<Tab value="rooms" label="Rooms" href="#rooms" />
<Tab value="amenities" label="Amenities" href="#amenities" />
<Tab value="reviews" label="Reviews" href="#reviews" /> */
}
