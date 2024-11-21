import React from 'react';
import '../stylesheets/Recommendation.css';

function Recommendation() {
  const recommendations = [
    {
      name: 'Rebecca Feltman',
      country: 'United States',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver',
      text: "Silvia is a brilliant team player, always steps ahead with her dedication and time management. Her work is stunning, from user design to clean code."
    },
    {
      name: 'Jordan Heersink',
      country: 'United States',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver',
      text: "Silvia's attention to detail and eagerness to tackle new challenges amazed me. She quickly learns and perfects new skills with dedication and confidence."
    },
    {
      name: 'Monica S. II',
      country: 'Argentina',
      role: 'Senior IT Recruiter',
      company: 'LATAM',
      text: "Silvia is a dedicated, reliable professional who meets goals on time. Persistent and results-driven, she's a valuable asset to any team."
    }
  ]

  function LinkedInRecommendation(props) {

    return (
      <div className='p-2 bg-zinc-900 mb-3 border-2 border-sky-600'>
        <p className='text-center text-sky-50 cormorant-infant-bold'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='text-zinc-400 text-center text-xs md:text-sm mb-1'>
          {props.role} at <strong>{props.company}</strong>
        </p>
        <p className='cormorant-infant-light text-sm sm:text-base text-sky-50 paragraph'>
          "{props.text}"
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className='mt-2'>
        <h3 className='cormorant-infant-bold text-lg md:text-xl'>Recommendations:</h3>
        {recommendations.map((recommendation, index) => (
          <LinkedInRecommendation
            key={index}
            name={recommendation.name}
            country={recommendation.country}
            role={recommendation.role}
            company={recommendation.company}
            text={recommendation.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;