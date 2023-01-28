import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      </Routes>
    </Router>
  );
}

export default App;
