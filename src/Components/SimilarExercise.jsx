import React from "react";
import Loader from "./Loader";

const SimilarExercise = ({ similarExercise, targetMuscle }) => {

  return (
    <div>
         <div className="details__similar">
      <h3>Exercises that target the same muscle</h3>
      <div className="details__similar_wrapper">
        {targetMuscle.length ? targetMuscle.map((exercise, index) => (
          <img key={index} src={exercise.gifUrl} alt={exercise.name} />
        )) : <Loader />}
      </div>
    </div>
    <div className="details__similar">
      <h3>Exercises That use the same Equipment</h3>
      <div className="details__similar_wrapper">
        {similarExercise.length ? similarExercise.map((exercise, index) => (
          <img key={index} src={exercise.gifUrl} alt={exercise.name} />
        )) : <Loader />}
      </div>
    </div>
    </div>
 
  );
};

export default SimilarExercise;
