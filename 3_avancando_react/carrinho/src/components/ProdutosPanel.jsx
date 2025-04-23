
const ProdutosPanel = ({produtos, addCarrinho}) => {

    function incluirProduto (produto) {
        return addCarrinho(produto)
    }

    return (
        <div className='produto-panel'>
            <h3>Produtos Disponíveis:</h3>

            <ol>
                {produtos && produtos.length > 0 && produtos.map((produto) => (
                        <li key={produto.codigo}>
                            <label>
                                {produto.referencia}-{produto.descricao}
                            </label>
                            <button onClick={() => incluirProduto(produto)}>Adicionar</button>
                        </li>
                    )               
                )}
            </ol>
        </div>
    )
}

export default ProdutosPanel