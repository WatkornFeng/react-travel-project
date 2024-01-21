import { Container, styled } from "@mui/material";

const Layout = styled(Container)({
  maxWidth: "1200px",
});
interface Prop {
  children: React.ReactNode;
}
function MainLayout({ children }: Prop) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default MainLayout;
