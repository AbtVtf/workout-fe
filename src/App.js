import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import Layout from "./components/Layout";
// import Profile from "./components/Profile";

const ContentContainer = styled.div`
  min-height: calc(100vh - 60px); // Adjust 60px to the height of your navbar
  display: flex;
  flex-direction: column;
`;

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
