import './App.css';

import { useEffect, useState } from "react";
import { useFetch } from './hooks/useFetch';

const URL = "http://localhost:3000/products";

function App() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const { data: items, httpConfig, loading, error } = useFetch(URL);

    //1 - Recuperar os produtos
    /* useEffect(() => {
        async function fetchData() {
        const response = await fetch(URL);
        const data = await response.json();

        setProducts(data);
        }

        fetchData();    
    }, []); */

    //2 - Adicionar os produtos
    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price
        };

        /*const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)
        });

        const addedProduct = await response.json();

        //3 - Carregamento
        setProducts((prevProducts) => [...prevProducts, addedProduct]); */
        httpConfig(product, "POST");

        setName("");
        setPrice("");
    }

    const buildProdutosList = () => {
        return (
            <ul>
                {Array.isArray(items) && items.map((product) => (
                <li key={product.id}>
                    <div className="produto">
                        <div>{product.name} - R$: {product.price} </div>
                        <button onClick={() => removerProduto(product.id)} >Remover</button>
                    </div>
                </li>
                ))}
            </ul>
        );
    }

    const removerProduto = (id) => {
        httpConfig(id, "DELETE");
    }

    const buildInserirProdutoForm = () => {
        return (
            <div className='add-product'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label>
                        Preço:
                        <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                    </label>

                    {loading && <input type="submit" disabled={true} value="Aguarde..." />}
                    {!loading && <input type="submit" value="Adicionar" />}
                </form>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Lista de Produtos</h1> 

            {loading && <p>Carregando dados ...</p>}

            {error && <p>{error}</p>}

            {!error && buildProdutosList()}

            {buildInserirProdutoForm()}
        </div>
    );
}

export default App;
