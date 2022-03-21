import { useEffect, useState } from "react"
import agent from "../api/agent"

export default function Resultado(){
    const [quantidadeFichas, setQuantidadeFichas] = useState<number>()

    useEffect(() => {
        agent.FichaApi.getQuantity().then((r : {}) => {
            console.log(r)
        })
    }, [])

    return(
        <>
            <h1>Resultado</h1>
        </>
    )
}