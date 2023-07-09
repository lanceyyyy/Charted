import { Box, Button, Typography } from "@mui/material";

export default function Customize() {
  return (
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
            CUSTOMIZE MY PAROL
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
  );
}
