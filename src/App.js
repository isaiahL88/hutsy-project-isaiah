import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./components/Login";
import EventsPage from "./components/EventsPage";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import WentWrong from './components/WentWrong';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Events" element={<EventsPage />} />
        {/* To be implemented */}
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="NotFound" element={<NotFound />} />
        <Route path="WentWrong" element={<WentWrong />} />
      </Routes>
    </Router>
  );
}

export default App;
