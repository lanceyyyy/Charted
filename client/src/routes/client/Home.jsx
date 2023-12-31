import logo_colored from "../../assets/hero-colored.png";
import background from "../../assets/hero-background-blurred.jpg";
import logo_shadow from "../../assets/hero-shadow.png";
import backgroundsvg1 from "/backgroundhome1.svg";
import backgroundsvg2 from "/backgroundhome2.svg";

import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ContactUs from "../client/ContactUs";
import Login from "../client/Login";
import { Link } from "react-router-dom";

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
              src="/hero-colored.png"
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
              src="/hero-shadow.png"
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
          backgroundImage: `url(/backgroundhome1.svg)`,
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
            alignSelf: { lg: "center" },
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
            component={Link}
            to="/products"
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
          <Box
            sx={{
              width: "100%",
              marginTop: {
                xs: "10px",
                lg: 0,
              },
            }}
            component="img"
            src="/gallery-svg.svg"
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(/customize-bg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            alignSelf: "center",

            width: {
              lg: "45%",
              xs: "100%",
            },
            display: "flex",
            flexDirection: "column",
            color: "primary.text",
            alignItems: "center",
            margin: "5rem 0 7rem 0",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              selected
              sx={{
                lineHeight: 0.5,
                fontSize: {
                  xs: 50,
                  md: 58,
                  lg: 70,
                },
              }}
              className="Typography"
            >
              CharTed
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                fontSize: {
                  xs: 50,
                  md: 58,
                  lg: 70,
                },
              }}
            >
              PAROL
            </Typography>
            <Typography
              sx={{
                lineHeight: 0.5,
                fontSize: {
                  xs: 55,
                  md: 65,
                  lg: 80,
                },
              }}
            >
              Workshop
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                lg: "70%",
                xs: "80%",
              },
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  md: 20,
                  lg: 20,
                },
              }}
            >
              With Charted Parol Workshop, you can now customize your Parol to
              your liking! Explore various customizable features and colors of
              your new parol and get it for an affordable price!
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "primary.yellow",
                color: "primary.text",
                "&:hover": {
                  color: "primary.yellow",
                  backgroundColor: "primary.text",
                },
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              COMING SOON!
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              lg: "65%",
              xs: "100%",
            },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            sx={{
              position: {
                lg: "absolute",
              },
              bottom: {
                lg: "-50px",
                sm: 0,
              },
              right: {
                lg: 0,
              },
              width: "100%",
            }}
            src="/customize-svg.svg"
          />
        </Box>
      </Box>
    </Box>
  );
}
