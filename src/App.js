// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Reviews from './component/Reviews/Reviews';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
