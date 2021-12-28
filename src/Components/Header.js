import { Grid } from '@mui/material'
import React from 'react'
import "./Main.css"


function Header() {
    return (
        <>
          <Grid item xs={12} sx={{ position:"fixed",left:0,zIndex:100,background:"#c0e3e7",width:"100%"}}>
              <p className="title">Software Engineer</p>
              </Grid>  
        </>
    )
}

export default Header


