import React from 'react'
import './header.css'

export default function Header() {
    return (

        <div className="row">
            <div className="column header left" >

                <img className="sideImage" src="/assests/loggo.png"></img>

            </div>
            <div className="column right" >

                <ul className='menus'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Portfolio</a></li>
                    <li><a href="#about">Pricing</a></li>

                    <li class="bttn"><a href="#about">Contact Us </a></li>


                </ul>

            </div>
        </div>
    )
}
