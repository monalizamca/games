import React, { useState } from "react";
import './JogoDaVelha.css';

const JogoDaVelha = () => {
    const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
    const [primeiroJogador, setPrimeiroJogador] = useState(Math.random() < 0.5 ? "X" : "O");
    const [vencedor, setVencedor] = useState(null);

    const verificarVencedor = (novoTabuleiro) => {
        const combinacoesWin = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]       
        ];
    
        for (let combinacao of combinacoesWin) {
            const [a, b, c] = combinacao;
            if (novoTabuleiro[a] && novoTabuleiro[a] === novoTabuleiro[b] && novoTabuleiro[a] === novoTabuleiro[c]) {
                return novoTabuleiro[a]; 
            }
        } 
    
        return novoTabuleiro.every(celula => celula) ? "Empate" : null; 
    };

    const handleClick = (index) => {
        if (tabuleiro[index] || vencedor) return;

        const novoTabuleiro = [...tabuleiro];
        novoTabuleiro[index] = primeiroJogador;
        setTabuleiro(novoTabuleiro);

        const resultado = verificarVencedor(novoTabuleiro);
        if (resultado) {
            setVencedor(resultado);
        } else {
            setPrimeiroJogador(primeiroJogador === "X" ? "O" : "X");
        }
    };

    const reiniciarJogo = () => {
        setTabuleiro(Array(9).fill(null));
        setPrimeiroJogador(Math.random() < 0.5 ? "X" : "O");
        setVencedor(null);
    };

    return (
        <div className="Velha">
            <h2 className="Velha_titulo">
                {vencedor 
                    ? (vencedor === "Empate" ? "Empate!" : `Vencedor: ${vencedor}`)
                    : `Jogador atual: ${primeiroJogador}`
                }
            </h2>
            <div className="Velha_board">
                {tabuleiro.map((celula, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleClick(index)}
                        className={`Velha_button ${celula ? `Velha_button--${celula.toLowerCase()}` : ''}`}
                        disabled={vencedor || celula}
                    >
                        {celula}
                    </button>
                ))}
            </div>
            {(vencedor || tabuleiro.every(celula => celula)) && (
                <button className="Velha_reset" onClick={reiniciarJogo}>
                    Reiniciar Jogo
                </button>
            )}
        </div>
    );
}

export default JogoDaVelha; 