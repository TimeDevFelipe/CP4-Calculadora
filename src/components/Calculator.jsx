import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import '../css/Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputNumber = (num) => {
        if (waitingForOperand) {
            setDisplay(String(num));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            let result;

            switch (operation) {
                case '+':
                    result = currentValue + inputValue;
                    break;
                case '-':
                    result = currentValue - inputValue;
                    break;
                case '*':
                    result = currentValue * inputValue;
                    break;
                case '/':
                    result = inputValue !== 0 ? currentValue / inputValue : 0;
                    break;
                default:
                    return;
            }

            setPreviousValue(result);
            setDisplay(String(result));
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const calculate = () => {
        performOperation(null);
        setOperation(null);
        setPreviousValue(null);
        setWaitingForOperand(true);
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="calculator-header">
                    <h1>Calculadora</h1>
                </div>

                <Display value={display} />

                <div className="buttons-grid">
                    {/* Row 1 */}
                    <Button
                        onClick={clear}
                        className="btn-clear span-2"
                        text="Clear"
                    />
                    <Button
                        onClick={() => performOperation('/')}
                        className="btn-operation"
                        text="÷"
                    />
                    <Button
                        onClick={() => performOperation('*')}
                        className="btn-operation"
                        text="×"
                    />

                    {/* Row 2 */}
                    <Button
                        onClick={() => inputNumber(7)}
                        className="btn-number"
                        text="7"
                    />
                    <Button
                        onClick={() => inputNumber(8)}
                        className="btn-number"
                        text="8"
                    />
                    <Button
                        onClick={() => inputNumber(9)}
                        className="btn-number"
                        text="9"
                    />
                    <Button
                        onClick={() => performOperation('-')}
                        className="btn-operation"
                        text="−"
                    />

                    {/* Row 3 */}
                    <Button
                        onClick={() => inputNumber(4)}
                        className="btn-number"
                        text="4"
                    />
                    <Button
                        onClick={() => inputNumber(5)}
                        className="btn-number"
                        text="5"
                    />
                    <Button
                        onClick={() => inputNumber(6)}
                        className="btn-number"
                        text="6"
                    />
                    <Button
                        onClick={() => performOperation('+')}
                        className="btn-operation"
                        text="+"
                    />

                    {/* Row 4 */}
                    <Button
                        onClick={() => inputNumber(1)}
                        className="btn-number"
                        text="1"
                    />
                    <Button
                        onClick={() => inputNumber(2)}
                        className="btn-number"
                        text="2"
                    />
                    <Button
                        onClick={() => inputNumber(3)}
                        className="btn-number"
                        text="3"
                    />
                    <Button
                        onClick={calculate}
                        className="btn-equals span-vertical"
                        text="="
                    />

                    {/* Row 5 */}
                    <Button
                        onClick={() => inputNumber(0)}
                        className="btn-number span-2"
                        text="0"
                    />
                    <Button
                        onClick={inputDecimal}
                        className="btn-number"
                        text="."
                    />
                </div>

                <div className="team-info">
                    <p>Desenvolvido pela Equipe</p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;