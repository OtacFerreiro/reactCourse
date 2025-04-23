import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);
    const [name] = useState("Neto");

    return (
        <div>
            <h1>Serei exibido?</h1>
            {x && <p>Sim, serei.</p>}

            <h1>Usando Condição Ternária</h1>
            {name === "Otac" ? (
                <p>Sim, meu nome é Otac</p>
            ) : (
                <p>Não, meu nome é não Otac</p>
            )}
        </div>
        
    )
}

export default ConditionalRender