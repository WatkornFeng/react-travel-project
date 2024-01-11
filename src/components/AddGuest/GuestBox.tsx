import { Box, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

function GuestBox({
  id,
  handleClick,
  placeHolder,
}: {
  id?: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  placeHolder?: string;
}) {
  return (
    <Box
      aria-describedby={id}
      onClick={handleClick}
      sx={{
        border: "1px solid #d4cccc",
        borderRadius: "3px",
        width: "500px",
        display: "flex",
        color: "grey",
        alignItems: "center",
        padding: "8px",
        "&:hover": {
          cursor: "pointer",
          border: "1px solid #3b3838",
        },
      }}
    >
      <PeopleIcon
        sx={{
          marginRight: "6px",
        }}
      />
      <div
        style={{
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.4)",
            padding: "11px",
            fontSize: "18px",
          }}
        >
          {placeHolder}
        </Typography>
      </div>
    </Box>
  );
}

export default GuestBox;
