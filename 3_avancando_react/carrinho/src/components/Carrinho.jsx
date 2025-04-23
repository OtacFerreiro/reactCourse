

const Carrinho = ({carrinho, removerItem}) => {
    
    function remover (item) {
        return removerItem(item)
    }

    return (
        <div className="carrinho-panel">
            <h1>Itens do Carrinho</h1>

            <ol>
                {carrinho.map((item) => (
                        <li key={item.codigo}>
                            <label>
                                <input name={item.referencia} value={item.qtd}></input>
                                {item.referencia}-{item.descricao}
                            </label>
                            <button onClick={() => remover(item)}>Remover</button>
                        </li>
                    )               
                )}
            </ol>
        </div>
    )
}

export default Carrinho