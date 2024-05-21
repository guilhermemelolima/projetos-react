import style from './Input.module.css'

function Input({type, value}) {
  return (
    <input type={type} className={style.inputText} value={value} readOnly/>
  )
}

export default Input