import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import MyTextInput from '../common/MyTextInput';
import MySelectInput from '../common/MySelectInput';
import agent from '../api/agent';
import { IFicha } from '../models/ficha';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import Resultado from '../resultadoCadastro/ResultadoCadastro';


export default observer(function CadastroPage() {
    const {modalStore} = useStore();
    const [initialFicha, setInitialFicha] = useState<IFicha>({
        phone: '',
        name: '',
        quantity: null
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
        name: Yup.string().required("Preencha o campo nome"),
        phone: Yup.string().required("Preencha o campo celular").matches(/^[0-9]+$/, "apenas número").min(11, "Preencha o campo celular com um número valido").max(11, "Preencha o campo celular com um número valido"),
        quantity: Yup.number().positive().nullable(true).required("Selecione o número de fichas do cadastro")

    })

    function fecharModal() {
        window.location.reload()
    }

    const handleFormSubmit = (ficha: IFicha) => {
        // ficha.phone = ficha.phone.toString()
        console.log(ficha)
        // agent.FichaApi.createTicket(ficha).then(() => {
        //     modalStore.openModal(<Resultado sucesso={true}/>, true);
        // }).catch(r => {
        //     console.log(r)
        //     modalStore.openModal(<Resultado sucesso={false} messageError={"dflds aflas flsafls  jfklsd lal sa"} />, false);
        // })

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
                        <MyTextInput placeholder="Nome" name="name" />
                        <MyTextInput placeholder="Celular" type='number' name="phone" />
                        <MySelectInput
                            placeholder='Selecione a quantidade de Fichas que a pessoa está comprando'
                            name="quantity"
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
})