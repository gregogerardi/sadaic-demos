import React from 'react';
import logo from '../logo.svg';
import { LinearProgress } from '@material-ui/core';

export const Loading: React.FC = () => {
  return (
    <div>
      <img src={logo} width='90%' height='50%' />
      <LinearProgress />
    </div>
  );
};
