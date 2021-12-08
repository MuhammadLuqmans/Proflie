import { Facebook, GitHub, LinkedIn, Mail, Phone, Twitter } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import "../TestMoni/Test.css"

function GetIn() {
    return (
        <div className="GetInLink">
            <p className="About">Get in touch</p>
            <p className="feelText"><b> Feel free to contact me if you have any query, or for inviting me to work on a project.</b></p>
            <Grid item xs={12} container sx={{ justifyContent:"center" }}>
            <p><Phone className="Icon" /></p> <p className="num"><b> +92 323 6757 029</b></p>
            </Grid>
            <Grid item xs={12} container sx={{ justifyContent:"center"  }}>
            <p><Mail className="Icon" /></p><p className="num"><b>luqmanaslam0303@gmail.com</b></p>
            </Grid>
            <Grid item container className="IconsCon">
               <a href="#" > <Facebook className="rowIcons" /></a>
               <a href="#" > <Twitter className="rowIcons" /></a>
               <a href="#" >  <GitHub className="rowIcons" /></a>
               <a href="#" >  <LinkedIn className="rowIcons" /></a>

            </Grid>
        </div>
    )
}

export default GetIn
