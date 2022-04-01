import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Button, Card, Statistic, Progress } from "semantic-ui-react";
import agent from "../api/agent";
import styles from './styles.module.scss';

export default observer(function ResultadoFichas() {
    const [resultado, setResultado] = useState<any>();
    useEffect(() => {
        agent.FichaApi.getQuantity().then(r => {
            
            console.log(r)
            setResultado(r)
        })
    }, [])

    return (
        <div className={styles.containerMain}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.content} >
                        <Statistic inverted>
                            <Statistic.Value>50</Statistic.Value>
                            <Statistic.Label>Downloads</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content} >
                    <Statistic inverted>
                            <Statistic.Value>50</Statistic.Value>
                            <Statistic.Label>Downloads</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
            </div>
            <Progress percent={20} indicating progress color="green"/>
            <div className={styles.btn}><Button positive >Sortear</Button></div>

        </div>



    )
})
