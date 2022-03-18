import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import MyTextInput from '../common/MyTextInput';
import MySelectInput from '../common/MySelectInput';
import agent from '../api/agent';
import { IFicha } from '../models/ficha';
import styles from './styles.module.scss';

export default function CadastroPage() {

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
        <div className={styles.App}>
            <Formik
                validationSchema={validacaoFicha}
                enableReinitialize
                initialValues={initialFicha}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form onSubmit={handleSubmit} className="Form">
                        <MyTextInput placeholder="Nome" name="nome" />
                        <MyTextInput placeholder="Celular" type='number' name="celular" />
                        <MySelectInput
                            placeholder='Selecione a quantidade de Fichas que a pessoa está comprando'
                            name="quantidade"
                            options={fichaOpcoesQuantidade} />
                        <Button
                            disabled={!dirty || !isValid}
                            color='green'
                            type='submit'>Enviar</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}