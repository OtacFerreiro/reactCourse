import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <p>Fim de Jogo!</p>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default GameOver