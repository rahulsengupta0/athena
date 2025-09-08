import React from 'react';
import AboutHero from '../../components/AboutUs/AboutHero';
import AboutSection  from '../../components/AboutUs/About';
import Team from '../../components/AboutUs/Team';
import Principle from '../../components/AboutUs/Principle';
import Insights from '../../components/AboutUs/Insights';
const About = () => {
    return (
      <div>
        <AboutHero />
        <AboutSection/>
        <Team/>
        <Principle/>
        <Insights/>
        {/* Add other components here */}
      </div>
    );
  };  
  export default About;