import React, { useEffect, useState } from "react";
import { exerciseOptions, FetchData } from "../functions/FetchData";
import ExerciseScrollBar from "./ExerciseScrollBar";
import { BsArrowRightShort } from "react-icons/bs";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();  
  }, []);

  const setSearchValue = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exerciseData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const filteredExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(filteredExercises);
    }
  };

  return (
    <div className="home__search">
      <div className="home__search_header">
        <h3>Search for awesome exercises</h3>
      </div>
      <form>
        <input
          onChange={setSearchValue}
          type="search"
          value={search}
          placeholder="Search Exercises by body part.."
        />
        <button onClick={handleSearch}>Search</button>
      </form>

      <div className="home__search_body">
        <div className="d-f">
          {" "}
          <h4>Click Popular Bodyparts</h4>{" "}
          <span>
            Scroll <BsArrowRightShort />{" "}
          </span>
        </div>

        <ExerciseScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
