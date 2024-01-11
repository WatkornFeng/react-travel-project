import { Container, styled } from "@mui/material";

interface Containertype {
  content: string;
  children: React.ReactNode;
}
const ContainerComp = ({ content, children }: Containertype) => {
  const isNav = content === "nav";
  const ContainerStyled = styled(Container)({
    // backgroundColor: "pink",
    maxWidth: "1200px",
    height: isNav ? "100px" : "400px",
    display: "flex",
    flexDirection: isNav ? "row" : "column",
    justifyContent: isNav ? "space-between" : "center",
    alignItems: isNav ? "center" : "",
  });
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default ContainerComp;
