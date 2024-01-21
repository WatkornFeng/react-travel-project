import { Box, List, ListItem, Typography, styled } from "@mui/material";

const FooterContainer = styled("footer")(({ theme }) => ({
  width: "100%",
  height: "500px",
  backgroundColor: `${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const FooterSection = styled("section")({
  display: "flex",
  backgroundColor: "grey",
  gap: "15px",
  height: "75%",
});
const ContentList = styled(ListItem)({
  paddingLeft: "0",
});
const Content = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: `${theme.palette.secondary.light}`,
}));

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <Box>
          <Typography variant="subtitle1" color="secondary.dark">
            Help
          </Typography>
          <List>
            <ContentList>
              <Content> Manage cookie settings</Content>
            </ContentList>
            <ContentList>
              <Content>Term of use</Content>
            </ContentList>
          </List>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="secondary.dark">
            Help
          </Typography>
          <List>
            <ContentList>
              <Content> Manage cookie settings</Content>
            </ContentList>
            <ContentList>
              <Content>Term of use</Content>
            </ContentList>
          </List>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="secondary.dark">
            Help
          </Typography>
          <List>
            <ContentList>
              <Content> Manage cookie settings</Content>
            </ContentList>
            <ContentList>
              <Content>Term of use</Content>
            </ContentList>
          </List>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="secondary.dark">
            Help
          </Typography>
          <List>
            <ContentList>
              <Content> Manage cookie settings</Content>
            </ContentList>
            <ContentList>
              <Content>Term of use</Content>
            </ContentList>
          </List>
        </Box>
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;
