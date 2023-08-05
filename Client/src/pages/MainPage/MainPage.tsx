import React, {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';

type Item = {
  name: string;
  id: number;
  date: string;
}

function MainPage() {
  const [items, setItems] = useState<Item[]>([]);

  const navigate = useNavigate();

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
      <button onClick={() => navigate('/create')}>Create</button>
    </ul>
  )
}

export default MainPage
