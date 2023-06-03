import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Err404 from './pages/Err404';
import About from './pages/Contact';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/about" element={ <About/> }></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={ <Err404/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
