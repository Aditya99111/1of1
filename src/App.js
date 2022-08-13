import './App.css';
import Home from './components/home/Home';
import Explore from './components/Explore/Explore';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/explore" element={<Explore />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
