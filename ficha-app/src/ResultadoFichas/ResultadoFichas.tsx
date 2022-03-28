import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import agent from "../api/agent";


export default observer(function ResultadoFichas(){   
    const [resultado, setResultado] = useState<any>();
    useEffect(() => {
        agent.FichaApi.getQuantity().then(r => {
            console.log(r)
            setResultado(r)
        })
    })

    return(
        <>
            <h1>Resultado Fichas</h1>
        </>
    )
})