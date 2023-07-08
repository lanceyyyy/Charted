import logo_colored from "../../assets/hero-colored.png";
import background from "../../assets/hero-background-blurred.jpg";
import logo_shadow from "../../assets/hero-shadow.png";
import backgroundsvg1 from "/backgroundhome1.svg";
import backgroundsvg2 from "/backgroundhome2.svg";

import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ContactUs from "../client/ContactUs";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.green",
          overflow: "hidden",
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          alignItems: {
            md: "center",
          },
        }}
      >
        <Box
          sx={{
            height: {
              xs: "60vh",
              md: "90vh",
            },
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              sx={{
                left: {
                  md: -100,
                  lg: -150,
                },
                bottom: {
                  md: -1000,
                  lg: -900,
                },
                position: "absolute",
                height: {
                  xs: "50",
                },
                width: {
                  xs: 600,
                  md: 700,
                  lg: 900,
                },
              }}
              src={logo_colored}
              alt="Hero Logo Colored"
            />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              sx={{
                left: {
                  md: -100,
                  lg: -180,
                },
                bottom: {
                  md: -1000,
                },
                position: "absolute",
                height: {
                  xs: "50",
                },
                width: {
                  xs: 700,
                  md: 800,
                  lg: 1200,
                },
              }}
              src={logo_shadow}
              alt="Hero Logo Shadow"
            />
          </Box>
        </Box>
        <Box
          sx={{
            zIndex: 99,
            paddingTop: {
              xs: 10,
              md: 0,
            },
            paddingBottom: {
              xs: 10,
              md: 0,
            },
            width: {
              xs: "100%",
              md: "50%",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            sx={{
              lineHeight: 0.5,
              fontSize: {
                xs: 42,
                md: 50,
                lg: 56,
              },
              color: "primary.text",
            }}
          >
            Make Christmas
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 50,
                md: 58,
                lg: 70,
              },
              color: "primary.text",
            }}
          >
            Memorable.
          </Typography>
          <Typography
            sx={{
              lineHeight: 0.8,
              letterSpacing: "0.5px",
              color: "primary.text",
              fontSize: {
                xs: 15,
                md: 18,
                lg: 24,
              },
            }}
          >
            Explore Parol designs and customize your own
          </Typography>
          <Typography
            sx={{
              color: "primary.text",
              fontSize: {
                xs: 15,
                md: 18,
                lg: 24,
              },
            }}
          >
            Explore various available designs.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundsvg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: "center",
          paddingLeft: {
            lg: "4%",
          },
          paddingTop: {
            xs: "15%",
            lg: 0,
          },
        }}
      >
        <Box
          sx={{
            textAlign: {
              xs: "center",
              lg: "left",
            },
            width: {
              xs: "100%",
              lg: "40%",
            },
          }}
        >
          <Typography
            sx={{
              lineHeight: 0.5,
              letterSpacing: "0px",
              fontSize: {
                xs: 50,
                md: 58,
                lg: 70,
              },
              color: "primary.text",
            }}
          >
            Explore various
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 50,
                md: 58,
                lg: 70,
              },
              color: "primary.text",
            }}
          >
            Parol Designs
          </Typography>
          <Typography
            sx={{
              color: "primary.text",
            }}
          >
            Explore Parol designs and customize your own.
          </Typography>
          <Typography
            sx={{
              color: "primary.text",
            }}
          >
            Explore various available designs.
          </Typography>
          <Button
            sx={{
              fontSize: {
                lg: "18px",
              },
              backgroundColor: "primary.red",
              color: "primary.text",
              marginTop: {
                xs: 1,
                lg: 4,
              },
              "&:hover": {
                backgroundColor: "primary.text",
                color: "primary.red",
              },
            }}
          >
            Take me to gallery
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "60%",
            },
          }}
        >
          {/* <Carousel /> */}
        </Box>
      </Box>
      <ContactUs />
    </Box>
  );
}
