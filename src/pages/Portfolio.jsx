import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div className="container pt-3">
        <h1 className="cormorant-garamond-bold">My Projects</h1>
        <p className="cormorant-garamond-medium">
          Some of my projects are listed below. 
          Click on the icon project to view the deployed application and a video walkthrought.
        </p>

        <Project />
      </div>
    );
  }