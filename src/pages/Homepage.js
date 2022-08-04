import React from 'react'
import accounting from '../Images/accounting.png'
import './Homepage.css'
//hi
export const Homepage = () => {
    return (
        <div className='app_header app__wrapper section__padding' id='home'>
        <div className='app_wrapper_info'>
            <h1 className='app_header-h1'>Make your billing easy</h1>
            <p className='p__opensans' style={{margin:'2rem 0'}}>For a doctor what does it cost you to perform this task? 
            <br></br>
            Example where you have to send 375 bills:<br></br>
            The price and time for a doctor to perform this task cost about 15.000 kr.<br/>
            You will save 50% and make more money while our service perform this task for you.
</p>
            <button type='button' className='custom__button'>Explore Pricing</button>
            
            
                <div className='app__header-img'>
                <img src={accounting} alt="header img" />
                </div>
        </div>
        </div>
    )
}
