import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Para iniciar o jogo, clique no botão abaixo</p>
        <button onClick={startGame}>Começar</button>
    </div>
  )
}

export default StartScreen