import React from 'react'
import accounting from '../Images/accounting.png'
import './Homepage.css'

export const Homepage = () => {
    return (
        <div className='app_header app__wrapper section__padding' id='home'>
        <div className='app_wrapper_info'>
            <h1 className='app_header-h1'>Make your billing easy</h1>
            <p className='p__opensans' style={{margin:'2rem 0'}}>this is a section where we talk about someting specific</p>
            <button type='button' className='custom__button'>Explore Pricing</button>
            
            
                <div className='app__header-img'>
                <img src={accounting} alt="header img" />
                </div>
        </div>
        </div>
    )
}
