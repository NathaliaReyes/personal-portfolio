import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div className="container pt-3">
        <h1>My Projects</h1>
        <p>
          Some of my projects are listed below. 
          Click on the icon project to view the deployed application and a video walkthrought.
        </p>

        <Project />
      </div>
    );
  }