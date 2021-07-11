import React from 'react';
import portrait from './images/portrait.jpeg'

const About = () => {

  return (
    <div className ="neonBase">
      <h3 className="greenSuit">About</h3>
      <img src={portrait} alt="profile portrait"></img>
    </div>
  );
};

export default About;