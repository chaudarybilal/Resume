
import React from 'react'

const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Container, Grid, Card, CardContent, Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(4),
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100%',
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: theme.spacing(2),
//   },
// }));

// const Blog = () => {
//   const classes = useStyles();
//   const [selectedPost, setSelectedPost] = useState(null);

//   const blogPosts = [
//     { id: 1, title: 'Blog Post 1', date: 'June 1, 2023', content: 'Sample content for Blog Post 1.' },
//     { id: 2, title: 'Blog Post 2', date: 'June 5, 2023', content: 'Sample content for Blog Post 2.' },
//     { id: 3, title: 'Blog Post 3', date: 'June 10, 2023', content: 'Sample content for Blog Post 3.' },
//   ];

//   const handlePostClick = (postId) => {
//     setSelectedPost(postId);
//   };

//   const handleShowAllPosts = () => {
//      setSelectedPost(null);
//   };

//   const renderedPosts = selectedPost ? blogPosts.filter((post) => post.id === selectedPost) : blogPosts.slice(0, 2);

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h2" component="h1" align="center">
//         Blog
//       </Typography>
//       <div className={classes.buttonContainer}>
//         <Button variant="contained" color="primary" onClick={handleShowAllPosts}>
//           All
//         </Button>
//         {blogPosts.slice(0, 2).map((post) => (
//           <Button key={post.id} variant="contained" color="primary" onClick={() => handlePostClick(post.id)}>
//             {post.title}
//           </Button>
//         ))}
//       </div>
//       <Grid container spacing={3}>
//         {renderedPosts.map((post) => (
//           <Grid item xs={12} sm={6} md={4} key={post.id}>
//             <Card className={classes.card}>
//               <CardContent className={classes.cardContent}>
//                 <Typography variant="h5" component="h2">
//                   {post.title}
//                 </Typography>
//                 <Typography variant="subtitle2">{post.date}</Typography>
//                 <Typography variant="body1">{post.content}</Typography>
//                 {!selectedPost && (
//                   <Button variant="outlined" color="primary" fullWidth onClick={() => handlePostClick(post.id)}>
//                     Read More
//                   </Button>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Blog;
