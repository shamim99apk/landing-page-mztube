import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: 'rgba(1, 113, 161, 0.28)',
    padding: theme.spacing(8, 0, 6),
    // flexGrow: 1,

    height: 221,
    fontFamily: 'Poppins',
    font: '17px',
    fontSize: '4rem',

    color: '#424244',
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth='md'>
        <Typography
          component='h1'
          variant='h4'
          align='center'
          color='textPrimary'
          gutterBottom>
          Train Your Company Member
        </Typography>
        <Typography
          component='h1'
          variant='h6'
          align='center'
          color='textPrimary'
          gutterBottom>
          Find subjects you're passionate about our online course categories.
          Start learning with top courses Built with Industry Experts
        </Typography>
      </Container>
    </div>
  );
}
