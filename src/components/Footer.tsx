import React from 'react';
import logo from '../logo.svg';
import { Typography, Container } from '@material-ui/core';

export const Footer: React.FC = () => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='body1'>Music Recognition Software by </Typography>
      <img src={logo} width='200' />
    </Container>
  );
};
