// import { Box, Typography, styled } from "@mui/material";
// import PlaceIcon from "@mui/icons-material/Place";

// interface Country {
//   id: string;
//   place_name_en: string;
// }
// interface Props {
//   place: string | null;
//   handleClickPlace: (e: string) => void;
// }
// const ListStyled = styled(Box)({
//   width: "100%",
//   padding: "12px",
//   display: "flex",
//   alignItems: "center",

//   "&:hover": {
//     backgroundColor: "#2A474Cff",
//     color: "white",
//     cursor: "pointer",
//   },
// });

// function PlaceList({ place, handleClickPlace }: Props) {
//   return (
//     <ListStyled onClick={() => handleClickPlace(place!)}>
//       <PlaceIcon sx={{ color: "red" }} />
//       <Typography sx={{ fontSize: "0.8rem" }}>{place}</Typography>
//     </ListStyled>
//   );
// }

// export default PlaceList;
