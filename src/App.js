import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import Layout from "./components/Layout";
import WorkoutComponent from "./components/WorkoutComponent";
import CreateExercise from "./pages/CreateExercise";
import CreateWorkout from "./pages/CreateWorkout";
// import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <ParticlesBg type="cobweb" color="#0F58AE" />
      </div>

      <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-exercise"
            element={
              <Layout>
                <CreateExercise />
              </Layout>
            }
          />
          <Route
            path="/create-workout"
            element={
              <Layout>
                <CreateWorkout />
              </Layout>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/workouts"
            element={
              <Layout>
                <Workouts />
              </Layout>
            }
          />
          <Route
            path="/workout/:id"
            element={
              <Layout>
                <WorkoutComponent />
              </Layout>
            }
          />
          {/* <Route path="/profile" component={Profile} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
