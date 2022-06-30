//import React, { useState } from "react";
import { useState } from "react";
import Exercises from "../Components/Exercises";
import HomeHero from "../Components/HomeHero";
import SearchExercises from "../Components/SearchExercises";
import "./Home.scss";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div className="home">
      <HomeHero />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
