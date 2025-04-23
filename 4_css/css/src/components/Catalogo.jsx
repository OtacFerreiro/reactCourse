import { useState } from "react"
import CarDetails from "./CarDetails"


const Catalogo = () => {

    const [cars] = useState([
        {id: 1, name: 'Gol', label: 'VW'},
        {id: 2, name: 'Uno', label: 'Fiat'},
        {id: 3, name: 'Ka',  label: 'Ford'}
    ])

    return (
        <div>
            <h2>Detalhes</h2>
            {cars && cars.length > 0 && cars.map((car) => (
                    <CarDetails car={car} />
                ))
            }
        </div>
    )
}

export default Catalogo