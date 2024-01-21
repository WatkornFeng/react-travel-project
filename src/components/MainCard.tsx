import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { RefObject } from "react";

const Card = styled(Paper)({
  // padding: "18px",
  borderRadius: "20px",
  // backgroundColor: "red",
});

interface Props {
  children: React.ReactNode;
  key?: string | number;
  elevation?: number;
  sx?: object;
}
function MainCard({ children, sx, elevation }: Props) {
  return (
    <Card elevation={elevation} sx={sx}>
      {children}
    </Card>
  );
}

export default MainCard;
