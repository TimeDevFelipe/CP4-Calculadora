import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../css/Calculator.css';

const Calculadora = () => {
    const [visor, setVisor] = useState('0');
    const [valorAnterior, setValorAnterior] = useState(null);
    const [operacao, setOperacao] = useState(null);
    const [esperandoOperando, setEsperandoOperando] = useState(false);

    const inserirNumero = (numero) => {
        if (esperandoOperando) {
            setVisor(String(numero));
            setEsperandoOperando(false);
        } else {
            setVisor(visor === '0' ? String(numero) : visor + numero);
        }
    };

    const inserirDecimal = () => {
        if (esperandoOperando) {
            setVisor('0.');
            setEsperandoOperando(false);
        } else if (visor.indexOf('.') === -1) {
            setVisor(visor + '.');
        }
    };

    const limpar = () => {
        setVisor('0');
        setValorAnterior(null);
        setOperacao(null);
        setEsperandoOperando(false);
    };

    const realizarOperacao = (proximaOperacao) => {
        const valorEntrada = parseFloat(visor);

        if (valorAnterior === null) {
            setValorAnterior(valorEntrada);
        } else if (operacao) {
            const valorAtual = valorAnterior || 0;
            let resultado;

            switch (operacao) {
                case '+':
                    resultado = valorAtual + valorEntrada;
                    break;
                case '-':
                    resultado = valorAtual - valorEntrada;
                    break;
                case '*':
                    resultado = valorAtual * valorEntrada;
                    break;
                case '/':
                    resultado = valorEntrada !== 0 ? valorAtual / valorEntrada : 0;
                    break;
                default:
                    return;
            }

            setValorAnterior(resultado);
            setVisor(String(resultado));
        }

        setEsperandoOperando(true);
        setOperacao(proximaOperacao);
    };

    const calcular = () => {
        realizarOperacao(null);
        setOperacao(null);
        setValorAnterior(null);
        setEsperandoOperando(true);
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="calculator-header">
                    <h1>Calculadora</h1>
                </div>

                <Display value={visor} />

                <div className="buttons-grid">
                    <Button
                        onClick={limpar}
                        className="btn-clear span-2"
                        text="Limpar"
                    />
                    <Button
                        onClick={() => realizarOperacao('/')}
                        className="btn-operation"
                        text="÷"
                    />
                    <Button
                        onClick={() => realizarOperacao('*')}
                        className="btn-operation"
                        text="×"
                    />

                    <Button
                        onClick={() => inserirNumero(7)}
                        className="btn-number"
                        text="7"
                    />
                    <Button
                        onClick={() => inserirNumero(8)}
                        className="btn-number"
                        text="8"
                    />
                    <Button
                        onClick={() => inserirNumero(9)}
                        className="btn-number"
                        text="9"
                    />
                    <Button
                        onClick={() => realizarOperacao('-')}
                        className="btn-operation"
                        text="−"
                    />

                    <Button
                        onClick={() => inserirNumero(4)}
                        className="btn-number"
                        text="4"
                    />
                    <Button
                        onClick={() => inserirNumero(5)}
                        className="btn-number"
                        text="5"
                    />
                    <Button
                        onClick={() => inserirNumero(6)}
                        className="btn-number"
                        text="6"
                    />
                    <Button
                        onClick={() => realizarOperacao('+')}
                        className="btn-operation"
                        text="+"
                    />

                    <Button
                        onClick={() => inserirNumero(1)}
                        className="btn-number"
                        text="1"
                    />
                    <Button
                        onClick={() => inserirNumero(2)}
                        className="btn-number"
                        text="2"
                    />
                    <Button
                        onClick={() => inserirNumero(3)}
                        className="btn-number"
                        text="3"
                    />
                    <Button
                        onClick={calcular}
                        className="btn-equals span-vertical"
                        text="="
                    />

                    <Button
                        onClick={() => inserirNumero(0)}
                        className="btn-number span-2"
                        text="0"
                    />
                    <Button
                        onClick={inserirDecimal}
                        className="btn-number"
                        text="."
                    />
                </div>

                <div className="team-info">
                    <p>Desenvolvido por UnlimitTechSolution</p>
                </div>
            </div>
        </div>
    );
};

export default Calculadora;