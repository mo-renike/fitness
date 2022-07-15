import React from "react";
import Loader from "./Loader";

const SimilarExercise = ({ similarExercise, targetMuscle }) => {
  return (
    <div>
      <div className="details__similar">
        <div className="d-f">
          {" "}
          <h3>Exercises that target the same muscle group</h3>
          <span>Scroll</span>
        </div>

        <div className="details__similar_wrapper">
          {targetMuscle.length ? (
            targetMuscle.map((exercise, index) => (
              <img key={index} src={exercise.gifUrl} alt={exercise.name} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="details__similar">
        <div className="d-f">
            <h3>Similar Exercises</h3>
            <span>Scroll</span>
        </div>
      
        <div className="details__similar_wrapper">
          {similarExercise.length ? (
            similarExercise.map((exercise, index) => (
              <img key={index} src={exercise.gifUrl} alt={exercise.name} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarExercise;
