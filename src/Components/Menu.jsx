import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import './Main.css'
import SmallImage from '../Imgs/de.PNG'
import { Grid } from '@mui/material';
import About from './MidSec/LinkEnd/GetIn'

function Menu() {
  return (
      <div className="containerClass">
        <Grid  xs={12} >
    <div className="menu">
      <ul>
       <a href="#"><li><img src={SmallImage} alt="small profile image" className="smallImg" /></li></a>
      <a href="#" ><li><CardGiftcardIcon  sx={{ fontSize : " 50px" , mt:2}} /></li></a>
      <a href="#" ><li><CropOriginalOutlinedIcon  sx={{ fontSize : " 50px",mt:2}} /></li></a>
      <a href="#" ><li><TextsmsOutlinedIcon  sx={{ fontSize : " 50px", mt:2}}  /></li></a>
      <a href="#" ><li><EmailIcon  sx={{ fontSize : " 50px", mt:2}} /></li></a>
      </ul>
    </div>
    </Grid>
    </div>
  );
}

export default Menu;
