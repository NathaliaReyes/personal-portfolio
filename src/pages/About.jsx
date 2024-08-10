import Recommendation from "../components/Recommendation";
import '../stylesheets/About.css';
import '../stylesheets/Recommendation.css';
import image from '../images/silvia.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import hikingImg from '../images/hiking.jpg'
import trilingualImg from '../images/trilingual.png'
import salsaImg from '../images/salsa-lover.png'

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container pt-3">
      <div>
        <h1 className="cormorant-infant-bold">About Me</h1>
        <img className="img-silvia" src={image} alt="Profile_Image_Silvia" />
        <p className="cormorant-infant-medium mt-3 text-justify paragraph">
          Hi! I am Silvia Reyes, a Colombian-born developer living in the USA.
          After studying chemical engineering for three years,
          I became interested in computer science and began coding in 2022. I am particularly
          interested in developing web apps with polished UI using MERN technologies, and Backend programming using databases.
          In my free time, I enjoy getting outside, salsa dancing, and learning new languages. <br />
        </p>
        <p className="lead text-center cormorant-infant-medium">
          I am looking forward to connecting with you and continuing my journey as a developer.
        </p>

      </div>

      <div className="container mt-4">
        <h3 className="cormorant-infant-bold">Fun Facts</h3>
        <div className="row">
          <div className="col-sm-12 col-md-4 text-center" data-aos="flip-left">
            <img className="img-fun-fact" src={trilingualImg} alt="Trilingual" />
            <p className="lead mt-4 text-primary cormorant-infant-semibold-italic" style={{ fontStyle: 'italic' }} >
              Trilingual
            </p>
          </div>
          <div className="col-sm-12 col-md-4 text-center" data-aos="flip-right">
            <img className="img-fun-fact" src={hikingImg} alt="Hiking" />
            <p className="lead mt-4 text-primary cormorant-infant-semibold-italic" style={{ fontStyle: 'italic' }} >
              Nature Lover
            </p>
          </div>
          <div className="col-sm-12 col-md-4 text-center" data-aos="flip-up">
            <img className="img-fun-fact" src={salsaImg} alt="Salsa" />
            <p className="lead mt-4 text-primary cormorant-infant-semibold-italic" style={{ fontStyle: 'italic' }} >
              Salsa Lover
            </p>
          </div>
        </div>
      </div>

      <div>
        <Recommendation />
      </div>

    </div>
  );
}
