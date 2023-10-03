import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crew from "./Crew/crew";
import Destination from "./Destination/destination";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/home";
import Technology from "./Technology/technology";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
