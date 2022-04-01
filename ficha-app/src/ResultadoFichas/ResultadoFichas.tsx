import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Button, Card, Statistic, Progress } from "semantic-ui-react";
import agent from "../api/agent";
import { TotalFichas } from "../models/totalFichas";
import { useStore } from "../stores/store";
import styles from './styles.module.scss';
import Resultado from '../resultadoCadastro/ResultadoCadastro';

export default observer(function ResultadoFichas() {
    const { modalStore } = useStore();
    const [totalFichas, setTotalFichas] = useState<TotalFichas>();
    const [porcentagemAlcancada, setPorcentagemAlcancada] = useState<number>(0);
    const [objetivo, setObjetivo] = useState<number>(100);

    useEffect(() => {
        agent.FichaApi.getQuantity().then((r : TotalFichas) => {
            r.total = 80
            setTotalFichas(r)

            var porcento = 0;
            if(totalFichas?.total)
                 porcento = totalFichas!.total/objetivo *100;
            while (porcento > 95) {
                setObjetivo(objetivo*1.5)
                porcento = totalFichas!.total/objetivo *100;
            }
            setPorcentagemAlcancada(porcento)

        }).catch((r) => {
            modalStore.openModal(<Resultado sucesso={false} messageError={r} />, false);
        })
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
