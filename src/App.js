import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimeDetail from './components/AnimeDetail';
import GetAnime from './components/GetAnime';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<GetAnime/>} />
            <Route path="/detail/:id" element={<AnimeDetail/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
