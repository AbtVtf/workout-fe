import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Workouts from "./components/Workouts";
import ParticlesBg from "particles-bg";
// import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <div>
        <ParticlesBg type="cobweb" color="#0F58AE" bg={true} />
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workouts" element={<Workouts />} />
          {/* <Route path="/profile" component={Profile} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
