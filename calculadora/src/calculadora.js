import React from 'react';
import './calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

function Calculadora() {
        const[num, setNum] = useState(0);
        const[oldnum, setOldNum] = useState(0);
        const[operator, setOperator] = useState();
        function inputNum(e) {
            var input= e.target.value;
            if(num===0){
                setNum(input);
            }
            else{
                setNum(num + input);
            }
        }
        function clear(e){
            setNum(0);
        }
        function porcentagem(){
            setNum(num / 100);
        }
        function changeSign() {
            if(num >0){
                setNum(-num);
            }
            else{
                setNum(Math.abs(num));
            }
        }
        function operatorHandler(e){
           var operatorInput=e.target.value;
           setOperator(operatorInput)
           setOldNum(num);
           setNum(0);
        }
        function calculate() {
            if(operator === "/"){
                setNum(parseFloat(oldnum) / parseFloat(num));
            }
            else if(operator === "x"){
                setNum(parseFloat(oldnum) * parseFloat(num));
            }
            else if(operator === "+"){
                setNum(parseFloat(oldnum) + parseFloat(num));
            }
            else if(operator === "-"){
                setNum(parseFloat(oldnum) - parseFloat(num));
            }
            
        }

        return(
           <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12}/>
                    <h1 className='result'>{num}</h1>
                    <button className='sign' onClick={clear}>AC</button>
                    <button className='sign' onClick={changeSign}>+/-</button>
                    <button className='sign'onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operatorHandler} value="/">/</button>
                    <button className='gray' onClick={inputNum} value={7}>7</button>
                    <button className='gray' onClick={inputNum} value={8}>8</button>
                    <button className='gray' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value="x">X</button>
                    <button className='gray' onClick={inputNum} value={4}>4</button>
                    <button className='gray' onClick={inputNum} value={5}>5</button>
                    <button className='gray' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value="-">-</button>
                    <button className='gray' onClick={inputNum} value={1}>1</button>
                    <button className='gray' onClick={inputNum} value={2}>2</button>
                    <button className='gray' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value="+">+</button>
                    <button className='zero' onClick={inputNum} value={0}>0</button>
                    <button className='gray' onClick={inputNum} value=".">,</button>
                    <button className='sign' onClick={calculate}>=</button>

                </div>
            </Container>
           </div>
        )
}
export default Calculadora;