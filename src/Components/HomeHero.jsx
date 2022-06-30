import React from "react";
import heroImg from "../assets/images/workout.jpg";

const HomeHero = () => {
  return (
    <div className="home__hero">
      <div className="home__hero_left">
        <p className="accent">Fitness Club</p>
        <h1>Sweat, Smile <br /> Repeat</h1>
        <p>Check out the most effective excercises to keep you fit.</p>
        <button href="#exercises">Explore Exercises</button>
      </div>
      <div className="home__hero_right">
        <img src={heroImg} alt="" />
      </div>
     {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee  scrollamount="20" className="marq">STAY FIT</marquee>
    </div>
  );
};

export default HomeHero;
