import React from 'react'
import {AppBar, IconButton, Toolbar, Stack} from "@mui/material"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar className='Tool_bar'>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <HomeSharpIcon edge='start'/> 
            </IconButton>
              <Stack direction='row' spacing={2} >
                <Link className='p_fontdiff' to="/">Home</Link>
                <Link className='p_fontdiff' to="/kalender">Kalender</Link>
                <Link className='p_fontdiff' to="/signin">Sign in</Link>
                <Link className='p_fontdiff' to="/signup">Sign up</Link>
                <Link to="*"></Link>
              </Stack> 
            
        </Toolbar>
    </AppBar>
  )
}


export default Navbar