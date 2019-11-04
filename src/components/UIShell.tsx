import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, List, ListItem, ListItemText, Divider, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../logo.svg';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const UIShell = (props: { history: any }) => {
  const { history } = props;
  const classes = useStyles();
  const [openState, setOpenState] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpenState(open);
  };

  const sideList = () => (
    <div className={classes.list} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          onClick={() => {
            history.push(`/home`);
            toggleDrawer(false);
          }}
          button
          key={'home'}
        >
          <div>
            <img src={logo} width='90%' height='50%' />
          </div>
        </ListItem>
        <Divider />
        {['artists', 'genres', 'songs', 'channels', 'recognitions'].map(text => (
          <ListItem
            onClick={() => {
              history.push(`/${text}`);
              toggleDrawer(false);
            }}
            button
            key={text}
          >
            <ListItemText primary={text.toUpperCase()} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Button
            color='inherit'
            onClick={() => {
              history.push('/');
            }}
            className={classes.title}
          >
            <Typography variant='h6'>ADSMETRIX</Typography>
          </Button>
          <Button color='inherit'>
            <Typography variant='h6' className={classes.title}>
              Login
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>{' '}
      <Drawer open={openState} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
};

const shellWithRouter = withRouter(UIShell);

export { shellWithRouter as UIShell };
