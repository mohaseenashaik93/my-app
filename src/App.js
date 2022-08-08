import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Users from './Components/Users';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const handleCallback = (event) => {
    alert(event)
  }
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About parentCallback={handleCallback()}/>} />
      </Routes>
    </Router>
  );
}

export default App;
