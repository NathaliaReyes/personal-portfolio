import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div className="container pt-3">
        <h1 className="cormorant-infant-bold">My Projects</h1>
        <p className="cormorant-infant-medium">
          Some of my projects are listed below. 
          Click the icon project <span className="text-muted">(located at the bottom left)</span> to view the deployed application and a video walkthrough.
        </p>

        <Project />
      </div>
    );
  }