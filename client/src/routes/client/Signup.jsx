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

export default function Signup() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/login-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "85vh",
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
      <Box component="form" sx={{ marginY: "20px" }}>
        <Grid container>
          <Grid>
            <Paper
              elevation={4}
              sx={{
                padding: 3,
              }}
            >
              <Typography variant="h5" textAlign="center">
                Sign-up to CharTed Parol
              </Typography>
              <Divider />
              <Box sx={{ px: 2, pt: 2 }}>
                <TextField
                  label="Email Address"
                  required
                  name="email_address"
                  fullWidth
                  sx={{
                    paddingBottom: "10px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    label="First Name"
                    required
                    name="firstname"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <TextField
                    label="Last Name"
                    required
                    name="lastname"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    label="Username"
                    required
                    name="username"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <TextField
                    label="Phone Number"
                    required
                    name="phonenumber"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    label="Password"
                    required
                    name="password"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <TextField
                    label="Retype Password"
                    required
                    name="retype_password"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    label="Barangay"
                    required
                    name="barangay"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <TextField
                    label="Municipality"
                    required
                    name="municipality"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField
                    label="City"
                    required
                    name="city"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                      marginRight: "5px",
                    }}
                  />
                  <TextField
                    label="Postal Code"
                    required
                    name="postal"
                    fullWidth
                    sx={{
                      paddingBottom: "10px",
                    }}
                  />
                </Box>
                <Button
                  sx={{
                    backgroundColor: "primary.red",
                    color: "primary.text",
                  }}
                >
                  Sign-up
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button>Already has an account?</Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
