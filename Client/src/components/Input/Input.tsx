import {useState, ChangeEvent } from 'react'
import './Input.scss'

type InputTypes = 'button' | 'text' | 'checkbox' | 'date' | 'email' | 'file' | 'password' | 'submit'

type InputProps = {
    placeholder: string;
    name?: string;
    inputType?: InputTypes;
    error: boolean;
    onCheck: Function;
}

function Input({placeholder, name, inputType, error, onCheck}: InputProps) {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue)
    onCheck(inputValue)
  }
  
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      name={name || ''}
      className={error ? 'input input-error' : 'input'}
      autoComplete='off'
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
