import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function Customize() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(/backgroundhome1.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "90vh",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        {" "}
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
              Checkout my Design
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              color="primary.text"
              textAlign="center"
              pb={5}
            >
              Customize your Parol now!
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: {
                lg: "25px",
              },
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              justifyContent: {
                lg: "space-around",
              },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  lg: "20%",
                  xs: "50%",
                },
                marginTop: "10px",
              }}
            >
              <InputLabel
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "primary.yellow",
                  color: "primary.text",
                  fontSize: "20px",
                }}
                id="demo-simple-select-label"
              >
                Parol Color
              </InputLabel>
              <Select
                sx={{
                  width: "100%",
                  backgroundColor: "primary.green3",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={age} */
                label="Age"
                /*  onChange={handleChange} */
              >
                <MenuItem value={10}>Red</MenuItem>
                <MenuItem value={20}>Green</MenuItem>
                <MenuItem value={30}>White</MenuItem>
                <MenuItem value={40}>Blue</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                width: {
                  lg: "20%",
                  xs: "50%",
                },
                marginTop: "10px",
              }}
            >
              <InputLabel
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "primary.yellow",
                  color: "primary.text",
                  fontSize: "20px",
                }}
                id="demo-simple-select-label"
              >
                Size
              </InputLabel>
              <Select
                sx={{
                  width: "100%",
                  backgroundColor: "primary.green3",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={age} */
                label="Age"
                /*  onChange={handleChange} */
              >
                <MenuItem value={10}>Small</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Large</MenuItem>
                <MenuItem value={40}>Extra Large</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                width: {
                  lg: "20%",
                  xs: "50%",
                },
                marginTop: "10px",
              }}
            >
              <InputLabel
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "primary.yellow",
                  color: "primary.text",
                  fontSize: "20px",
                }}
                id="demo-simple-select-label"
              >
                Parol Ring
              </InputLabel>
              <Select
                sx={{
                  width: "100%",
                  backgroundColor: "primary.green3",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={age} */
                label="Age"
                /*  onChange={handleChange} */
              >
                <MenuItem value={10}>With</MenuItem>
                <MenuItem value={20}>Without</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: {
                lg: "25px",
              },
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  lg: "20%",
                  xs: "50%",
                },
                marginTop: "10px",
              }}
            >
              <InputLabel
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "primary.yellow",
                  color: "primary.text",
                  fontSize: "20px",
                }}
                id="demo-simple-select-label"
              >
                Tassel Length
              </InputLabel>
              <Select
                sx={{
                  width: "100%",
                  backgroundColor: "primary.green3",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={age} */
                label="Age"
                /*  onChange={handleChange} */
              >
                <MenuItem value={10}>None</MenuItem>
                <MenuItem value={20}>Short</MenuItem>
                <MenuItem value={30}>Medium</MenuItem>
                <MenuItem value={40}>Long</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                width: {
                  lg: "20%",
                  xs: "50%",
                },
                marginTop: "10px",
              }}
            >
              <InputLabel
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "primary.yellow",
                  color: "primary.text",
                  fontSize: "20px",
                }}
                id="demo-simple-select-label"
              >
                Parol Light
              </InputLabel>
              <Select
                sx={{
                  width: "100%",
                  backgroundColor: "primary.green3",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                /* value={age} */
                label="Age"
                /*  onChange={handleChange} */
              >
                <MenuItem value={10}>With</MenuItem>
                <MenuItem value={20}>Without</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
