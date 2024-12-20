import React, { useState, useEffect } from "react";
import '../stylesheets/Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Project() {
  // const projects = [
  //   // {
  //   //   title: 'Alpine Auto Sales LLC',
  //   //   technologies: [
  //   //     'React.js',
  //   //     'Node.js',
  //   //     'Express.js',
  //   //     'AWS S3-Ec2-CloudFront',
  //   //     'Tailwind CSS',
  //   //     'Aceternity'
  //   //   ],
  //   //   description: 'A full-stack application for a car dealership, offering detailed information about available cars for purchase and a contact form for inquiries.',
  //   //   image: 'auto',
  //   //   gitHub: 'https://github.com/NathaliaReyes/alpine_auto_cars.git',
  //   //   videoWalkthrought:'https://drive.google.com/file/d/1CxSo_DGtIHO5r96fMN7_BGL0ZJArjvNF/view?usp=sharing',
  //   //   deployed: 'https://usa.alpineauto.xyz/'
  //   // },
  //   {
  //     title: 'Harmony Wellness & Spa',
  //     technologies: [
  //       'React.js',
  //       'Node.js',
  //       'Express.js',
  //       'Dotenv',
  //       'Tailwind CSS',
  //       'FormSpree'
  //     ],
  //     description: 'A front-end application for a spa, providing information about services, products, and contact details. It includes a contact form for inquiries.',
  //     image: 'harmony_spa',
  //     gitHub: 'https://github.com/NathaliaReyes/spa_ws.git',
  //     deployed: 'https://harmonywellnessandspa.netlify.app/'
  //   },
  //   {
  //     title: 'Community Aerosports',
  //     technologies: [
  //       'Node.js',
  //       'Express.js',
  //       'React.js',
  //       'FormSpree',
  //       'Dotenv',
  //       'Tailwind CSS'
  //     ],
  //     description: 'A React-based website using shadcn/ui components to connect with an expert flight instructor and learn about his services, including information lessons and accessing flight resources.',
  //     image: 'community',
  //     gitHub: 'https://github.com/NathaliaReyes/community-aerosports.git',
  //     deployed: 'https://communityaerosports.netlify.app/'
  //   },
  //   {
  //     title: 'Coffee-Outlet',
  //     technologies: [
  //       'Express.js',
  //       'Node.js',
  //       'Handlebars',
  //       'PostgreSQL',
  //       'Sequelize',
  //       'Multer'
  //     ],
  //     description: 'An interactive MVC web application catering to coffee aficionados. Users share experiences, post about new coffee shops, and provide feedback, fostering a vibrant community.',
  //     image: 'coffee-outlet',
  //     gitHub: 'https://github.com/NathaliaReyes/coffee-outlet.git',
  //     videoWalkthrought: 'https://drive.google.com/file/d/1vU7d2GpcvbSMt_iA-AzY20sFmxL4tfmc/view?usp=sharing',
  //     deployed: 'https://coffee-outlet.onrender.com/'
  //   },
  //   {
  //     title: 'Tech-Blog',
  //     technologies: [
  //       'Node.js',
  //       'Sequelize.js',
  //       'PostgreSQL',
  //       'Bcrypt.js',
  //       'Express.js',
  //     ],
  //     description: "CMS-style Tech Blog: MVC architecture, user posts, comments. Here, users can seamlessly publish their blog posts and interact with fellow developers contributions.",
  //     image: 'tech-blog',
  //     gitHub: 'https://github.com/NathaliaReyes/tech-blog.git',
  //     videoWalkthrought: '',
  //     deployed: 'https://tech-blog-p9ue.onrender.com'
  //   },
  //   {
  //     title: 'Break-the-Scroll',
  //     technologies: [
  //       'JQuery',
  //       'Bulma',
  //       'Vanilla JS',
  //       'HTML',
  //       'Bored API',
  //       'Open Trivia DB'
  //     ],
  //     description: 'This webpage encourages users to stop mindless scrolling on social media. Scanning the QR code presents a trivia game to engage their mind and suggests offline activities.',
  //     image: 'trivia-quiz',
  //     gitHub: 'https://github.com/NathaliaReyes/break-the-scroll.git',
  //     videoWalkthrought: '',
  //     deployed: 'https://beckpull.github.io/break-the-scroll/'
  //   },
  //   {
  //     title: 'Weather Dashboard',
  //     technologies: [
  //       'Vanilla JS', 
  //       'JQuery', 
  //       'SweetAlert',
  //       'OpenWeather API',
  //       'Bootstrap',
  //       'Day.js'
  //     ],
  //     description: 'This Weather Dashboard project is a practical application that empowers users to check the current weather and forecast for their preferred cities. Offering real-time weather data and a 5-day forecast, users can plan their activities effectively. The app includes a favorites feature for saving frequently visited cities, ensuring quick access.',
  //     image: 'weather-dashboard',
  //     gitHub: 'https://github.com/NathaliaReyes/weather-dashboard.git',
  //     videoWalkthrought: '',
  //     deployed: ''
  //   },
  //   {
  //     title: 'Sales Management',
  //     technologies: [
  //       'Java', 
  //       'Spring Boot', 
  //       'MySQL',
  //       'Hibernate',
  //       'Maven',
  //       'Postman'
  //     ],
  //     description: 'This is a REST API developed in Java using Spring Boot, designed to streamline standard processes in commercial transactions for products, including sales recording and stock management, generating detailed reports, and ensuring data integrity.',
  //     image: 'sales-management',
  //     gitHub: 'https://github.com/NathaliaReyes/SalesManagement.git',
  //     videoWalkthrought: '',
  //     deployed: ''
  //   },
  // ]

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
        <div className="card border border-secondary">
          <div>
            <img className="card-img-top img-fluid img-project" src={image} alt="Project Picture" />
            <span className="img-tooltip">{props.title}</span>
          </div>
          <div className="card-body border-top">
            <h5 className="card-title cormorant-infant-bold">{props.title}</h5>
            <p className="card-text cormorant-infant-medium paragraph">{props.description}</p>
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
            {props.videoWalkthrought && <a href={props.videoWalkthrought} target="_blank" className="d-inline-block mr-4-important"><i className="fas fa-video text-info"></i></a>}
            {props.gitHub && <a href={props.gitHub} target="_blank" className="d-inline-block mr-4-important"><i className="fab fa-github text-danger"></i></a>}
            {props.deployed && <a href={props.deployed} target="_blank" className="d-inline-block mr-4-important"><i className="fas fa-external-link-alt text-primary"></i></a>}
            </div>
        </div>
    )
  }

  return (
      <div className=''>
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
  );
}

export default Project;