import React from "react";
import { makeStyles } from "@mui/styles";
import "./About.css";
import { Divider, Typography } from "@mui/material";
import Skills from "./Skills";

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.AboutContainer}>
        <div>
          <p className="About">About Us</p>
          <Typography sx={{ fontWeight:"bold", fontSize:"20px",fontFamily:"Quicksand, sans-serif",mb:1}}>Hello, I’m Muhammad Luqman!</Typography>
    
          <Typography sx={{ fontFamily:"Quicksand, sans-serif",color:"#000",fontWeight:"450",fontSize:"18px"}}>
 Self-Motivated and Self-Taught Software Engineer, Interested in
          working with great people.</Typography>
          <br />
          <Typography sx={{ fontFamily:"Quicksand, sans-serif",color:"#000",fontWeight:"450",fontSize:"18px"}}>
I have over 8 years of experience in developing Web and Mobile apps
          using the latest state-of-the-art technologies assisted many startups
          in Canada and the UK as the technical lead.</Typography>
          <br />
          <Typography sx={{ fontFamily:"Quicksand, sans-serif",color:"#000",fontWeight:"450",fontSize:"18px"}}>
Feel free to contact me to know more about my skills and experience,
          or for inviting me to work on a project.</Typography>
        </div>
        <br />
        <Divider />
        <Skills />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  AboutContainer: {
    padding: "7%",
    backgroundColor: "white",
    border: "1px solid #e1e1e1",
    lineHeight: "1.875em",
    visibility: "visible",
    letterSpacing: ".08em",
    color: "#000",
    margin: "0px",
  },
}));
