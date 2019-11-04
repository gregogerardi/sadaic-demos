import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UIShell } from './components/UIShell';
import { Home } from './components/Home';
import { Artists } from './components/Artists';
import { Channels } from './components/Channels';
import { Genres } from './components/Genres';
import { Songs } from './components/Songs';
import { Recognitions } from './components/Recognitions';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import classes from '*.module.css';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        <UIShell />
        <div style={{ padding: '2rem', paddingTop: '4rem' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/artists' component={Artists} />
            <Route path='/channels' component={Channels} />
            <Route path='/genres' component={Genres} />
            <Route path='/songs' component={Songs} />
            <Route path='/recognitions' component={Recognitions} />
            <Redirect to='/' />
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
};
