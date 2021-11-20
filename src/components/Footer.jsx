/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
    return (
        <div className='subcribe-container'>
            <h3>Subscribe To My Channel For React Projects</h3>
            <div className='subcribe-input'>
                <input placeholder='example@gmail.com' type='email'/>
                <a className='subcribe-btn' href='#'>Send</a>
            </div>
        </div>
    )
}

export default Footer
