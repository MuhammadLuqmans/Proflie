import React from "react";
import "./About.css";
import { Grid, Typography } from "@mui/material";

export default function Skills() {
  return (
    <div>
      <p className="Skills">Skills</p>
      <Typography
        sx={{
          fontSize: "1.35em",
          fontFamily: "Quicksand, sans-serif",
          textTransform: " uppercase",
          fontWeight: "550",
          color: "#000",
          lineHeight:"48px"
        }}
      >
        PRIMARY AREA OF EXPERTISE
      </Typography>
      
      <Grid item xs={12} container className="new" sx={{mt:1}}>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:0, md:1,lg:0}}}>
          <p className="nameTitle">React</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:0, md:1,lg:0}}}>
          <p className="nameTitle">Javascript</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:1, md:1,lg:0}}}>
          <p className="nameTitle">Node JS</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
        </Grid>
      </Grid>
      <Grid item xs={12} container className="new" sx={{mt:{xs:0,sm:0, md:2,lg:2}}}>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:0, md:1,lg:0}}}>
          <p className="nameTitle">Gatsby</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:0, md:1,lg:0}}}>
          <p className="nameTitle">MongoDB</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:1, md:1,lg:0}}}>
          <p className="nameTitle">Fairbase</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
        </Grid>
      </Grid>
      <Grid item xs={12} container className="new" sx={{mt:{xs:0,sm:0, md:2,lg:2}}}>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:1, md:1,lg:0}}}>
          <p className="nameTitle">Next Js</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="name" sx={{mt:{xs:1.5,sm:1, md:1,lg:0}}}>
          <p className="nameTitle">FaunaDB</p>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
          <span className="dotend"></span>
        </Grid>
      </Grid>
      <Typography
        sx={{
                mt:3,
          fontSize: "1.35em",
          fontFamily: "Quicksand, sans-serif",
          textTransform: " uppercase",
          fontWeight: "550",
          color: "#000",
          lineHeight:"48px"
        }}
      >
         Tools, Technologies, and APIs I've worked with
      </Typography>
      <Grid item xs={12} container className="new">
        <Grid item xs={12} sm={6} md={6} lg={6} className="name" sx={{ mt: 2 }}>
          <h4 className="languages">Languages</h4>
          <span className="textBox">HTML</span>
          <span className="textBox">CSS</span>
          <span className="textBox">Javascript</span>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          lg={6}
          className="name"
          sx={{ mt: { xs: 4, sm: 4, md: 2, lg: 2 } }}
        >
          <h4 className="languages">Databases</h4>
          <span className="textBox">MongoDB</span>
          <span className="textBox">FaunaDB</span>
        </Grid>
      </Grid>
      <Grid item xs={12} container className="new" sx={{ mt: 4 }}>
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
