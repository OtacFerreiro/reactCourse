import { useState } from "react";

const NumberManager = () => {

    const [list, setList] = useState([{id: 1, label: 'Nro 1', value: 2}, {id: 2, label: 'Nro 2', value: 3}, {id: 3, label: 'Nro 3', value: 4}])
    const [sum, setSum] = useState(0);

    const handleSumNumbers = () => {
        let total = 0
        list.map(number => (
            total += number.value
        ))

        setSum(sum + total)
    }

    const deleteNumber = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setList((prevNumber) => {
            return prevNumber.filter( number => randomNumber !== number.id);
        });
    }

    return (
        <div>
            <p>Valores disponíveis:</p>
            <ol>
                {list.map( (number, i) => (
                    <li key={i}><label>{number.label}</label>: {number.value}</li>
                ))}
            </ol>

            <button onClick={handleSumNumbers}>Somar</button>
            <button onClick={deleteNumber}>Excluir</button>
            <p><label>Soma</label>: {sum}</p>
        </div>
  )
}

export default NumberManager