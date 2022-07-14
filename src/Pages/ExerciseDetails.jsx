import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercise from "../Components/SimilarExercise";
import {
  FetchData,
  exerciseOptions,
  youtubeOptions,
} from "../functions/FetchData";
import "./Details.scss";
import { HashLink } from "react-router-hash-link";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercise, setSimilarExercise] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await FetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await FetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
      console.log(exerciseVideosData.contents);

      const targetMuscleData = await FetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscle(targetMuscleData);

      const equipmentData = await FetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setSimilarExercise(equipmentData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <div className="details">
      <HashLink to="/#exercises">Back</HashLink>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercise
        similarExercise={similarExercise}
        targetMuscle={targetMuscle}
      />
    </div>
  );
};

export default ExerciseDetails;
