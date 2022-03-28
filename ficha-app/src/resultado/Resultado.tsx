import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import agent from "../api/agent"

export default observer(function Resultado(){
    const [quantidadeFichas, setQuantidadeFichas] = useState<number>()

    useEffect(() => {
        // agent.FichaApi.getQuantity().then((r : {}) => {
        //     console.log(r)
        // })
    }, [])

    return(
        <>
            <h1>Cadastrado com sucesso</h1>
        </>
    )
})