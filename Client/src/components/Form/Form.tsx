import React from 'react'


type FormProps = {
    children: React.JSX.Element[] | React.JSX.Element;
} 


function Form(props: FormProps) {
  return (
    <form>
        {props.children}
    </form>
  )
}

export default Form
