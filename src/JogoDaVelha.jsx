import React from "react";
import './JogoDaVelha.css';

const JogoDaVelha = () => (
    <div className="Velha">
        <div className="Velha_board">
            {Array.from({ length: 9}).map((_, index) => (
                <button key={index} type='button'>Press</button>
            ))}

        </div>
    </div>
)

export default JogoDaVelha;