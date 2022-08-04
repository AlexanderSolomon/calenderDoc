import React from 'react'
import {AppBar, IconButton, Toolbar, Stack} from "@mui/material"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <AppBar position='static' >
        <Toolbar className='Tool_bar' >
            <Link to='/' size='large' edge='start' aria-label='logo'>
              <HomeSharpIcon edge='start'/> 
            </Link>
              <Link to='/'></Link>
              <Stack direction='row' spacing={7} >
                <Link className='p_fontdiff' to="/">Home</Link>
                <Link className='p_fontdiff' to="/signup">Sign up</Link>
                <Link className='p_fontdiff' to="/kalender">Kalender</Link>
                <Link className='p_fontdiff' to="/changeDate">Change date</Link>
                <Link to="*"></Link>
              </Stack> 
            
        </Toolbar>
    </AppBar>
  )
}


export default Navbar