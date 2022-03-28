import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import CadastroPage from './cadastro/CadastroPage';
import Resultado from './resultado/Resultado';
import { observer } from 'mobx-react-lite';
import ModalContainer from './modalContainer/ModalContainer';


function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <ModalContainer/>
        <Routes>
          <Route path='/' element={<CadastroPage />} />
          <Route path='/resultado' element={<Resultado />} />
        </Routes>
      {/* </BrowserRouter> */}    

    </>
  );
}

export default observer(App);
