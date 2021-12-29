import { Grid } from '@mui/material'
import React from 'react'
import "./Main.css"


function Header() {
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "3px 20px";
    document.getElementById("navbg").style.background ="#b2dbfb";
  } else {
    document.getElementById("navbar").style.padding = "10px 20px";
    document.getElementById("navbg").style.background = "#fff";
  }
}
    return (
        <>
          <Grid item xs={12} id="navbg" sx={{ position:"fixed",left:0,zIndex:100,width:"100%",}}>
              <p className="title" id='navbar'>Software Engineer</p>
              </Grid>  
        </>
    )
}

export default Header


