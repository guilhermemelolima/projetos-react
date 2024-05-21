
import style from './Button.module.css'

function Button({value, text, id, onClick}) {
    return <button value={value}  className={style.btn}  
        id = {`${id === 'operador' ? style.operador: '' }`} onClick={() => onClick(value)}> 
        {text} 
    </button> 
}

export default Button