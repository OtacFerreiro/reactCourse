import "./Home.css";
//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext.js";
import { useTitleColorContext } from "../hooks/useTitleColorContext.js";

const Home = () => {
    //const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({type: color});
    }
    
    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>

            <p>Valor do Contador: {counter}</p>

            <ChangeCounter />

            <div>
                <button onClick={() => setTitleColor("RED")}>
                    Vermelho
                </button>

                <button onClick={() => setTitleColor("BLUE")}>
                    Azul
                </button>
            </div>
        </div>
    );
}

export default Home;