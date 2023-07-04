import logo_colored from "../assets/hero-colored.png";
import logo_shadow from "../assets/hero-shadow.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={logo_colored} alt="Hero Logo Colored" />
          </Box>
          <Box>
            <img src={logo_shadow} alt="Hero Logo Shadow" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
}
