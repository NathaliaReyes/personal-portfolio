import React, { useState, useEffect } from "react";

function Project() {
  const projects = [
    {
      title: 'coffee-outlet',
      features: [
        'User Registration and Authentication', 
        'Coffee Shop Creation', 
        'Feedback System',
      ],
      description: 'some description',
      image: 'coffee-outlet',
      gitHub: 'https://github.com/NathaliaReyes/coffee-outlet.git',
      videoWalthrought: 'https://drive.google.com/file/d/1vU7d2GpcvbSMt_iA-AzY20sFmxL4tfmc/view?usp=sharing',
      deployed:''
    },
    {
      title: 'tech-blog',
      features: [
        'User Registration and Authentication', 
        'Blog Post Creation', 
        'Blog Post Viewing'
      ],
      description: 'some description',
      image: 'tech-blog',
      gitHub: 'https://github.com/NathaliaReyes/tech-blog.git',
      videoWalthrought: '',
      deployed:''
    },
    {
      title: 'break-the-scroll',
      features: [
        'uses data from the OPEN TRIVIA DATABASE API by [PIXELTAIL GAMES LLC.], available under the [Creative Commons Attribution-ShareAlike 4.0 International License]', 
        'uses data from the Bored API by [Bored API], available under the [Creative Commons Attribution-ShareAlike 4.0 International License]', 
        'jQuery for simplifying HTML document traversal, event handling, and animation.'
      ],
      description: '',
      image: 'trivia-quiz',
      gitHub: 'https://github.com/NathaliaReyes/break-the-scroll.git',
      videoWalthrought: 'https://beckpull.github.io/break-the-scroll/',
      deployed:''
    },
    {
      title: 'weather dashboard',
      features: ['', '', ''],
      description: '',
      image: 'weather-dashboard',
      gitHub: 'https://github.com/NathaliaReyes/weather-dashboard.git',
      videoWalthrought: '',
      deployed:'https://nathaliareyes.github.io/weather-dashboard/'
    },
    {
      title: 'Sales Management',
      features: ['', '', ''],
      description: '',
      image: 'sales-management',
      gitHub: 'https://github.com/NathaliaReyes/SalesManagement.git',
      videoWalthrought: '',
      deployed:''
    },
    {
      title: 'Spa Database',
      features: ['', '', ''],
      description: '',
      image: 'spa-db',
      gitHub: 'https://github.com/NathaliaReyes/spa-mysql-db.git',
      videoWalthrought: '',
      deployed:''
    }
  ]

  function ProjectsToShow(props) {

    const [image, setImage] = useState('');

    useEffect(() => {
      import(`../images/${props.image}.png`)
        .then((image) => {
          setImage(image.default);
        })
        .catch((error) => {
          console.error(`Error loading image: ${error}`);
        });
    }, [props.image]);

  return (
    <div className="col-md-6 mb-3">
        <div className="card border border-secondary">
          <img className="card-img-top img-fluid" src={image} alt="Project Picture" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.videoWalthrought} target="_blank"><i className="fas fa-video"></i></a>
            <a href={props.gitHub} target="_blank"><i className="fab fa-github"></i></a>
            <a href={props.deployed} target="_blank"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
    </div>
  )
}

  return (
    <div>
      <div className='row justify-content-center'>
        {projects.map((project, index) => (
          <ProjectsToShow
            key={index}
            title={project.title}
            features={project.features}
            image={project.image}
            gitHub={project.gitHub}
            videoWalthrought={project.videoWalthrought}
            description={project.description}
            deployed={project.deployed}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;