import React, { useState } from "react"
import { useAuth } from "./AuthContext"
import { useHistory } from "react-router-dom"
import NavigationBar from "./components/NavigationBar";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { CssBaseline } from '@material-ui/core'
import "./styles.css";



  
export default function Dashboard() {
  return (
    <>
    <MenuAppBar />
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <NavigationBar />
      </div>
    {/* <h2 className="text-center mb-4">Welcome, {currentUser.email}!</h2> */}
    {/* <div className="w-100 text-center mt-2"></div> */}
      
    </>
    
  )
}

function MenuAppBar() {

    const [setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
  
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    async function handleLogout() {
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }
  
    return (
        <AppBar position="static">
        <CssBaseline />
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, textAlign: "left", position: "relative", left:180 }}>
            Time2Table
            </Typography>

            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>

                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
    );
  }