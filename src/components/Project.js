import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Card, CardContent, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const projects = [
  {
    id: 1,
    title: 'Giphyengine',
    description: 'Our Giphy search engine website is a vibrant and entertaining platform dedicated to the world of animated GIFs. Designed to provide users with quick and easy access to an extensive library of GIFs, our website offers a delightful and immersive experience for both casual users and GIF enthusiasts',
    githubLink: 'https://github.com/chaudarybilal/Giphyengine',
  },
  {
    id: 2,
    title: 'E-Commerce',
    description: 'Our platform is dedicated to bringing you a world of convenience, choice, and quality right at your fingertips. Discover a wide range of products and services curated to cater to your every need and desire.',
    githubLink: 'https://github.com/chaudarybilal/ecom',
  },
  {
    id: 3,
    title: 'Live-Weather',
    description: 'Stay ahead of the elements with our cutting-edge Live Weather App, your go-to companion for real-time weather information and forecasts. Whether you are planning your day, a weekend getaway or a week-long vacation, our app provides you with up-to-the-minute weather updates and essential meteorological insights to help you make informed decisions.',
    githubLink: 'https://github.com/chaudarybilal/-Live-Weather',
  },
];

const Project = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" component="h1" align="center">
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '16px' }}>
                  {project.description}
                </Typography>
                <Link href={project.githubLink} target="_blank" rel="noopener">
                  GitHub Repository
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
