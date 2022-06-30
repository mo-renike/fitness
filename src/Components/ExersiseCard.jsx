import React from "react";
import { Link } from "react-router-dom";

const ExersiseCard = ({ exercise }) => {

  return (
    <Link className="card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="info">
        <div>
          {" "}
          <span>{exercise.bodyPart}</span>
          <span>{exercise.target}</span>
        </div>
        <p>
          {exercise.name.length < 20
            ? `${exercise.name}`
            : `${exercise.name.substring(0, 25)}...`}
        </p>
      </div>{" "}
    </Link>
  );
};

export default ExersiseCard;
