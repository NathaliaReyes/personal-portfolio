"use client";

// import Image from "next/image";

import React, { useState, useEffect } from "react";
import '../stylesheets/Project.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

export default function ThreeDCardDemo() {
  const projects = [
    
    {
      title: 'Mayor Security LLC',
      technologies: [
        'React.js',
        'Node.js',
        'CSS',
        'Tailwind CSS',
      ],
      description: 'A React application for a Security Company, providing information and details about the business and the services they provide.',
      image: 'mayorSec',
      gitHub: 'https://github.com/NathaliaReyes/mayor_security_website.git',
      videoWalkthrought: '',
      deployed: 'https://mayorsecurityllc.com/'
    },
    {
      title: 'Harmony Wellness & Spa',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'Dotenv',
        'Tailwind CSS',
        'FormSpree'
      ],
      description: 'A front-end application for a spa, providing information about services, products, and contact details. It includes a contact form for inquiries.',
      image: 'harmony_spa',
      gitHub: 'https://github.com/NathaliaReyes/spa_ws.git',
      deployed: 'https://harmonywellnessandspa.netlify.app/'
    },
    {
      title: 'Community Aerosports',
      technologies: [
        'Node.js',
        'Express.js',
        'React.js',
        'FormSpree',
        'Dotenv',
        'Tailwind CSS'
      ],
      description: 'A React-based website using shadcn/ui components to connect with an expert flight instructor and learn about his services, including information lessons and accessing flight resources.',
      image: 'community',
      gitHub: 'https://github.com/NathaliaReyes/community-aerosports.git',
      deployed: 'https://communityaerosports.netlify.app/'
    },
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
      gitHub: 'https://github.com/NathaliaReyes/coffee_outlet.git',
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
      description: 'This webpage encourages users to stop mindless scrolling on social media. Scanning the QR code presents a trivia game to engage their mind and suggests offline activities.',
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
      description: 'This is a REST API developed in Java using Spring Boot, designed to streamline standard processes in commercial transactions for products, including sales recording and stock management, generating detailed reports, and ensuring data integrity.',
      image: 'sales-management',
      gitHub: 'https://github.com/NathaliaReyes/SalesManagement.git',
      videoWalkthrought: '',
      deployed: ''
    },
    {
      title: 'Alpine Auto Sales LLC',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'AWS S3-Ec2-CloudFront',
        'Tailwind CSS',
        'Aceternity'
      ],
      description: 'A full stack application for a dealership car, providing information and details about the cars available to purchase and a contact form for inquiries.',
      image: 'auto',
      gitHub: 'https://github.com/NathaliaReyes/alpine_auto_cars.git',
      videoWalkthrought: 'https://drive.google.com/file/d/1CxSo_DGtIHO5r96fMN7_BGL0ZJArjvNF/view?usp=sharing',
      deployed: 'https://usa.alpineauto.xyz/'
    },
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
      <div className="px-2">
        <CardContainer className="inter-var">
          <CardBody className=" bg-gray-100 w-full h-auto rounded-xl p-2 border">
            <CardItem translateZ="40" className="text-lg lg:text-xl font-bold text-neutral-600">
              {props.title}
            </CardItem>
            <CardItem as="p" translateZ="35" className="text-neutral-500 text-sm max-w-screen-sm mt-2 dark:text-neutral-300">
              {props.description}
            </CardItem>
            <CardItem translateZ="50" className="w-full mt-4 overflow-hidden">
              <img
                src={image}
                className="h-60 w-full object-fill rounded-xl"
                alt={`${props.title} project`}
              />
            </CardItem>
            <div className="flex justify-around items-center mt-4">
              <div className="flex flex-col w-3/4 md:flex-row space-y-2 md:space-y-0">
                {props.gitHub && (
                  <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
                    <CardItem translateZ={20} className="px-2 rounded-xl text-xs font-semibold text-sky-900 dark:text-white">
                      View on GitHub →
                    </CardItem>
                  </a>
                )}
                {props.videoWalkthrought && (
                  <a href={props.videoWalkthrought} target="_blank" rel="noopener noreferrer">
                    <CardItem translateZ={20} className="px-2 rounded-xl text-xs font-semibold text-sky-900 dark:text-white">
                      Video Demo →
                    </CardItem>
                  </a>
                )}
              </div>
              {props.deployed && (
                <div className="flex justify-end w-full">
                  <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                    <CardItem translateZ={20} className="px-2 py-2 rounded-xl bg-black text-white text-xs font-bold">
                      Live Site →
                    </CardItem>
                  </a>
                </div>
              )}
            </div>
          </CardBody>
        </CardContainer>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
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