import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import agent from "../api/agent"


interface IResultadoCadastroProps 
{
    sucesso?: boolean,
    messageError?: string
}

export default observer(function ResultadoCadastro({sucesso, messageError} : IResultadoCadastroProps){
    const [quantidadeFichas, setQuantidadeFichas] = useState<number>()    

    return(
        <>
            <h4>{sucesso ? "A ficha do cliente foi salva com sucesso" : '`{messageError}`' }</h4> 
            
        </>
    )
})