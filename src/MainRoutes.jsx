import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import HomePage from "./Components/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
