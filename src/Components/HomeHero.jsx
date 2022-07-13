import React from "react";
import { HashLink } from "react-router-hash-link";
import heroImg from "../assets/images/exer.jpg";

const HomeHero = () => {
  return (
    <div className="home__hero">
      {/* <div className="home__hero_left">
        <p className="accent">Fitness Club</p>
        <h1>Sweat, Smile <br /> Repeat</h1>
        <p>Check out the most effective excercises to keep you fit.</p>
        <button href="#exercises">Explore Exercises</button>
      </div>
      <div className="home__hero_right">
        <img src={heroImg} alt="" />
      </div> */}
      <div className="home__hero_text">
        <h1 className="accent">Fitness Club</h1>
        <h1>
          Sweat, Smile <br /> Repeat.
        </h1>
        <p>
          Exercises that will help you on your road to healthy living, weight
          loss and stress relief.
        </p>
        <HashLink to="/#exercises">Explore Exercises</HashLink>
      </div>
      <div className="home__hero_img">
        {" "}
        <div className="image">
          <img src={heroImg} alt="" />
          <div className="overlay"></div>
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee scrollamount="20" className="marq">
        STAY HEALTHY
      </marquee>
    </div>
  );
};

export default HomeHero;
