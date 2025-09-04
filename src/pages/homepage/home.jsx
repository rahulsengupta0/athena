import React from 'react'
import Hero from '../../components/homepage/hero';
import Features from '../../components/homepage/features';
import LearningSection from '../../components/homepage/learningsection';


const Home = () => {
  return (
    <>
      <Hero />
      <div
        className="w-full relative z-10"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div style={{ padding: "48px 0" }}>
          <Features />
        </div>
      </div>
      <div style={{ padding: "48px 0" }}>
        <LearningSection />
      </div>
    </>
  );
};

export default Home;