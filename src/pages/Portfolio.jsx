import React from 'react';
// import Project from "@components/Project";
import CardProject from "@components/CardProject";
export default function Portfolio() {
    return (
      <>
        <div className="container py-2">
          <h1 className="cormorant-infant-bold">My Projects</h1>
          <p className="cormorant-infant-medium">
            Some of my projects are listed below. 
            Click the icon project <span className="text-zinc-600 underline">(located at the bottom left)</span> to view the deployed application and a video walkthrough.
          </p>
        </div>
          <CardProject />
        {/* <Project /> */}
      </>
    );
  }