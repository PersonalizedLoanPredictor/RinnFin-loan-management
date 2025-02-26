import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([{
  path: "/",
  element: <LandingPage/>,
},
])
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
