import React from 'react'

type InputProps = {
    placeholder: string;

}

function Input({placeholder}: InputProps) {
  return (
    <input type="text" placeholder={placeholder}/>
  )
}

export default Input
