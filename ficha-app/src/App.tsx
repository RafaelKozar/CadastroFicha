import React, { useState } from 'react';
import './App.css';
import { Button, Modal } from 'semantic-ui-react'
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import MyTextInput from './common/MyTextInput';
import MySelectInput from './common/MySelectInput';
import agent from './api/agent';
import { IFicha } from './models/ficha';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroPage from './cadastro/CadastroPage';
import Resultado from './resultado/Resultado';


function App() {


  const [initialFicha, setInitialFicha] = useState<IFicha>({
    celular: '',
    nome: '',
    quantidade: null
  });


  function gerarOpcoesQuantidadeFicha(): any {
    var obj = [{}]
    for (var it = 1; it <= 10; it++) {
      obj[it] = {
        key: it,
        text: it,
        value: it
      }
    }
    return obj
  }
  const fichaOpcoesQuantidade = gerarOpcoesQuantidadeFicha()

  const validacaoFicha = Yup.object({
    nome: Yup.string().required("Preencha o campo nome"),
    celular: Yup.string().required("Preencha o campo celular").matches(/^[0-9]+$/, "apenas número").min(11, "Preencha o campo celular com um número valido").max(11, "Preencha o campo celular com um número valido"),
    quantidade: Yup.number().positive().nullable(true).required("Selecione o número de fichas do cadastro")

  })

  function fecharModal() {
    window.location.reload()
  }

  const handleFormSubmit = (ficha: IFicha) => {
    ficha.celular = ficha.celular.toString()
    console.log(ficha)
    agent.FichaApi.create(ficha).then(() => {
    })

    // window.location.reload()
  }


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
