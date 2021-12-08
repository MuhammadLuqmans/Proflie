import React from "react";
import "./About.css";
import {  Grid } from "@mui/material";

export default function Skills() {

  return (
    <div>
    
        <p className="Skills">Skills</p>
        <p className="subtile">PRIMARY AREA OF EXPERTISE</p>
        <Grid item xs={12} container className="new">
            <Grid sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">React</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">Javascript</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">Node JS</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
        </Grid>

      </Grid>
      <Grid item xs={12} container className="new" sx={{ mt:2}}>
            <Grid sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">Gatsby</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">MongoDB</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">Fairbase</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
        </Grid>
        
      </Grid>
      <Grid item xs={12} container className="new" sx={{ mt:2}}>
            <Grid sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">Next Js</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
        </Grid>
        <Grid item sm={12} md={6} lg={4} className="name">
                <p className="nameTitle">FaunaDB</p>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
                <span className="dotend"></span>
        </Grid>
      </Grid>
      <p className="subtileTwo" sx={{ mt:5 }}> Tools, Technologies, and APIs I've worked with</p>
      <Grid item xs={12} container className="new" sx={{}}>
            <Grid item sm={12} md={6} lg={6} className="name" sx={{mt:2}}>
                <h4 className="languages">Languages</h4>
                <span className="textBox">HTML</span>
                <span className="textBox">CSS</span>
                <span className="textBox">Javascript</span>
        </Grid>
        <Grid item sm={12} md={6} lg={6} className="name" sx={{mt:4}}>
                <h4 className="languages">Databases</h4>
                <span className="textBox">MongoDB</span>
                <span className="textBox">FaunaDB</span>
        </Grid>
      </Grid>
      <Grid item xs={12} container className="new" sx={{mt:4}}>
            <Grid item sm={12} md={12} lg={12} className="name">
                <h4 className="languages">Frameworks, Libraries, and Tools</h4>
                <span className="textBox">React JS</span>
                <span className="textBox">Wordpress</span>
                <br />
                <span className="textBox">Serverless</span>
                <span className="textBox">Git</span>
                <span className="textBox">Github</span>
                <br />
                <span className="textBox">Bootstrap</span>
                <span className="textBox">Material UI</span>
                <br />
                <span className="textBox">Gatsby</span>
                <span className="textBox">Next JS(SSR)</span>
                <br />
                <span className="textBox">Visual Studio Code</span>
                <span className="textBox">GraphQL</span>
        </Grid>
        
      </Grid>
    </div>
  );
}

// const useStyles = makeStyles(() => ({
//   AboutContainer: { 
//     padding: "7%",
//     backgroundColor: "white",
//     border: "1px solid #e1e1e1",
//     lineHeight: "1.875em",
//     visibility: "visible",
//     letterSpacing: ".08em",
//     color: "#000",
//     margin: "0px",
//   },
// }));
