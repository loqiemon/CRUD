import React from 'react'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (name.length > 0) {
      request(BACKEND+'/items', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: {name: name, date: new Date()}
      })
      e.target.name.value = '';
      navigate('/');
    }
  }

  return (
    <div>
      <Form buttonName='Create' handleSubmit={handleSubmit}>
        <Input placeholder='Название' name='name'/>
      </Form>
    </div>
  )
}

export default CreatePage
