import { Grid } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import { makeStyles } from "@mui/styles";
import Card from "../Components/Card";
import About from "../Components/MidSec/About";
import Menu from "../Components/Menu";
import '../Components/Main.css'
import Experience from "../Components/MidSec/Experience/Experience";
import TestiMonials from "../Components/MidSec/TestMoni/TestiMonials";
import GetIn from "../Components/MidSec/LinkEnd/GetIn";
// import Skills from "../Components/MidSec/Skills";

const Profile = () => {
  const classes = useStayles();

  return (
    <div>
      <Grid item xs={12} >
        <Header  />
        <Grid item container className={classes.mainContainer} className="aboutsHid">
          <Grid xs={12} md={3.5} lg={3.5} className="aboutsHid">
            <Card />
          </Grid>
          <Grid item xs={12} md={7.5} lg={7.5} className="aboutsHid">
            <About />
          <Experience />
          <TestiMonials />
          <GetIn />
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
          <About />
          <Experience />
          <TestiMonials />
          <GetIn />
              </Grid>
             </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

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
