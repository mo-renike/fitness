import { Search } from "@mui/icons-material";
import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import ExersiseCard from "./ExersiseCard";
// import { Pagination } from "@mui/material/Pagination";
// import { exerciseOptions, FetchData } from "../functions/FetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const indexOfLastExersise = currentPage * exercisesPerPage;
  const indexOfFirstExersise = indexOfLastExersise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExersise,
    indexOfLastExersise
  );

  const paginate = (e, pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  return (
    <div className="home__exercises" id="exercises">
      <h4>Showing Search Results</h4>
      <div className="home__exercises_wrapper">
        {currentExercises.map((exercise, index) => (
          <ExersiseCard key={index} exercise={exercise} />
        ))}
      </div>{" "}
      {/* pagination */} <br />
      <div>
        {exercises.length > 9 && (
          <Pagination
            variant="outlined"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
