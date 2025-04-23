import NumberManager from './components/NumberManager';

import './App.css';

import Funko from './assets/FunkoOtac.png';
import ConditionalRender from './components/ConditionalRender';
import { useState } from 'react';
import ShowStreamer from './components/ShowStreamer';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

  const [streamers] = useState([
    {id: '1', name: 'Rodrigues', channel: 'ZombLandTV'},
    {id: '2', name: 'Karvalho', channel: 'KARVAALHO'},
    {id: '3', name: 'Murrandra', channel: 'Murrandra'},
    {id: '4', name: 'Fefito', channel: 'fefitolipe'},
    {id: '5', name: 'Junior', channel: 'iitjunior'},
    {id: '6', name: 'Lindinho', channel: 'felipemenegheti'}
  ]);

  function showMessage() {
    console.log("Botão Clicado");
  }

  return (
    <div className="App">
      <h1>Seção 3</h1>

      <NumberManager/>
      <ConditionalRender/>
      <ExecuteFunction myFunction={showMessage} />

      {streamers.map((streamer) => (
          <ShowStreamer key={streamer.id} streamerName={streamer.name} streamerChannel={streamer.channel} />
        )
      )}
      
      <br/>

      <div>
          <img src="/react.jpg" alt="Capa curso React" />
      </div>

      <br/>

      <div>
        <img src={Funko} alt="Funko do Otac" />
      </div>
    </div>
  );
}

export default App;
