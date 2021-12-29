import { GitHub, LinkedIn, Mail, Phone, Twitter } from '@mui/icons-material'
import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import "../TestMoni/Test.css"
import Skype from '../../../Imgs/skype2.png'

function GetIn() {
    return (
        <>
        <div className="GetInLink">
            <p className="About">Get in touch</p>
            <p className="feelText"><b> Feel free to contact me if you have any query, or for inviting me to work on a project.</b></p>
            <Grid item xs={12} container sx={{ justifyContent:"center" }}>
            <p><Phone className="Icon" /></p>  <Link href="tel:03236757029" sx={{textDecoration:"none",color:"#000"}}><p className="num"><b> +92 (323) 6757-029</b></p></Link>
            </Grid>
            <Grid item xs={12} container sx={{ justifyContent:"center"  }}>
            <p><Mail className="Icon" /></p><Link href="mailto:luqmanaslam0303@gmail.com" sx={{textDecoration:"none",color:"#000"}}><p className="num"><b>luqmanaslam0303@gmail.com</b></p></Link>
            </Grid>
            <Grid item container className="IconsCon">
            <Link href="skype:live:.cid.fa697e0c4f8e6306?chat" ><img src={Skype} alt='Skype' width="25px" className='rowIcons'/></Link>
               <Link href="https://twitter.com/Reactjs10?t=0CjAg0N7rtQ3VnH9f7wA7g&s=09" > <Twitter className="rowIcons" /></Link>
               <Link href="https://www.linkedin.com/in/muhammad-luqman-716952225/" >  <LinkedIn className="rowIcons" /></Link>
               <Link href="https://github.com/MuhammadLuqmans" >  <GitHub className="rowIcons" /></Link>
            </Grid>
        </div>
        <Typography sx={{ textAlign:"center",fontSize:"12px",color:"gray"}}>@2021 created and Love by Muhammad Luqman</Typography>
        <br />
        </>
    )
}

export default GetIn
