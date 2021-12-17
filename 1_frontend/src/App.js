import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage/QuizPage';
import SalutPage from './pages/SalutPage/SalutPage';
import DefetedPage from './pages/DefeatedPage/DefeatedPage';
import TrucePage from './pages/TrucePage/TrucePage';

// images
import mainImg from './assets/img/img1.jpg';
import truceImg from './assets/img/img4.jpg';
import salutImg from './assets/img/img3.jpg';
import defeatedImg from './assets/img/img2.jpg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage img={mainImg} />}></Route>
        <Route path='/quiz' element={<QuizPage img={mainImg} />}></Route>
        <Route path='/salut' element={<SalutPage img={salutImg} />}></Route>
        <Route
          path='/defeated'
          element={<DefetedPage img={defeatedImg} />}
        ></Route>
        <Route path='/truce' element={<TrucePage img={truceImg} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
