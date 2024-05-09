import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div>
        <h1>My Projects:</h1>
        <p>
          Some of my projects are listed below. 
          Click on the project name to view the deployed application.
        </p>

        <Project />
      </div>
    );
  }