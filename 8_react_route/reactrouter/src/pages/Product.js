import { useParams, Link } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();

    const URL = "http://localhost:3000/products/" + id;

    const {data: product, loading, error} = useFetch(URL);

    return (
        <>
            <p>Id do produto: {id}</p>

            {error && <p>Ocorreu um erro ...</p>}
            {loading && <p>Carregando ...</p>}
            {!error && product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$: {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    );
}

export default Product;