//import { CounterContext } from "../context/CounterContext";
//import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext.js";

const Clients = () => {
    const { counter } = useCounterContext();
    return(
        <div>
            <h1>Clients</h1>

            <p>Valor do Contador: {counter}</p>

            <ChangeCounter />
        </div>
    );
}

export default Clients;