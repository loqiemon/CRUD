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
  const [date, setDate] = useState<Date>();
  const [error, setError] = useState({name: false, date: false});

  const onChange = (date) => {
    handleDateCheck()
    setDate(date);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target.name.value;
    

    if (useCheck(name) && date !== undefined && handleDateCheck()) {
      request(BACKEND+'events', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: {name: name, date: date}
      })
      e.target.name.value = '';
      navigate('/');
    }
  }

  //Убрать в кастомный хук
  const handleDateCheck = () => {
    if (date === undefined) {
      setError((prev) => { return {...prev, date: true}})
    }
    if (date !== undefined) {
      const dateCheck = new Date(date).getTime() - new Date().getTime();
      if (dateCheck < 0) {
        setError((prev) => { return {...prev, date: true}})
      }else {
        setError((prev) => { return {...prev, date: false}})
        return true
      }
    }
    return false
  }

  const handleInputCheck = (name: string): void => {
    if (!useCheck(name)) {
      setError((prev) => { return {...prev, name: true}})
    }else {
      setError((prev) => { return {...prev, name: false}})
    }
    handleDateCheck()
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
        <Input placeholder='Название' name='name' error={error.name} onCheck={handleInputCheck}/>
      </Form>
    </div>
  )
}

export default CreatePage
