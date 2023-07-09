import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

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
          xs: "column",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          width: "20%",
          marginRight: "2%",
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%" }}
          src="/hero-colored.png"
        ></Box>
      </Box>
      <Box sx={{}} component="form">
        <Grid container>
          <Grid>
            <Paper
              elevation={4}
              sx={{
                padding: 3,
              }}
            >
              <Typography variant="h5" textAlign="center">
                Login to CharTed Parol
              </Typography>
              <Divider />
              <Box sx={{ px: 2, pt: 2 }}>
                <TextField
                  label="Username"
                  required
                  name="username"
                  fullWidth
                  sx={{
                    paddingBottom: "10px",
                  }}
                />
                <TextField
                  label="Password"
                  required
                  name="password"
                  fullWidth
                  sx={{
                    paddingBottom: "10px",
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "primary.red",
                    color: "primary.text",
                  }}
                >
                  Login
                </Button>
                <Typography textAlign="right" color="primary.red">
                  Sign Up
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
