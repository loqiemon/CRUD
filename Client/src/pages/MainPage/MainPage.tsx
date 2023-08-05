import React, {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';

type Item = {
  name: string;
  id: number;
  date: string;
}

function MainPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    request<Item[]>(BACKEND+'/items')
      .then(items => setItems(items))

  }, []);

  return (
    <ul>
      {items.length > 0 ? items.map(item => 
        <li>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{new Date(item.date).toLocaleString()}</span>
        </li>)
        :<div className="loader">Loader</div>
      }
    </ul>
  )
}

export default MainPage
