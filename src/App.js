import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./components/Login";
import EventsPage from "./components/EventsPage";
import Profile from "./components/Profile"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Events" element={<EventsPage />} />
        {/* To be implemented */}
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
