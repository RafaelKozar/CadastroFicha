import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import CadastroPage from './cadastro/CadastroPage';
import Resultado from './resultado/Resultado';


function App() {

  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<CadastroPage />} />
          <Route path='/resultado' element={<Resultado />} />
        </Routes>
      {/* </BrowserRouter> */}    

    </>
  );
}

export default App;
