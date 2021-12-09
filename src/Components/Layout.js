import { Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import About from "./MidSec/About";
import './Main.css'
import Experience from "./MidSec/Experience/Experience";
import TestiMonials from "./MidSec/TestMoni/TestiMonials";
import GetIn from "./MidSec/LinkEnd/GetIn";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import EmailIcon from '@mui/icons-material/Email';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SmallImage from '../Imgs/de.PNG'
import {  Dashboard, WorkTwoTone } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Menu() {
  return (
      <div className="containerClass">
        <Grid item xs={12} >
    <div className="menu" >
      <ul>
      <a href="#about"><li><Tooltip title="About"><img src={SmallImage} alt="small profile image" className="smallImg" /></Tooltip></li></a>
      <a href="#about" ><li><Tooltip title="About"><CardGiftcardIcon  sx={{ fontSize : "45px" , mt:2,color:"#000" }} /></Tooltip></li></a>
      <a href="#Experience" ><li><Tooltip title="Experience"><SchoolOutlinedIcon  sx={{m:0, fontSize : "45px",height:"50px" ,mt:2,color:"#000"}} /></Tooltip></li></a>
      <a href="#TestiM" ><li><Tooltip title="Testimonials"><TextsmsOutlinedIcon  sx={{ fontSize : "45px", mt:2,color:"#000"}}  /></Tooltip></li></a>
      <a href="#GetIn" ><li><Tooltip title="GetIn Link"><EmailOutlinedIcon  sx={{ fontSize :"45px", mt:2,color:"#000"}} /></Tooltip></li></a>
      </ul>
    </div>
    </Grid>
    </div>
  );
}




const Layout = () => {
  const classes = useStayles();

  return (
    <div>
      <Grid item xs={12} >
        <Header  />
        <Grid item container className={classes.mainContainer} className="aboutsHid">
          <Grid xs={12} md={3.5} lg={3.5} className="aboutsHid">
            <Card />
          </Grid>
          <Grid  item xs={12} md={7.5} lg={7.5} className="aboutsHid">
            <div id="about">
             <About  />
            </div>
            <div id="Experience">
          <Experience />
          </div>
          <div id="TestiM">
          <TestiMonials />
          </div>
          <div id="GetIn">
          <GetIn />
          </div>
          </Grid>
          <Grid item xs={1} className="aboutsHid">
            <Menu />
          </Grid>
         
        </Grid>
        <Grid item sx={{ p: 0, m:0 }}>
          <Grid className="aboutShow">
          <Card />
              </Grid>
          <Grid item xs={12} className="aboutShow">
          <About id="about" />
          <Experience />
          <TestiMonials />
          <GetIn />
              </Grid>
             </Grid>
      </Grid>
    </div>
  );
};

export default Layout;

const useStayles = makeStyles(() => ({
  mainContainer: {
    // border: "2px dotted orange",
    maxWidth: "1200px",
    margin: "auto",
    padding:"15px"
  },
  secContainer: {
    border: "2px dotted black",
    // display: "flex",
  },
  midContainer: {
   
  },
  CardContainer: {
    width: "28%",
    background: "orange",
  },
  menuContainer: {
    border: "2px solid brown",
    widht: "6%",
  },

}));
