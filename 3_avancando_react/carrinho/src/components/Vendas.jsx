import { useState } from 'react';
import Carrinho from './Carrinho';
import ProdutosPanel from './ProdutosPanel';

const Vendas = () => {

    const [produtos] = useState([
        {codigo: '1', referencia: '1001', descricao: 'Lapis Grafite' },
        {codigo: '2', referencia: '1002', descricao: 'Caneta Azul' },
        {codigo: '3', referencia: '1003', descricao: 'Caneta Vermelha' },
        {codigo: '4', referencia: '1004', descricao: 'Borracha' },
        {codigo: '5', referencia: '1005', descricao: 'Caderno' }
    ]);

    const [carrinho, setCarrinho] = useState([])

    function addCarrinho(produto) {
        if(produto) {
            setCarrinho((prevState) => ([...prevState, produto]))
        }
    }

    function removerItem(item) {
        if(item) {
            setCarrinho((prevState) => {
                return prevState.filter( prod => item.referencia !== prod.referencia);
            })
        }
    }
    
    return (
      <div className="App">
          <ProdutosPanel produtos={produtos} addCarrinho={addCarrinho} />
          <Carrinho carrinho={carrinho} removerItem={removerItem} />
      </div>
    );
}

export default Vendas