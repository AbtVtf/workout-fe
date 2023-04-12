import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Workouts from "./components/Workouts";
// import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workouts" element={<Workouts />} />
        {/* <Route path="/profile" component={Profile} />*/}
      </Routes>
    </Router>
  );
}

export default App;
