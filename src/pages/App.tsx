import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Crew from './Crew/crew';
import Destination from './Destination/destination';
import Navbar from './generals/Navbar/Navbar';
import Home from './Home/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </Router>
  );
}

export default App;
