import { observer } from "mobx-react-lite"
import { useCallback, useEffect, useState } from "react"
import { Button, Card, Statistic, Progress } from "semantic-ui-react";
import agent from "../api/agent";
import { TotalFichas } from "../models/totalFichas";
import { useStore } from "../stores/store";
import styles from './styles.module.scss';
import Resultado from '../resultadoCadastro/ResultadoCadastro';
import { Exception } from "sass";

export default observer(function ResultadoFichas() {
    const { modalStore } = useStore();
    const [totalFichas, setTotalFichas] = useState<TotalFichas>({ peoples: 0, total: 0 });
    const [porcentagemAlcancada, setPorcentagemAlcancada] = useState<number>(0);
    const [teste, setT] = useState<Number>()
    const [objetivo, setObjetivo] = useState<number>(100);

    

    useEffect(() => {        

        var objetivoCounter = objetivo
        var porcentoCalculado = 0
        agent.FichaApi.getQuantity().then((r : TotalFichas) => {
            r.total = 150                                   
            setTotalFichas(r)     

            porcentoCalculado = (r.total/objetivo) *100;
            while (porcentoCalculado > 98) {
                objetivoCounter = Math.round(objetivoCounter* 1.2)
                porcentoCalculado = Math.round((r!.total/objetivoCounter) *100);
            }
            setPorcentagemAlcancada(porcentoCalculado)
            setObjetivo(objetivoCounter)

        }).catch((r) => {
            modalStore.openModal(<Resultado sucesso={false} messageError={r} />, false);
        })

        // const getQuantiade = async () => {
        //     try {
        //         const r: TotalFichas = await agent.FichaApi.getQuantity();
        //         r.total = 95
        //         setTotalFichas(r)
        //         setT(r.total)
        //         setPorcentagemAlcancada((totalFichas!.total / objetivo) * 100);
        //         while (porcentagemAlcancada > 95) {
        //             setObjetivo(objetivo * 1.5)
        //             setPorcentagemAlcancada((totalFichas!.total / objetivo) * 100);
        //         }
        //     }
        //     catch(e ){
        //         console.log(e) 
        //         modalStore.openModal(<Resultado sucesso={false} messageError="Problema na hora de carregar o serviço" />, false);
        //     }

        // }
        // getQuantiade()                

    }, [])

    

    return (
        <div className={styles.containerMain}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.content} >
                        <Statistic inverted>
                            <Statistic.Value>{totalFichas?.peoples}</Statistic.Value>
                            <Statistic.Label>Pessoas Cadastradas</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content} >
                        <Statistic inverted>
                            <Statistic.Value>{totalFichas?.total}</Statistic.Value>
                            <Statistic.Label>Total de fichas vendidas</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
            </div>
            <div className={styles.progressdiv}>
                <span>Objetivo: {objetivo} fichas</span>
                <Progress percent={porcentagemAlcancada} indicating progress color="green" />
            </div>


            <div className={styles.btn}><Button positive >Sortear</Button></div>

        </div>



    )
})
