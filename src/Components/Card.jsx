import { Facebook, GitHub, LinkedIn, Twitter,Link } from '@mui/icons-material'
import React from 'react'
import Myprofile from '../Imgs/de.PNG'
import './Card.css'



function Card() {

    return (

        <div className="Container">
        
            <div className="Card">
               <img src={Myprofile} alt="profile" className="image"/>
            <div className="cardContent">
                <h2>Muhammad Luqman</h2>
                <p>MERN Stack | React, NodeJS, Javascript Develope</p>
                <div className="Icons">
                <a href="https://www.facebook.com/luqman.aslam.9693" style={{ textDecoration:"none",color:"#000"}}> <Facebook /> </a>
                <a href="https://twitter.com/Reactjs10?t=0CjAg0N7rtQ3VnH9f7wA7g&s=09" style={{ textDecoration:"none",color:"#000"}}>  <Twitter /> </a>
                <a href="https://www.fiverr.com/share/Ej8Ary" style={{ textDecoration:"none",color:"#000"}}>  <LinkedIn /> </a>
                <a href="https://github.com/MuhammadLuqmans" style={{ textDecoration:"none",color:"#000"}}>   <GitHub /> </a>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Card
