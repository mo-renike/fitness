import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
