import Recommendation from "../components/Recommendation";
import '../stylesheets/About.css';
import '../stylesheets/Recommendation.css';
import image from '../images/silvia.jpg';

export default function About() {
  return (
    <div className="container pt-3">
      <div>
        <h1 className="">About Me</h1>
        <img className="img-silvia" src={image} alt="Image Silvia" />
        <p className="lead mt-4">
          Hi! I am Silvia Reyes, a Colombian-born developer currently living in the USA. 
          After studying chemical engineering for three years <br /> 
          I became interested in computer science and began coding in 2022. I am particularly
          interested in developing web apps with polished UI using MERN technologies, and BackEnd programming using databases.
          In my free time, I enjoy getting outside, salsa dancing, and learning new languages. <br />
          I am looking forward to connecting with you and continuing my journey as a developer.
        </p>
      </div>
      <div className="container">
        <h1>Fun Facts</h1>
        <p className="lead mt-4">
          Trilingual
        </p>
        <p className="lead mt-4">
          Nature Lover
        </p>
        <p className="lead mt-4">
          Another Fact
        </p>
      </div>

      <div>
        <Recommendation />
      </div>

    </div>
  );
}
