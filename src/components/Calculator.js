
// Imports do react
import {useState} from 'react';

//Componentes de layout
import Button from './layout/Button';
import Input from './layout/Input';

//CSS
import style from './Calculator.module.css';

function Calculator() {

    const [operacao, setOperacao] = useState("");
    
    function calcula(operacao){

        const vetOperacao = operacao.split(" ");
        console.log(vetOperacao);

        for (let i = 0; i < vetOperacao.length; i++) {
            if (vetOperacao[i] === "*") {
                console.log("Achei um * em " + i)
            } else if (vetOperacao[i] === "/") {
                console.log("Achei um / em " + i)
            } else if (vetOperacao[i] === "+") {
                console.log("Achei um + em " + i)
            } else if (vetOperacao[i] === "-") {
                console.log("Achei um - em " + i)
            }
        }

        // FINDINDX
        // const vetor = ['apple', 'banana', 'orange', 'grape'];
        // const stringParaEncontrar = 'banana';

        // const indice = vetor.findIndex(elemento => elemento === stringParaEncontrar);
        // if (indice !== -1) {
        // console.log(`${stringParaEncontrar} foi encontrado no índice ${indice}.`);
        // } else {
        // console.log(`${stringParaEncontrar} não foi encontrado no vetor.`);
        // }


    }
 
    function handleClick(value) {
        const operadores = ['+','-','*','/','%'] ;

        if (value === 'AC'){
            setOperacao('');

        }else if (value === 'DEL') {
            setOperacao((prev) => prev.slice(0, -1));

        }else if(operadores.includes(value)){
            if (operacao === "" || !operadores.includes(operacao.slice(-1))){
                setOperacao((prev) => {
                    if (prev === "" || prev.slice(-1) === " ") {
                        return prev + value
                    }else{
                        return prev + " " + value
                    }
                });
            }
        }else if(value === '='){
            calcula(operacao);

        }else{
            setOperacao((prev) => prev + value);
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