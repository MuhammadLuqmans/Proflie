import { Divider, Grid } from "@mui/material";
import React from "react";
import "./Experience.css";
import UpWork from "../../../Imgs/upwork.png";
import Fiverr from "../../../Imgs/fiverr.jpg";
import University from "../../../Imgs/Riphah.png";
import Saylani from "../../../Imgs/saylani.png";

function Experience() {
  return (
    <div className="WorkPage">
      <p className="About">WORK EXPERIENCE</p>
      <Grid item xs={12}>
        <Grid item sx={12}>
          <div className="Education">
            <div className="Education-box">
              <b className="dotseducation">.</b>
              <time className="education-date">
                <span>
                  Sep <strong className="text-uper">2020 </strong> -
                  <strong>Present</strong>
                </span>
              </time>
              <div className="display">
                <time className="sec-date">
                  <span>
                    Sep <strong className="text-uper">2020 </strong> -
                    <strong>Present</strong>
                  </span>
                </time>
                <span className="SecDot"> </span>
                <div className="MainMern">
                  <h3 className="titleMern">
                    MERN Stack | React, NodeJS, Javascript Developer
                  </h3>
                  <div className="SecLine">
                    <img
                      src={UpWork}
                      width="35px"
                      height="35px"
                      alt="upwork"
                    />
                    <p className="upworkTitle">Upwork - FreeLance</p>
                  </div>
                  <div className="CardContent">
                    <p>
                      As of Oct 2021 completed 2 big projects with a 100%
                      success rate including creating a animation-based for a
                      Collage from scratch and integrating the Payment system
                      using Stripe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12}>
          <div className="Education">
            <div className="Education-box">
              <b className="dotseducation">.</b>
              <time className="education-date">
                <span>
                  Sep <strong className="text-uper">2020 </strong> -
                  <strong>Present</strong>
                </span>
              </time>
              <div className="display">
                <time className="sec-date">
                  <span>
                    Sep <strong className="text-uper">2020 </strong> -
                    <strong>Present</strong>
                  </span>
                </time>
                <span className="SecDot"> </span>
                <div className="MainMern">
                  <h3 className="titleMern">
                    Web & Mobile Application Developer
                  </h3>
                  <div className="SecLine">
                    <img
                      src={Fiverr}
                      width="35px"
                      height="35px"
                      alt="upwork"
                    />
                    <p className="upworkTitle">Fiverr.com - FreeLance</p>
                  </div>
                  <div className="CardContent">
                    <p>
                      Completed 2+ projects with a 100% success rate including
                      creating a geolocation-based food delivery application
                      from scratch and integrating the Payment system using
                      Stripe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Divider />
        <p className="About" style={{ marginTop: "30px" }}>
          Education
        </p>
        <Grid item sx={12}>
          <div className="Education">
            <div className="Education-box">
              <b className="dotseducation">.</b>
              <time className="education-date">
                <span>
                  Aug <strong className="text-uper">2015 </strong> -
                  <strong> 2019</strong>
                </span>
              </time>
              <div className="display">
                <time className="sec-date">
                  <span>
                    Apr <strong className="text-uper">2015 </strong> -
                    <strong> 2019</strong>
                  </span>
                </time>
                <span className="SecDot"> </span>
                <div className="MainMern">
                  <h3 className="titleMern">BS Software Engineering</h3>
                  <div className="SecLine">
                    <img
                      src={University}
                      width="35px"
                      height="35px"
                      alt="upwork"
                    />
                    <p className="upworkTitle">
                      Riphah International University
                    </p>
                  </div>
                  <div className="CardContent">
                    <p>
                      <strong>Studied: </strong> Programing Basics to Advance,
                      Design of Software and Aplications, Work Flow of
                      development and designs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12}>
          <div className="Education">
            <div className="Education-box">
              <b className="dotseducation">.</b>
              <time className="education-date">
                <span>
                  Aug <strong className="text-uper">2015 </strong> -
                  <strong> 2019</strong>
                </span>
              </time>
              <div className="display">
                <time className="sec-date">
                  <span>
                    Apr <strong className="text-uper">2015 </strong> -
                    <strong> 2019</strong>
                  </span>
                </time>
                <span className="SecDot"> </span>
                <div className="MainMern">
                  <h3 className="titleMern">BS Software Engineering</h3>
                  <div className="SecLine">
                    <img
                      src={Saylani}
                      width="35px"
                      height="35px"
                      alt="upwork"
                    />
                    <p className="upworkTitle">
                      Saylani Mass I.T Training Program
                    </p>
                  </div>
                  <div className="CardContent">
                    <p>
                      <strong>Studied: </strong>  Studied: React, Redux,
                      ReactNative, Javascript, NodeJS, MongoDB, JSON,
                      MaterialUI, Materialize, HTML, CSS, jQuery, Serverless,
                      Git, Github, AWS Lambada
                      Functions, Firebase (Cloud Functions, Authentication, Storage)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;
