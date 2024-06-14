import React from 'react'

const Calculator = () => {
  return (
    <div>
      <div class="container">
            <div class="calculator">
                <input type="text" placeholder="0" id="output" />
                <button onclick="clr()">Clr</button>
                <button onclick="del()">DEL</button>
                <button onclick="display('%')">%</button>
                <button onclick="display('/')">/</button>
                <button onclick="display('7')">7</button>
                <button onclick="display('8')">8</button>
                <button onclick="display('9')">9</button>
                <button onclick="display('*')">*</button>
                <button onclick="display('4')">4</button>
                <button onclick="display('5')">5</button>
                <button onclick="display('6')">6</button>
                <button onclick="display('-')">-</button>
                <button onclick="display('1')">1</button>
                <button onclick="display('2')">2</button>
                <button onclick="display('3')">3</button>
                <button onclick="display('+')">+</button>
                <button onclick="display('.')">.</button>
                <button onclick="display('0')">0</button>
                <button onclick="calculate()" class="equal">=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator
