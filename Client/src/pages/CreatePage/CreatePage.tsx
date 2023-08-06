import React, { useState } from "react";
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';
import './CreatePage.scss'
import { DatePicker } from "antd";
import { useCheck } from "../../utils/useCheck";

function CreatePage() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [error, setError] = useState({name: false, date: false});

  const onChange = (date) => {
    setError((prev) => { return {...prev, date: false}})
    setDate(date);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target.name.value;


    if (useCheck(name) && date !== undefined) {
      request(BACKEND+'/items', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: {name: name, date: date}
      })
      e.target.name.value = '';
      navigate('/');
    }
  }

  const handleCheck = (name: string): void => {
    if (!useCheck(name)) {
      setError((prev) => { return {...prev, name: true}})
    }else {
      setError((prev) => { return {...prev, name: false}})
    }
    if (date === undefined) {
      setError((prev) => { return {...prev, date: true}})
    }
  }

  return (
    <div className='create'>
      <Form buttonName='Create' handleSubmit={handleSubmit}>
        <DatePicker 
          onChange={onChange}
          style={{
            width: '290px',
            height: '40px',
            border: error.date ? '2px red solid' : 'none'
          }}
        />
        <Input placeholder='Название' name='name' error={error.name} onCheck={handleCheck}/>
      </Form>
    </div>
  )
}

export default CreatePage
