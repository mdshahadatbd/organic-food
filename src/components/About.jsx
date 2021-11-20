/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import image from '../images/organic-about-1.png'

function About() {
    return (
        <div className="about">
            <div className='about-img'>
                <img src={image} alt="img"/>
            </div>
            <div className='about-text'>
                <h3> Fresh Food, Simply <font>Delicious</font></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus molestias libero aliquam inventore nemo iste 
                    nam consectetur, accusantium pariatur odio qui veniam 
                    nihil accusamus explicabo! Repellendus quae quia dolorem dolorum!</p>
                    <a href='#' className='about-btn'>Read More</a>
            </div>
            
        </div>
    )
}

export default About
