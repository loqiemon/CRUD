import React from 'react'


type FormProps = {
    children: React.JSX.Element[] | React.JSX.Element;
    buttonName: string;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
} 


function Form(props: FormProps) {
  return (
    <form onSubmit={props.handleSubmit} autoComplete='off'>
        {props.children}
        <input type="submit" value={props.buttonName}/>
    </form>
  )
}

export default Form
