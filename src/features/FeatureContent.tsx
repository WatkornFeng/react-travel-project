import { Box, Grow, Paper, Stack, Typography, styled } from "@mui/material";

const FeaturesPaper = styled(Paper)({
  padding: "18px",
  maxHeight: "120px",
  maxWidth: "320px",
  borderRadius: "20px",
});
const Keyword = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "bold",
  color: `${theme.palette.primary.dark}`,
}));
const Content = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "normal",
  color: `${theme.palette.secondary.dark}`,
}));
function FeatureContent({
  keyword,
  content,
  icon,
}: {
  keyword: string;
  content: string;
  icon: JSX.Element;
}) {
  return (
    <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={2000}>
      <FeaturesPaper elevation={10}>
        <Stack direction="row" spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "primary.dark",
            }}
          >
            {icon}
          </Box>
          <Stack direction="column" spacing={1}>
            <Keyword>{keyword}</Keyword>
            <Content>{content}</Content>
          </Stack>
        </Stack>
      </FeaturesPaper>
    </Grow>
  );
}

export default FeatureContent;
