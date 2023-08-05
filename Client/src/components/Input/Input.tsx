import React from 'react';
import './Input.scss'

type InputTypes = 'button' | 'text' | 'checkbox' | 'date' | 'email' | 'file' | 'password' | 'submit'

type InputProps = {
    placeholder: string;
    name?: string;
    inputType?: InputTypes;
}

function Input({placeholder, name, inputType}: InputProps) {
  return (
    <input type={inputType} placeholder={placeholder} name={name || ''} className='input' autoComplete='off'/>
  )
}

export default Input
