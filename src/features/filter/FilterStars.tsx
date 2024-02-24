import { useSelector } from "react-redux";
import { Box, Checkbox, Rating, Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../store";
import { queryStars } from "./filterSlice";

function FilterStars() {
  const stars = useSelector((state: RootState) => state.filter.stars);
  const dispatch = useAppDispatch();

  const handleClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(queryStars(event.target.value));
  };
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Property stars
      </Typography>

      {stars.map((star) => (
        <Box
          key={star.number}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={star.isChecked}
            size="small"
            value={star.number}
            onChange={handleClickCheckbox}
          />
          <Rating
            name="read-only"
            value={star.number}
            readOnly
            sx={{ fontSize: "1rem" }}
          />
        </Box>
      ))}
    </>
  );
}

export default FilterStars;
// const [searchParams, setSearchParams] = useSearchParams();
// const isQueryString = searchParams.get("stars");
// console.log(isQueryString);
// const handleClickCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const checkboxValue = event.target.value;
//   const updatedParams = searchParams.toString().split("&");
//   const isOldParamInURL = updatedParams.includes(checkboxValue);

//   if (isOldParamInURL) {
//     // Remove the parameter if it already exists
//     updatedParams.splice(updatedParams.indexOf(checkboxValue), 1);
//   } else {
//     // Add the parameter if it doesn't exist
//     updatedParams.push(checkboxValue);
//   }

//   setSearchParams(updatedParams.join("&"));
// };
// {checkboxStars.map((star) => (
//   <Box
//     key={star.number}
//     sx={{
//       display: "flex",
//       alignItems: "center",
//     }}
//   >
//     <Checkbox
//       checked={star.isChecked}
//       size="small"
//       value={`stars=${star.number}`}
//       onChange={handleClickCheckbox}
//     />
//     <Rating name="read-only" value={star.number} readOnly size="small" />
//   </Box>
// ))}
