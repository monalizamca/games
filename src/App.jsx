import { useState } from 'react'
import JogoDaVelha from './JogoDaVelha.jsx'
import './index.css'
import JogoDaMemoria from './JogoDaMemoria.jsx'

function App() {
    const [jogoAberto, setJogoAberto] = useState(null);

    return (
      <div className='App'>
        <div className='header'>
        <h1>Momo <span className='cor-titulo'>Games</span></h1>
        </div>
        {jogoAberto === null ? (
          <div className='menu'>
            <div className='game-menu'>
              <div className='game-container'>
            <img src="src/assets/tictactoe2.webp" alt="Jogo da Velha" className='img-tictactoe'/>
            <button onClick={() => setJogoAberto('JogoDaVelha')}>Jogo da Velha</button>
            </div>
            <div className='game-container'>
            <img src='src/assets/memoria.jpg'alt='Jogo da Memória' className='img-memoria'/>
            <button onClick={() => setJogoAberto('JogoDaMemoria')}>Jogo da Memória</button>
            </div>
          </div>
          </div>
        ) : (
          <div className='menu-game'>
            {jogoAberto === 'JogoDaVelha' && <JogoDaVelha />}
            {jogoAberto === 'JogoDaMemoria' &&<JogoDaMemoria />}
            <button className='voltar' onClick={() => setJogoAberto(null)}>Voltar</button>
          </div>
        )}
      </div>
  );
}


export default App
