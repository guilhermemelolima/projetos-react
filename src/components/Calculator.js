
// Imports do react
import {useState} from "react";

//Componentes de layout
import Button from "./layout/Button";
import Input from "./layout/Input";

//CSS
import style from "./Calculator.module.css";

function Calculator() {
    const [operacao, setOperacao] = useState("");
    function calcular(vetOperacao) {
        let resultado = 0;

        for (let i = 0; i < vetOperacao.length; i++) {
            if (vetOperacao[i] === "*") {
                if (vetOperacao[i+2] === "%"){
                    resultado = parseFloat(vetOperacao[i - 1]) * (parseFloat(vetOperacao[i + 1])/ 100);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }else{
                    resultado = parseFloat(vetOperacao[i - 1]) * parseFloat(vetOperacao[i + 1]);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }
                
            } else if (vetOperacao[i] === "/") {
                if (vetOperacao[i + 1] === "0" || vetOperacao[i + 1] === "00"){
                    return setOperacao("Divisão é possivel :(")
                }
                if (vetOperacao[i+2] === "%"){
                    resultado = parseFloat(vetOperacao[i - 1]) / (parseFloat(vetOperacao[i + 1])/ 100);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }else{
                    resultado = parseFloat(vetOperacao[i - 1]) / parseFloat(vetOperacao[i + 1]);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }
            }
        }

        for (let i = 0; i < vetOperacao.length; i++) {
            if (vetOperacao[i] === "+") {
                if (vetOperacao[i+2] === "%"){
                    resultado = parseFloat(vetOperacao[i - 1]) + (parseFloat(vetOperacao[i + 1])/ 100);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }else{
                    resultado = parseFloat(vetOperacao[i - 1]) + parseFloat(vetOperacao[i + 1]);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }
            } else if (vetOperacao[i] === "-") {
                if (vetOperacao[i+2] === "%"){
                    resultado = parseFloat(vetOperacao[i - 1]) - (parseFloat(vetOperacao[i + 1])/ 100);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }else{
                    resultado = parseFloat(vetOperacao[i - 1]) - parseFloat(vetOperacao[i + 1]);
                    vetOperacao.splice(i - 1, 3, resultado.toString());
                    i -= 2;
                }
            }
        }
        setOperacao(resultado.toString());
    }
    
 
    function handleClick(value) {
        const operadores = ["+","-","*","/","%"] ;

        if (value === "AC"){
            setOperacao("");
        }else if (value === "DEL") {
            setOperacao((prev) => {
                if (prev !== null){
                    let array = prev.split("")
                    array.pop()
                    return array.join("")
                }else{
                    return "";
                }
            });
        }else if (value === "-" && operacao === "") {
            setOperacao(prevState => prevState + value);
        }else if(operadores.includes(value)){
            if (operacao !== "") {
                if (operacao[operacao.length - 1] === " " && !operadores.includes(operacao[operacao.length-2])){
                    setOperacao(prevState => prevState + value )
                }else if(!operadores.includes(operacao[operacao.length-2]) && !operadores.includes(operacao[operacao.length-1])){
                    setOperacao(prevState => prevState + " " + value )
                }
                if (operacao[operacao.length -1] === "%"){
                    setOperacao(prevState => prevState + " " + value)
                }
            }
        }else if(value === "="){
            let vetOperacao = operacao.split(" ")
            if(vetOperacao[vetOperacao.length - 1] === "%"){
                calcular(vetOperacao)
            }
            if (operadores.includes(vetOperacao[vetOperacao.length - 1])) {
                vetOperacao.pop()
                if (vetOperacao.length > 2) {
                    calcular(vetOperacao)                    
                }
            }else{
                calcular(vetOperacao)
            }
        }else{
            setOperacao((prevState) => {
                if(operacao === '-'){
                    return prevState + value
                }
                if (!operadores.includes(prevState[prevState.length - 1])) {
                    return prevState + value
                }else{
                    return prevState + " " + value
                }
            });
        }
    }

    return (
    <div className={style.container}>
        <Input type="text" value={operacao} />

        <div className={style.containerBtns}>
            <Button value="AC" text="AC" id="operador" onClick={handleClick}/>
            <Button value="DEL" text="DEL" id="operador" onClick={handleClick}/>
            <Button value="%" text="%" id="operador" onClick={handleClick}/>
            <Button value="/" text="/" id="operador" onClick={handleClick}/>

            <Button value="7" text="7" onClick={handleClick}/>
            <Button value="8" text="8" onClick={handleClick}/>
            <Button value="9" text="9" onClick={handleClick}/>
            <Button value="*" text="*" id="operador" onClick={handleClick}/>

            <Button value="4" text="4" onClick={handleClick}/>
            <Button value="5" text="5" onClick={handleClick}/>
            <Button value="6" text="6" onClick={handleClick}/>
            <Button value="+" text="+" id="operador" onClick={handleClick}/>

            <Button value="1" text="1" onClick={handleClick} />
            <Button value="2" text="2" onClick={handleClick}/>
            <Button value="3" text="3" onClick={handleClick}/>
            <Button value="-" text="-" id="operador" onClick={handleClick}/>
            
            <Button value="0" text="0" onClick={handleClick}/>
            <Button value="00" text="00" onClick={handleClick}/>
            <Button value="." text="." onClick={handleClick}/>
            <Button value="=" text="=" id="operador" onClick={handleClick}/>

        </div>
    </div>)
}

export default Calculator