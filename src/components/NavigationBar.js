import React, { useState } from "react";
import {Switch, Route, Link, BrowserRouter } from "react-router-dom";

import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { 
  FriendsPage, 
  GroupsPage, 
  ProfilePage, 
  SettingsPage, 
  AddFriendsPage, 
  CreateGroupPage,
  DummyProfile
} from "../pages";

import HomePage from "../pages/HomePage"

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function NavigationBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Home", "Friends", "Groups", "Profile", "Settings"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text + "Page"}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        
        <BrowserRouter>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true 
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>

          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route path="/HomePage" exact component={() => <HomePage />} />
              <Route path="/FriendsPage" exact component={() => <FriendsPage />} />
              <Route path="/GroupsPage" exact component={() => <GroupsPage />} />
              <Route path="/ProfilePage" exact component={() => <ProfilePage />} />
              <Route path="/SettingsPage" exact component={() => <SettingsPage />} />
              <Route path="/AddFriendsPage" exact component={() => <AddFriendsPage />} />
              <Route path="/CreateGroupPage" exact component={() => <CreateGroupPage />} />
              <Route path="/DummyProfile" exact component={() => <DummyProfile />} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>

  );
}


export default NavigationBar;
