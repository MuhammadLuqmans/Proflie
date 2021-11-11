import { Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import "./Main.css"


function Header() {
    const classes =  useStayles()
    return (
        <>
          <Grid >
              <p className="title">Software Engineer</p>
              </Grid>  
        </>
    )
}

export default Header


const useStayles  = makeStyles(()=>({
    
}))