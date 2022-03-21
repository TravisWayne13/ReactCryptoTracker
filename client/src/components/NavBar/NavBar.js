import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    let name = event.currentTarget.id

    switch (name) {
      case 'login':
        window.location.href = '/login'
        break
       case 'forum':
         window.location.href = '/forums'
         break
        case 'currency':
          window.location.href = '/currency'
          break
        case 'favorite':
          window.location.href = '/favorites'
          break
        case 'news':
          window.location.href = '/news'
          break
        case 'signout':
          userState.handleSignOut()
          window.location.href = '/currency'
          break
        default:
          break
    }
    console.log(name)
  }

    const classes = useStyles()

    const [ userState ] = useState({

    })

    userState.handleSignOut = e => {
      sessionStorage.removeItem('userInfo')
    }


  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleClick} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" className={classes.title}>
          CRYPTOTracker
        </Typography>
          <Button color="inherit" className="navLink" href="/currency" onClick={userState.handleSignOut}>Sign Out</Button>
          <Button color="inherit" className="navLink" href="/login">Login</Button>
          <Button color="inherit" className="navLink" href="/forums">Forums</Button>
          <Button color="inherit" className="navLink" href="/currency">Currencies</Button>
          <Button color="inherit" className="navLink" href="/favorites">Favorites</Button>
          <Button color="inherit" className="navLink" href="/news">News</Button>
        </Toolbar>
      </AppBar>
    </div>
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem id="login" onClick={handleClose}>Login</MenuItem>
      <MenuItem id="forum" onClick={handleClose}>Forums</MenuItem>
      <MenuItem id="currency" onClick={handleClose}>Currencies</MenuItem>
      <MenuItem id="favorite" onClick={handleClose}>Favorites</MenuItem>
      <MenuItem id="news" onClick={handleClose}>News</MenuItem>
      <MenuItem id="signout" onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  </>
  )
}

export default NavBar