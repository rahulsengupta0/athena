import React from 'react'
import Hero from '../../components/homepage/hero';
import About from '../../components/homepage/about';
// import AboutHero from '../../components/homepage/AboutHero';
// import AboutFeatures from '../../components/homepage/AboutFeatures';
import Ready from '../../components/homepage/readysection';
import Features from '../../components/homepage/features';
import LearningSection from '../../components/homepage/learningsection';
import Testimonial from '../../components/homepage/Testimonial';



const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Features />
      <LearningSection />
      <Ready />
      <Testimonial />
    </>
  );
};

export default Home;