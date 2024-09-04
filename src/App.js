import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PatchNote from './PatchNote';
import './bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import GameIntroPage from './GameIntroPage';



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/patchnote" element={<PatchNote/>}/>
      <Route path="/intro" element={<GameIntroPage/>}/>
    </Routes>
  );
}

export default App;
