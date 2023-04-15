import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import ParticlesBg from "particles-bg";
import Layout from "./components/Layout";
import CreateExercise from "./pages/CreateExercise";
import CreateWorkout from "./pages/CreateWorkout";
import Workout from "./pages/Workout";
import { AppBackground } from "./styles/styles";

function App() {
  return (
    <>
      <AppBackground>
        {/* <ParticlesBg type="cobweb" color="#0F58AE" /> */}
      </AppBackground>

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
                <Workout />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <h1>
                  Woah, you accidentally discovered an easter egg
                  <br />
                  Enjoy your free membership!
                  <br />
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    Ding ding ding
                  </a>{" "}
                </h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
