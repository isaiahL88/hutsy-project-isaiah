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
import useToken from './components/useToken';
import CreateEvent from './components/CreateEvent';
import SignUp from './components/SignUp';


function App() {
  // Custom hook used to store token in session storage
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="*" element={<Login setToken={setToken} />} />
            <Route path="WentWrong" element={<WentWrong />} />
            {/* Temorary routes just for debugging while the server is down */}
            <Route path="/Events" element={<EventsPage setToken={setToken} />} />
            <Route path="CreateEvent" element={<CreateEvent />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </Router>

      </>
    )
  }

  return (
    <Router>
      <Routes>
        {/* This route is not need if the user has a token */}
        {/* <Route path="/" element={<Login />} /> */}
        {/* I am also giving settoek to evenrts page so the user can logout */}
        <Route path="/" element={<EventsPage setToken={setToken} />} />
        <Route path="/Events" element={<EventsPage setToken={setToken} />} />
        {/* To be implemented */}
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="NotFound" element={<NotFound />} />
        <Route path="WentWrong" element={<WentWrong />} />
        <Route path="CreateEvent" element={<CreateEvent />} />
        <Route path="SignUp" element={<SignUp />} />


      </Routes>
    </Router>
  );
}

export default App;
