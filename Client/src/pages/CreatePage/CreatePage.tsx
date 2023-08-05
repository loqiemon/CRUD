import React from 'react'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';

function CreatePage() {


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
