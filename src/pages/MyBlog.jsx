import React, { useState, useEffect } from 'react';
import '../stylesheets/About.css';

function MyBlog() {
  const articles = [
    {
      title: 'How to set up Multer for file uploads in Node.js',
      date: '8/8/2024',
      // image: 'multer',
      subtitle: 'Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. Here is a step-by-step guide on how to set up Multer for file uploads in Node.js.',
      description: `
        1. Install Multer on the server side by typing npm install multer in the terminal.<br>
        2. Set up server side:<br>
          <ul>
            <li>Require Multer: Import Multer and other necessary modules, const multer = require("multer");</li>
            <li>Configure Storage: Define storage options, including destination and filename.</li>
            <li>Create middleware: Set up the Multer middleware to handle file uploads.</li>
            <li>Create endpoint: Define an endpoint to handle file uploads.</li>
          </ul>
        3. Set up Client side:<br>
          <ul>
            <li>Install Axios: Use Axios to make HTTP requests from the client side, install by typing npm install axios.</li>
            <li>Create a form: Create a form for uploading details and images.</li>
            <li>Handle File Change: Add a function to handle file input changes.</li>
            <li>Upload files: Define a function to upload files to the server.</li>
            <li>Handle form submission: Integrate the file upload and data submission within the form's submit handler.</li>
          </ul>`,
      writer: 'Silvia Reyes',
      footer: 'Was this article helpful?, give me a feedback in my Contact section here >>'
    },
  ]

  function ArticlesMyBlog(props) {

    // const [image, setImage] = useState('');

    // useEffect(() => {
    //   import(`../images/${props.image}.jpg`)
    //     .then((image) => {
    //       setImage(image.default);
    //     })
    //     .catch((error) => {
    //       console.error(`Error loading image: ${error}`);
    //     });
    // }, [props.image]);

    return (
      <section className='bg-sky-50 mt-2 mb-3 container p-2'>
        <h6 className='font-bold text-sky-700 text-bold'>{props.title}</h6>
        <p className='text-zinc-500 text-xs'>
          {props.date}
        </p>
        <p className='fs-6 text-zinc-400'>{props.subtitle}</p>
        <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
        <p className='mt-3'><em>Written by: {props.writer}</em></p>
        {/* <footer className='mt-3 fs-6 text-muted'>{props.footer}</footer> */}
      </section>
    )
  }

  return (
    <div>
      <div className='container mt-4'>
        <h3 className='cormorant-infant-bold text-zinc-700 text-center'>Welcome to My Blog! Dive Into My Developer Journey</h3>
        <h4 className='cormorant-infant-regular fs-6 pb-2 text-zinc-700'>Here, I share my experiences, lessons learned, and useful tips for anyone starting in programming. Whether you're just beginning or looking for some inspiration, I hope my writings offer valuable insights and guidance on your path to becoming a great developer.</h4>
        {articles.map((article, index) => (
          <ArticlesMyBlog
            key={index}
            title={article.title}
            date={article.date}
            // image={article.image}
            subtitle={article.subtitle}
            description={article.description}
            writer={article.writer}
            footer={article.footer}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBlog;