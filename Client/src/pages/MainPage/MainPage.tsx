import React, {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';

type Item = {
  name: string;
  id: number;
  date: Date;
}

function MainPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    request<Item[]>(BACKEND+'/items')
      .then(items => setItems(items))

  }, []);

  return (
    <ul>
      {items.length && items.map(item => 
        <li>
          {item.name}
        </li>)}
    </ul>
  )
}

export default MainPage
