import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Tooltip ,Link, Typography } from '@mui/material'
import React from 'react'
import Myprofile from '../Imgs/de.PNG'
import Skype from '../Imgs/skype2.png'
import './Card.css'



function Card() {

    return (

        <div className="Container">
        
            <div className="Card">
               <img src={Myprofile} alt="profile" className="image"/>
            <div className="cardContent">
                <h2>Muhammad Luqman</h2>
                <Typography sx={{mb:1}}>MERN Stack | React, NodeJS, Javascript Developer</Typography>
                <div className="Icons">
                <Link href="skype:live:.cid.fa697e0c4f8e6306?chat" style={{ textDecoration:"none",color:"#000"}}><img src={Skype} alt='Skype' width="25px" /></Link>
                 <Link href="https://twitter.com/Reactjs10?t=0CjAg0N7rtQ3VnH9f7wA7g&s=09" style={{ textDecoration:"none",color:"#000"}}><Twitter /></Link>
                <Link href="https://www.linkedin.com/in/muhammad-luqman-716952225" style={{ textDecoration:"none",color:"#000"}}><LinkedIn /></Link>
               <Link href="https://github.com/MuhammadLuqmans" style={{ textDecoration:"none",color:"#000"}}><GitHub /></Link>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Card
