import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import bilal from "../Images/bilal.jpeg";
import { Container } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "80vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  blackBox: {
    marginTop: "70px",
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "170px",
    paddingTop: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "20px", // Adjust the padding value as per your needs
      paddingTop: "20px", // Adjust the padding value as per your needs
    },
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "80%",
      padding: "50px", // Adjust the padding value as per your needs
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "60vh",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  buttonContainer: {
    display: "flex",
   
    width:"250px",
    justifyContent:"space-around"

  },
  Icon: {
    display: "flex",
    justifyContent: "space-between",
  
    color: "#8bb2c3",
    [theme.breakpoints.down("sm")]: {
      
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "20px", 
      paddingTop: "20px",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  return (
    <Box className={classes.container} style={{ backgroundColor: theme === 'light' ? '#F5F5F5' : '#424242' }}>
      <Box className={classes.blackBox}>
        <Typography variant="h5">Hi, my name is Bilal</Typography>
        <br />
        <Typography variant="h4">I'm a React Front End Developer</Typography>{" "}
        <br />
        <Typography variant="body1">
          I'm fluent in English, Urdu, and JavaScript
        </Typography>{" "}
        <br />
        <Container  className={classes.Icon}>
          <GitHubIcon style={{ fontSize: 50 }} />{" "}
          <LinkedInIcon style={{ fontSize: 50 }} />{" "}
          <TwitterIcon style={{ fontSize: 50 }} />
        </Container>
        <br />
        <Box className={classes.buttonContainer}>
          <Button variant="contained" style={{backgroundColor:"#8bb2c3"}} >My work</Button>
          <Button variant="contained">Let's Talk</Button>
        </Box>
      </Box>
      <Box className={classes.imageBox}>
        <img src={bilal} alt="Bilal" className={classes.image} />
      </Box>
    </Box>
  );
}

export default Home;
