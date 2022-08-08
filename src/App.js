import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Users from './Components/Users';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
