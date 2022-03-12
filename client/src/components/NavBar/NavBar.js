import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './NavBar.css'


const NavBar = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))

    const classes = useStyles()

    const [ userState ] = useState({

    })

    userState.handleSignOut = e => {
      sessionStorage.removeItem('userInfo')
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>
        <Typography variant="h6" className={classes.title}>
          CRYPT-O-Tracker
        </Typography>
          <p className="username">Username</p>
          <Button color="inherit" href="/currency" onClick={userState.handleSignOut}>Sign Out</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/forums">Forums</Button>
          <Button color="inherit" href="/currency">Currencies</Button>
          <Button color="inherit" href="/favorites">My Favs</Button>
          <Button color="inherit" href="/news">News</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar