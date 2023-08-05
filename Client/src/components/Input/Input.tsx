import React from 'react'

type InputProps = {
    placeholder: string;
    name?: string;
}

function Input({placeholder, name}: InputProps) {
  return (
    <input type="text" placeholder={placeholder} name={name || ''}/>
  )
}

export default Input
