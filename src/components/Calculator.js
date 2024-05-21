
//

//Componentes de layout
import Button from './layout/Button'
import Input from './layout/Input'

//CSS
import style from './Calculator.module.css'

function Calculator() {
  return (
    <div className={style.container}>
        <Input type="text"/>

        <div className={style.containerBtns}>
            <Button value="AC" text="AC" id="operador" />
            <Button value="DEL" text="DEL" id="operador" />
            <Button value="%" text="%" id="operador" />
            <Button value="/" text="/" id="operador" />

            <Button value="7" text="7" />
            <Button value="8" text="8" />
            <Button value="9" text="9" />
            <Button value="*" text="*" id="operador" />

            <Button value="4" text="4" />
            <Button value="5" text="5" />
            <Button value="6" text="6" />
            <Button value="+" text="+" id="operador" />

            <Button value="1" text="1" />
            <Button value="2" text="2" />
            <Button value="3" text="3" />
            <Button value="-" text="-" id="operador" />
            
            <Button value="0" text="0" />
            <Button value="00" text="00" />
            <Button value="." text="." />
            <Button value="=" text="=" id="operador" />

        </div>
    </div>
  )
}

export default Calculator