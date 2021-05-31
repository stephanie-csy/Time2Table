import { useState } from "react";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import {
  AppBar,
  Avatar,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";

import HomePage from "./pages/HomePage";
import PageLogin from "./pages/PageLogin";

import "./styles.css";

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  return (
    <div className="App">
      <AppShell />
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FirebaseAuthConsumer>
          <IfFirebaseAuthed>
            <HomePage />
          </IfFirebaseAuthed>
          <IfFirebaseUnAuthed>
            <PageLogin />
          </IfFirebaseUnAuthed>
        </FirebaseAuthConsumer>
      </div>
    </div>
  );
}

function AppShell() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (firebase) => {
    handleClose();
    firebase.auth().signOut();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Time2Table
          </Typography>
        </Toolbar>
      </AppBar>
        
      <IfFirebaseAuthed>
        {({ user, firebase }) => (
          <div>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  {['Home', 'Friends', 'Groups', 'Profile', 'Settings'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>

            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleLogout(firebase)}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </IfFirebaseAuthed>
    </div>
  );
}
