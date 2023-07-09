import { Box, Typography, Paper, Grid } from "@mui/material";
import background from "/background-contact.svg";

export default function ContactUs() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "90vh",
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
          backgroundColor: "#fff",
          width: {
            xs: "80%",
            md: "60%",
          },
          minHeight: "70%",
          borderRadius: "5px",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          padding: 2,
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            width: {
              xs: "100%",
              lg: "60%",
            },
            height: {
              xs: "100%",
              lg: "100%",
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.5732656870907!2d120.91917464624352!3d14.423153793358455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d2e874edcae5%3A0x7bca5960379124a9!2sItaly%20St%2C%20Imus%2C%20Cavite!5e0!3m2!1sen!2sph!4v1688906542191!5m2!1sen!2sph"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5px",
            width: {
              xs: "100%",
              lg: "40%",
            },
            justifyContent: "center",
            paddingX: "20px",
          }}
        >
          <Typography variant="h6">Address:</Typography>
          <Typography pb={3} variant="p" maxWidth="100%">
            -Blk 7, Lot 7, Italy Street, Metroville Subdivision, Alapan I-C,
            Imus City, Cavite
          </Typography>
          <Typography variant="h6">Phone Number:</Typography>
          <Typography pb={3} variant="p" maxWidth="100%">
            -09954736378
          </Typography>
          <Typography variant="h6">E-mail:</Typography>
          <Typography pb={3} variant="p" maxWidth="100%">
            -arandatristan11@gmail.com
          </Typography>
          <Typography variant="h6">Facebook Page:</Typography>
          <Typography variant="p" maxWidth="100%">
            -fb.com/tedandcheparol
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

{
  /* <Box>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.5732656870907!2d120.91917464624352!3d14.423153793358455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d2e874edcae5%3A0x7bca5960379124a9!2sItaly%20St%2C%20Imus%2C%20Cavite!5e0!3m2!1sen!2sph!4v1688906542191!5m2!1sen!2sph"
  width="600"
  height="450"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
</Box> */
}
