import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import Myprofile from '../Imgs/de.PNG'
import './Card.css'

function Card() {
    return (
        <div className="Container">
            <div className="Card">
               <img src={Myprofile} alt="profile image" className="image"/>
            <div className="cardContent">
                <h2>Muhammad Luqman</h2>
                <p>MERN Stack | React, NodeJS, Javascript Develope</p>
                <div className="Icons">
                    <Facebook />
                    <Twitter />
                    <LinkedIn />
                    <GitHub />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
