

const UserDetails = ({pessoas}) => {

    const labelApto = 'Apto';
    const labelInapto = 'Inapto';
    const labelHabMsg = 'para retirar a Carteira de Habilitação';

    return (
        <div className='produto-panel'>
            <h1>Motoristas:</h1>

            <ul>
                {pessoas && pessoas.length > 0 && pessoas.map((pessoa) => (
                        <li key={pessoa.id}>
                            <label>
                                <b>Nome:</b> {pessoa.nome}
                            </label>
                            <br/>
                            <label>
                                <b>Idade:</b> {pessoa.idade}
                            </label>
                            <br/>
                            <label>
                                <b>Profissão:</b> {pessoa.profissao}
                            </label>
                            <br/>
                            <p>{ pessoa.idade >= 18 ? labelApto : labelInapto} {labelHabMsg}</p>
                        </li>
                    )               
                )}
            </ul>
        </div>
    )
}

export default UserDetails