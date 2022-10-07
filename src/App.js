import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ExerciseDetail from "./pages/ExerciseDetail"
function App() {
  return (
    <section>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecercise/:id" element={<ExerciseDetail/>} />
        </Routes>
      <Footer/>
    </section>
  );
}

export default App;
