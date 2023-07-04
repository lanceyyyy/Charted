import logo_colored from "../assets/hero-colored.png";
import logo_shadow from "../assets/hero-shadow.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "mui-image";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.green",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "absolute" }}>
            <img src={logo_colored} alt="Hero Logo Colored" />
          </Box>
          <Box sx={{ display: "absolute" }}>
            <img src={logo_shadow} alt="Hero Logo Shadow" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Test</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
