import { Box, Typography, makeStyles } from "@material-ui/core";

import bilal from "../Images/bilal.jpeg";

import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "110vh",
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
    
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "30px", 
      paddingTop: "500px", 
    },
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      marginTop:"600px",
      width: "100%",
      height: "80%",
      padding: "50px", 
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "70vh",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  buttonContainer: {
    display: "flex",

    width: "250px",
    justifyContent: "space-around",
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

function About() {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      className={classes.container}
      style={{ backgroundColor: theme === "light" ? "#F5F5F5" : "#424242" }}
    >
      <Box className={classes.blackBox}>
        <Typography variant="h5">Motivated by my passion for creative work, I embarked on my journey in web development in 2017.</Typography>
        <br />
        <Typography variant="body1">
          Hello, my name is Muhammad Bilal, and I'm thrilled to have the
          opportunity to interview for the front-end developer position. I bring
          a unique blend of skills and experience that make me a well-rounded
          candidate for this role. After completing my graduation in electrical
          engineering in 2018, I initially pursued a career in that field.
          However, my passion for web development and design led me to explore
          freelancing opportunities in 2021. During this time, I began
          self-studying computer science, focusing on languages and frameworks
          such as HTML, CSS, JavaScript, ReactJS, and Material UI. Through
          online courses and hands-on projects, I gained a solid foundation in
          these technologies. In parallel to my learning journey, I secured a
          position as an electrical engineer at Bin Aziz Company. This
          experience provided me with a strong background in problem-solving,
          project management, and attention to detail. Simultaneously, I
          continued to enhance my front-end development skills by working as a
          freelance front-end developer on platforms like Fiverr. I am eager to
          contribute my technical expertise and creativity to your team, and I
          believe that my background and skill set make me a valuable asset for
          the front-end developer position. Thank you for considering my
          application, and I look forward to discussing how I can contribute to
          your company's success.
        </Typography>{" "}
        <br />
        
      </Box>
      
      <Box className={classes.imageBox}>
      
        <img src={bilal} alt="Bilal" className={classes.image} /> 
      
      </Box>
      
    </Box>
  );
}

export default About;
