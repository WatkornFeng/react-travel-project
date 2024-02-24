import { Box, List, ListItem, Typography } from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
function HotelDetailAmentityList() {
  return (
    <Box
      sx={{
        p: "0.7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <ApartmentIcon />
        <Typography fontWeight="bold">Hotel Services</Typography>
      </Box>
      <List
        sx={{
          width: "100%",
        }}
      >
        {[1, 2, 3].map((value) => (
          <ListItem key={value}>
            <RadioButtonUncheckedIcon
              sx={{
                fontSize: "0.6rem",
                mr: "0.5rem",
              }}
            />
            <Typography fontWeight="normal">item 1</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default HotelDetailAmentityList;
