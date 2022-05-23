import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './Pages/Home/Home';
import Register from './Pages/Login/Register/Register';








function App() {


  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
