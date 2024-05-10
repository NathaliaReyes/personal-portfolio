import Recommendation from "../components/Recommendation";
import '../stylesheets/About.css';
import '../stylesheets/Recommendation.css';
import image from '../images/silvia.jpg';

export default function About() {
    return (
        <div>
            <div className="container">
                <h1>About Me</h1>
                <img className="img-silvia" src={image} alt="Image Silvia" />
                <p className="lead mt-4">
                    Full stack web developer with background in chemical engineering👩‍🔬, 
                    currently in search of internship or junior developer role in order to expand 
                    skills and experience in the field. Strong technical understanding in multiple 
                    languages, detail oriented, and ability to learn new concepts quickly.
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
  