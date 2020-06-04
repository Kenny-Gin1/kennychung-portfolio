import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItems from './listitems';
import SocialMedia from './socialmediaicons';
import HeaderImage from './headerimage';
import Slide from '@material-ui/core/Slide';



const drawerWidth = '18vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b33939', 
    marginLeft: theme.spacing(5)
  },
  // necessary for content to be below app bar
  //toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));



export default function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        {...props}
      >
        <HeaderImage />
        <ListItems />
        <SocialMedia />
      </Drawer>
    </div>
  );
}
