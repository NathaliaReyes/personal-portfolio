import React, { useState, useEffect } from "react";
import '../stylesheets/Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Project() {
  const projects = [
    {
      title: 'Coffee-Outlet',
      technologies: [
        'Express.js',
        'Node.js',
        'Handlebars',
        'PostgreSQL',
        'Sequelize',
        'Multer'
      ],
      description: 'An interactive MVC web application catering to coffee aficionados. Users share experiences, post about new coffee shops, and provide feedback, fostering a vibrant community.',
      image: 'coffee-outlet',
      gitHub: 'https://github.com/NathaliaReyes/coffee-outlet.git',
      videoWalkthrought: 'https://drive.google.com/file/d/1vU7d2GpcvbSMt_iA-AzY20sFmxL4tfmc/view?usp=sharing',
      deployed: 'https://coffee-outlet.onrender.com/'
    },
    {
      title: 'Tech-Blog',
      technologies: [
        'Node.js',
        'Sequelize.js',
        'PostgreSQL',
        'Bcrypt.js',
        'Express.js',
      ],
      description: "CMS-style Tech Blog: MVC architecture, user posts, comments. Here, users can seamlessly publish their blog posts and interact with fellow developers contributions.",
      image: 'tech-blog',
      gitHub: 'https://github.com/NathaliaReyes/tech-blog.git',
      videoWalkthrought: '',
      deployed: 'https://tech-blog-p9ue.onrender.com'
    },
    {
      title: 'Break-the-Scroll',
      technologies: [
        'JQuery',
        'Bulma',
        'Vanilla JS',
        'HTML',
        'Bored API',
        'Open Trivia DB'
      ],
      description: 'This webpage is meant to encourage users to stop the mindless scrolling on TikTok, Reddit, Instagram, or whatever media they’re too plugged into. When users scan the QR code, they’re presented with a trivia game that is meant to engage their mind, and then they’re given a suggestion of something to do that’s not on their phone.',
      image: 'trivia-quiz',
      gitHub: 'https://github.com/NathaliaReyes/break-the-scroll.git',
      videoWalkthrought: '',
      deployed: 'https://beckpull.github.io/break-the-scroll/'
    },
    {
      title: 'Weather Dashboard',
      technologies: [
        'Vanilla JS', 
        'JQuery', 
        'SweetAlert',
        'OpenWeather API',
        'Bootstrap',
        'Day.js'
      ],
      description: 'This Weather Dashboard project is a practical application that empowers users to check the current weather and forecast for their preferred cities. Offering real-time weather data and a 5-day forecast, users can plan their activities effectively. The app includes a favorites feature for saving frequently visited cities, ensuring quick access.',
      image: 'weather-dashboard',
      gitHub: 'https://github.com/NathaliaReyes/weather-dashboard.git',
      videoWalkthrought: '',
      deployed: ''
    },
    {
      title: 'Sales Management',
      technologies: [
        'Java', 
        'Spring Boot', 
        'MySQL',
        'Hibernate',
        'Maven',
        'Postman'
      ],
      description: 'This is a REST API developed in Java using Spring Boot, designed to streamline standard processes in commercial transactions for products, including sales recording and stock management.',
      image: 'sales-management',
      gitHub: 'https://github.com/NathaliaReyes/SalesManagement.git',
      videoWalkthrought: '',
      deployed: ''
    },
    {
      title: 'Spa Database',
      technologies: [
        'MySQL', 
        'Workbench', 
        'POWER BI',
      ],
      description: 'This project creates a relational database for a spa, managing client transactions like service bookings and product purchases. It simplifies operations and enhances the customer and employee experience.',
      image: 'spa-db',
      gitHub: 'https://github.com/NathaliaReyes/spa-mysql-db.git',
      videoWalkthrought: '',
      deployed: ''
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can also add a global duration
    });
  }, []);

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
          <img className="card-img-top img-fluid img-project" src={image} alt="Project Picture" />
          <div className="card-body border-top">
            <h5 className="card-title cormorant-garamond-semibold">{props.title}</h5>
            <p className="card-text cormorant-garamond-medium paragraph">{props.description}</p>
            <div className="row">
              <div className="col-sm-12 col-md-6 text-center text-pink">
                <ul data-aos="fade-right" className="feature_list">
                  <li>{props.technologies[0]}</li>
                  <li>{props.technologies[1]}</li>
                  <li>{props.technologies[2]}</li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 text-center text-primary">
                <ul data-aos="fade-left" className="feature_list">
                  <li>{props.technologies[3]}</li>
                  <li>{props.technologies[4]}</li>
                  <li>{props.technologies[5]}</li>
                </ul>
              </div>
            </div>
            {props.videoWalkthrought && <a href={props.videoWalkthrought} target="_blank" className="d-inline-block mr-4-important"><i className="fas fa-video text-muted"></i></a>}
            {props.gitHub && <a href={props.gitHub} target="_blank" className="d-inline-block mr-4-important"><i className="fab fa-github text-muted"></i></a>}
            {props.deployed && <a href={props.deployed} target="_blank" className="d-inline-block mr-4-important"><i className="fas fa-external-link-alt text-muted"></i></a>}
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
            technologies={project.technologies}
            image={project.image}
            gitHub={project.gitHub}
            videoWalkthrought={project.videoWalkthrought}
            description={project.description}
            deployed={project.deployed}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;