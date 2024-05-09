import React, { useEffect } from "react";

function Project() {
  const projects = [
    {
      title: 'coffee-outlet',
      features: [
        'User Registration and Authentication', 
        'Coffee Shop Creation', 
        'Feedback System',
      ],
      image: 'coffee-outlet',
      gitHub: 'https://github.com/NathaliaReyes/coffee-outlet.git',
      videoWalthrought: 'https://drive.google.com/file/d/1vU7d2GpcvbSMt_iA-AzY20sFmxL4tfmc/view?usp=sharing'
    },
    {
      title: 'tech-blog',
      features: [
        'User Registration and Authentication', 
        'Blog Post Creation', 
        'Blog Post Viewing'
      ],
      image: '',
      gitHub: 'https://github.com/NathaliaReyes/tech-blog.git',
      videoWalthrought: ''
    },
    {
      title: 'break-the-scroll',
      features: [
        'uses data from the OPEN TRIVIA DATABASE API by [PIXELTAIL GAMES LLC.], available under the [Creative Commons Attribution-ShareAlike 4.0 International License]', 
        'uses data from the Bored API by [Bored API], available under the [Creative Commons Attribution-ShareAlike 4.0 International License]', 
        'jQuery for simplifying HTML document traversal, event handling, and animation.'
      ],
      image: 'break_the_scroll',
      gitHub: 'https://github.com/NathaliaReyes/break-the-scroll.git',
      videoWalthrought: 'https://beckpull.github.io/break-the-scroll/'
    },
    {
      title: '',
      features: ['', '', ''],
      image: '',
      gitHub: '',
      videoWalthrought: ''
    },
    {
      title: '',
      features: ['', '', ''],
      image: '',
      gitHub: '',
      videoWalthrought: ''
    },
    {
      title: '',
      features: ['', '', ''],
      image: '',
      gitHub: '',
      videoWalthrought: ''
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
  }

  return (
    <div className="bg-secondary pt-1 pb-1">
      <section className="container container-fluid mt-5 mb-5 bg-light rounded p-3">
        <h2 className="h2 text-center text-info">Explore</h2>
        <p className="text-primary text-center text-dark h6">
          Thanks for stopping here!❤️<br></br>
        </p>
      </section>
      <section className="container container-fluid mt-5">
        <div className="row justify-content-center">
          <div className=" col-lg-6 my-1 d-flex align-items-stretch">
            <div className="card p-2 border border-secondary">
              <img className=" card-img-top img-fluid" src="{image}" alt="Project Picture" />
                <div className="card-body">
                  <a href="#"><h5 className="card-title text-dark"></h5></a>
                  <p className="card-text"></p>
                </div>
                <div className="card-body bg-info">
                  <a href="#" className="card-link"><i className="fas fa-comment-dots"></i> Add
                    Feedback</a>
                  <a href="tel:#" className="card-link"><i className="fas fa-phone-alt"></i>
                    Call</a>
                  <a href="#"
                    target="_blank" className="card-link"><i className="fas fa-map-marker-alt"></i> Directions</a>
                  <a href="#" className="card-link"><i className="fas fa-globe"></i> Website</a>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;