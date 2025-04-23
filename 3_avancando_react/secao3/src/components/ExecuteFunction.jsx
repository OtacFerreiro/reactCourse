

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h2>Recebendo Função do Pai</h2>
        <button onClick={myFunction}> Clique Aqui</button>
    </div>
  )
}

export default ExecuteFunction