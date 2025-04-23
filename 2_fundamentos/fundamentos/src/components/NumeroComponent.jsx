const NumeroComponents = () => {

    let number1 = 10
    let number2 = 12
    let sum = 0;

    const handleSumNumbers = (e) => {
        console.log(number1 + number2);
    }

    return(
        <div>
            <h1>Imprimindo valores</h1>
            
            <div>
                <p>Valores disponíveis:</p>
                <ol>
                    <li><label>Nro 1</label>: {number1}</li>
                    <li><label>Nro 2</label>: {number2}</li>
                    <li><label>Soma</label>: {sum}</li>
                </ol>
                <br/>
                <button onClick={handleSumNumbers}>Somar</button>
            </div>
        </div>
    )
}

export default NumeroComponents