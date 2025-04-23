//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext.js";
import { useTitleColorContext } from "../hooks/useTitleColorContext.js";

const About = () => {
    const { counter } = useCounterContext();
    const { color } = useTitleColorContext();

    return(
        <div>
            <h1 style={{color: color}}>About</h1>

            <p>Valor do Contador: {counter}</p>

            <ChangeCounter />
        </div>

        
    );
}

export default About;