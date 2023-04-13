import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import Layout from "./components/Layout";
// import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <ParticlesBg type="cobweb" color="#0F58AE" bg />

      <Router>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
          {/* <Route path="/profile" component={Profile} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
