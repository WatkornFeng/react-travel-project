import { Button, styled } from "@mui/material";

interface Props {
  textBtn?: string;
  nameBtn?: string;
}
function SearchButton({ textBtn, nameBtn }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ minHeight: "75px", width: "100%" }}
    >
      {nameBtn} {textBtn}
    </Button>
  );
}

export default SearchButton;
