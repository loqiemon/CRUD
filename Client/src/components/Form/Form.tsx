import React from 'react'
import './Form.scss'
import {motion} from 'framer-motion';

type FormProps = {
    children: React.JSX.Element[] | React.JSX.Element;
    buttonName: string;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
} 


function Form(props: FormProps) {
  return (
    <form onSubmit={props.handleSubmit} autoComplete='off' className='form'>
        {props.children}
        <motion.input 
          type='submit'
          value={props.buttonName}
          className='form_button'
          whileHover={{transition: {duration: .4}, borderColor: '#fff', border: '1px solid', scale: 1.1}}
        />
    </form>
  )
}

export default Form
