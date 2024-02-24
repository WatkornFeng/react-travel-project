import { Box, styled } from "@mui/material";

interface Prop {
  // key?: number | string;
  children: React.ReactNode;
  src: string | undefined;
}

function BackgroundPicture({ src, children }: Prop) {
  const containerStyles = {
    width: "100%",
    maxHeight: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundSize: "contain",

    backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    marginBottom: "100px",
    ...(src
      ? {
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${src})`,
        }
      : { backgroundColor: "primary.main" }),
    // ...(src ? {} : { backgroundColor: "primary.main" }),
  };

  return <Box sx={containerStyles}>{children}</Box>;
}

export default BackgroundPicture;
