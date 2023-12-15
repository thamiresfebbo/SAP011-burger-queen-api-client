import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </div>



  );
}

export default App;
