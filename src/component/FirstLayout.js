import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    backgroundColor: '#f8f8f8',
    height: '500px',
  },
  imageGrid: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',

    backgroundSize: 'cover',
    borderRadius: '5px',
  },
  title: {
    fontFamily: 'Poppins',
    letterSpacing: '0.48px',
    fontWeight: '1rem',
    color: '#424244',
  },
  paragraph: {
    width: '368px',
    height: '102px',
    marginTop: '35px',
    marginBottom: '25px',
    fontWeight: 'normal',
    color: '#424244',
  },
  button: {
    backgroundColor: '#0171a1',
    width: '166px',
    height: '48px',
    marginTop: '25px',

    padding: '14px',
    borderRadius: '6px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FirstLayout() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.gridContainer}
        container
        justify='space-evenly'
        alignItems='center'
        direction='row'
        m={1}
        p={1}>
        <Grid
          style={{ marginLeft: '100px' }}
          alignItems='center'
          justify='center'
          item
          p={2}
          xs={4}>
          <img
            className={classes.imageGrid}
            src='https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          />
        </Grid>
        <Grid direction='column' item xs={4}>
          <Typography className={classes.title} variant='h4' gutterBottom>
            Become an instructor
          </Typography>
          <Typography display='flex' className={classes.paragraph} variant='h5'>
            Top instructors from around the world teach millions of students on
            MZtube.We provide the tools and skills to teach what you love
          </Typography>
          <Button
            className={classes.button}
            size='large'
            variant='contained'
            color='primary'>
            Secondary
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

// secondt Way

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   gridContainer: {
//     backgroundColor: 'orange',
//     paddingLeft: '3rem',
//     paddingRight: '3rem',
//     height: '450px',
//   },
//   imageGrid: {
//     borderRadius: '4px',
//     backgroundSize: 'auto',
//     backgroundPosition: 'center',
//     maxWidth: '100%',

//     width: '100%',
//     height: '300px',
//     padding: theme.spacing(2),
//   },

//   paper: {
//     padding: theme.spacing(2),

//     color: theme.palette.text.secondary,
//     height: '300px',
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid
//         className={classes.gridContainer}
//         container
//         direction='row'
//         justify='center'
//         alignItems='center'
//         spacing={3}>

//         <Grid item xs={6}>
//           <img
//             src='https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//             className={classes.imageGrid}></img>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
