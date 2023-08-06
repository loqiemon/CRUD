import { ChangeEventHandler } from "react";
import './Input.scss'

type InputTypes = 'button' | 'text' | 'checkbox' | 'date' | 'email' | 'file' | 'password' | 'submit'

type InputProps = {
    placeholder: string;
    name?: string;
    inputType?: InputTypes;
    error: boolean;
    onCheck: ChangeEventHandler<HTMLInputElement>;
    value: string;
}

function Input({placeholder, name, inputType, error, onCheck, value}: InputProps) {
  


  
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      name={name || ''}
      className={error ? 'input input-error' : 'input'}
      autoComplete='off'
      value={value}
      onChange={onCheck}
    />
  )
}

export default Input
