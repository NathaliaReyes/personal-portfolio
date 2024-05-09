import React, { useState, useEffect } from 'react';
// import './App.css';
import '../stylesheets/Recommendation.css';

function Recommendation() {
  const recommendations = [
    {
      name: 'Rebecca Feltman',
      country: 'United States',
      image: 'becky',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver BootCamp',
      testimony: "Sylvia is someone I always want on my team. The first reason is that she is so incredibly intelligent. She is always several steps ahead of the curve due to her dedication to her work and her diligence when it comes to prioritizing her time. A second major reason is that the work she produces is so incredibly beautiful - from the user side of things to the organization in her code. A third reason (of countless) is how enjoyable she is to work with. Any team that Sylvia is a part of is one that will be producing top-notch work as I have never seen her produce anything less."
    },
    {
      name: 'Jordan Heersink, MBA',
      country: 'United States',
      image: 'jordan',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver BootCamp',
      testimony: "Silvia’s attention to detail and willingness to dive head-first into new concepts is something that impressed me in my time working with her. When presented with a task that was new and nobody else really wanted, Silvia did not hesitate to take it. Silvia is willing to take the time to not only learn new skills (and learn them quickly) but also takes the time to perfect them too. During my time working with her, there was never a worry that she wouldn’t get the job done either. She did her job (again, to perfection) and had a fantastic attitude along the way. She’s fun to work with and a great worker."
    },
    {
      name: 'Monica S. II',
      country: 'Argentina',
      image: 'Monica',
      role: 'Senior IT Recruiter',
      company: 'LATAM',
      testimony: "Silvia es una profesional comprometida con todos los desafíos que encara. Sabes que cuentas con ella y tienes la certeza de que cumple con los objetivos del proyecto en tiempo y forma. Perseverante, analítica, con orientación a resultados, siempre se brinda al máximo. Es un recurso valioso que sumará muchísimo a cualquier equipo, tanto a nivel laboral como humano."
    }
  ]

  function LinkedInRecommendation(props) {

    const [image, setImage] = useState('');

    useEffect(() => {
      import(`../images/${props.image}.jpg`)
        .then((image) => {
          setImage(image.default);
        })
        .catch((error) => {
          console.error(`Error loading image: ${error}`);
        });
    }, [props.image]);

    return (
      <section className='bg-light text-center'>
        <div className='container'>
          <div className='row p-2 mt-4'>
            <div className='col-lg-6 col-12'>
              <img className='testimony-image' src={image} alt={`image-${props.image}`} />
            </div>
            <div className='col-lg-6 col-12'> 
              <div>
                <p className='name-testimony h5'>
                  <strong>{props.name}</strong> in {props.country}
                </p>
                <p className='text-secondary'>
                  {props.role} at <strong>{props.company}</strong>
                </p>
                <p className='text-testimony lead mb-0'>
                  "{props.testimony}"
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      <div className='container'>
        <h1>Recommendations:</h1>
        {recommendations.map((recommendation, index) => (
          <LinkedInRecommendation
            key={index}
            name={recommendation.name}
            country={recommendation.country}
            image={recommendation.image}
            role={recommendation.role}
            company={recommendation.company}
            testimony={recommendation.testimony}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;