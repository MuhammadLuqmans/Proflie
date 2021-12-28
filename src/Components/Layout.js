import { Grid, Link, List } from "@mui/material";
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
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SmallImage from '../Imgs/de.PNG'
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Menu() {
  return (
      <div className="containerClass">
        <Grid item xs={12}>
    <div className="menu">
      <List>
      <Link href="#about"><ListItem><Tooltip title="About"><img src={SmallImage} alt="small profile image" className="smallImg" /></Tooltip></ListItem></Link>
      <Link href="#about" ><ListItem><Tooltip title="About"><CardGiftcardIcon  sx={{ fontSize : "45px" , mt:0.7,color:"#000" }} /></Tooltip></ListItem></Link>
      <Link href="#Experience" ><ListItem><Tooltip title="Experience"><SchoolOutlinedIcon  sx={{ fontSize : "45px",height:"50px" ,mt:0.7,color:"#000"}} /></Tooltip></ListItem></Link>
      <Link href="#TestiM" ><ListItem><Tooltip title="Testimonials"><TextsmsOutlinedIcon  sx={{ fontSize : "45px", mt:0.7,color:"#000"}}  /></Tooltip></ListItem></Link>
      <Link href="#GetIn" ><ListItem><Tooltip title="GetIn Link"><EmailOutlinedIcon  sx={{ fontSize :"45px", mt:0.7,color:"#000"}} /></Tooltip></ListItem></Link>
      </List>
    </div>
    </Grid>
    </div>
  );
}




const Layout = () => {
  const classes = useStayles();

  return (
    <div>
      <Grid item xs={12}>
        <Header  />
        <Grid item container className={classes.mainContainer} className="aboutsHid" sx={{px:3,justifyContent:"space-between"}}>
          <Grid item xs={12} md={3.5} lg={3.5} className="aboutsHid" sx={{ mt:12}}>
            <Card />
          </Grid>
          <Grid  item xs={12} md={7.5} lg={7.5} className="aboutsHid" sx={{ mt:12}}>
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
          <Grid item xs={0.8} className="aboutsHid" sx={{ mt:12}}>
            <div style={{ position:"fixed",marginLeft:"-15px",marginTop:"-15px"}}>
            <Menu />
            </div>
          </Grid>
         
        </Grid>
        <Grid item sx={{ p: 0, m:0,mt:8}}>
          <Grid item className="aboutShow">
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
    maxWidth: "1200px",
    margin: "auto",
    padding:"15px",
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
