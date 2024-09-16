import React from 'react';
import '../stylesheets/Recommendation.css';

function Recommendation() {
  const recommendations = [
    {
      name: 'Rebecca Feltman',
      country: 'United States',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver',
      text: "Silvia is someone I always want on my team. The first reason is that she is so incredibly intelligent. She is always several steps ahead of the curve due to her dedication to her work and her diligence when it comes to prioritizing her time. A second major reason is that the work she produces is so incredibly beautiful - from the user side of things to the organization in her code."
    },
    {
      name: 'Jordan Heersink',
      country: 'United States',
      role: 'Full-Stack Web Developer',
      company: 'University of Denver',
      text: "Silvia’s attention to detail and willingness to dive head-first into new concepts is something that impressed me in my time working with her. When presented with a task that was new and nobody else really wanted, Silvia did not hesitate to take it. Silvia is willing to take the time to not only learn new skills (and learn them quickly) but also takes the time to perfect them too."
    },
    {
      name: 'Monica S. II',
      country: 'Argentina',
      role: 'Senior IT Recruiter',
      company: 'LATAM',
      text: "Silvia is a dedicated professional who takes on every challenge she faces. You know you can rely on her, and you're certain she will meet the project’s objectives on time and as expected. Persistent, analytical, and results-oriented, she always gives her best. She is a valuable asset who will greatly contribute to any team, both on a professional and personal level."
    }
  ]

  function LinkedInRecommendation(props) {

    return (
      <div className='p-2 bg-zinc-900 mb-3 border-2 border-sky-600'>
        <p className='text-center text-sky-50 cormorant-infant-bold'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='text-zinc-400 text-center text-sm'>
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