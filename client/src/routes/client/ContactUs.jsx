import { Box, Typography } from "@mui/material";
import background from "/background-contact.svg";

export default function ContactUs() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",

        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "primary.text",
          fontSize: "45px",
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          backgroundColor: "primary.green",
          width: {
            xs: "80%",
            md: "60%",
          },
          minHeight: "70%",
          borderRadius: "50px",
        }}
      ></Box>
    </Box>
  );
}
