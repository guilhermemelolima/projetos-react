
import style from './Button.module.css'

function Button({value, text, id}) {
    if (id === 'operador'){
        return <button value={value} className={style.btn} id={style.operador}>{text}</button>
    }else{
        return <button value={value} className={style.btn} >{text}</button>
    }  
}

export default Button