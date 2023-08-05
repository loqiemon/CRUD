import React, {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';
import './MainPage.scss'



export type TItem = {
  name: string;
  id: number;
  date: string;
}


function MainPage() {
  const [items, setItems] = useState<TItem[]>([]);
  const [active, setActive] = useState<TItem | undefined>(undefined);

  const navigate = useNavigate();



  useEffect(() => {
    request<TItem[]>(BACKEND+'/items')
      .then(items => setItems(items))
  }, []);

  const handleRemove = (id: number) => {
    if (id !== undefined) {
      setItems(items.filter(item => item.id !== id))
      setActive(undefined)
    }
  }

  return (
      <div className='main'>
        <ItemList 
          items={items}
          setItems={setItems}
          handleRemove={handleRemove}
          setActive={setActive}
          active={active}
        />  
        <div className="main__bottom">
          <button onClick={() => navigate('/create')}>Create</button>
        </div>
      </div>
      // <Loader/>
  )
}

export default MainPage
