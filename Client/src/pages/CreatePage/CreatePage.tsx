import React, { useState } from "react";
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';
import './CreatePage.scss'
import { DatePicker } from "antd";

function CreatePage() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());


  const onChange = (date) => {
    setDate(date);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (name.length > 0 && date !== undefined) {
      request(BACKEND+'/items', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: {name: name, date: date}
      })
      e.target.name.value = '';
      navigate('/');
    }
  }

  return (
    <div className='create'>
      <Form buttonName='Create' handleSubmit={handleSubmit}>
        <DatePicker onChange={onChange} />
        <Input placeholder='Название' name='name'/>
      </Form>
    </div>
  )
}

export default CreatePage
