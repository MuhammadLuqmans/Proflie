import { Divider, Grid } from "@mui/material";
import React from "react";
import "./Test.css";
import FirstClient from "../../../Imgs/client.jpg";
import FirstClient2 from "../../../Imgs/client4.jpg";
import FirstClient3 from "../../../Imgs/client5.jpg";

function TestiMonials() {
  return (
    <div className="TestiMonialpage">
      <p className="About">TESTIMONIALS</p>
      <Grid xs={12} container sx={{ justifyContent: "space-around" }}>
        <Grid xs={1} className="imgGrid">
          <img src={FirstClient} className="ReviewImage" alt="Review image" />
        </Grid>
        <Grid xs={9} className="fullcont">
        <img src={FirstClient} className="ReviewImage newlin" alt="Review image"  />
          <h4 className="name">Marcokoe</h4>
          <p className="Reviewsub">2021</p>
          <p className="Reviews">
            "Seller was very easy to communicate with, delivered a day before
            expectation and did a really good job on a request that was slightly
            outside the realm of his current jobs. Thank you very much"
          </p>
          <h4>-Fiver Client</h4>
        </Grid>
      </Grid>
      <Divider />
 {/* Review No # 2 */}
      <Grid xs={12} container sx={{ justifyContent: "space-around", mt: 3 }}>
        <Grid xs={1}  className="imgGrid" >
          <img src={FirstClient3} className="ReviewImage" alt="Review image" />
        </Grid>
        <Grid xs={9} className="fullcont" >
        <img src={FirstClient3} className="ReviewImage newlin" alt="Review image" />
          <h4 className="name">Usain Bolt</h4>
          <p className="Reviewsub">2020</p>
          <p className="Reviews">
            "Luqman completed a Gatsby and Tailwind project for me. He was fast
            and responsive. His knowledge of the latest frameworks and languages
            in unbelievable. I will use this talented developer again and again
            on other sides and first time on fiver !!"
          </p>
          <h4>-Fiver Client</h4>
        </Grid>
      </Grid>
      <Divider />

 {/* Review No # 3 */}
      <Grid xs={12} container sx={{ justifyContent: "space-around", mt: 3 }}>
        <Grid xs={1}  className="imgGrid" >
          <img src={FirstClient2} className="ReviewImage" alt="Review image" />
        </Grid>
        
        <Grid xs={9} className="fullcont" >
        <img src={FirstClient2} className="ReviewImage newlin" alt="Review image" />
          <h4 className="name">Kimberley Brennan</h4>
          <p className="Reviewsub">2021</p>
          <p className="Reviews">
            "We had contacted a first seller here on fiver and it caused us
            problems. We then found and contacted Muhammad Luqman and we must
            say that we are extremely satisfied. We gave them a template on
            which to build a very complex page for our site and they did a great
            job. An important aspect is that he really studied and understood
            our project, which greatly simplified the whole process.
            Furthermore, during the project we had to partially change some
            functions of the page and he supported us with great professionalism
            and availability to insert any changes required."
          </p>
          <h4>-Fiver Client</h4>
        </Grid>
      </Grid>
    </div>
  );
}

export default TestiMonials;