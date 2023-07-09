import { Box } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/login-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          width: "20%",
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%" }}
          src="/hero-colored.png"
        ></Box>
      </Box>
      <Box
        sx={{
          border: "1px solid",
        }}
      >
        Login Page
      </Box>
    </Box>
  );
}
