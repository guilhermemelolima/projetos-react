import style from './Input.module.css'

function Input({type}) {
  return (
    <input type={type} id={style.input}/>
  )
}

export default Input