import React, {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';
import {motion} from 'framer-motion'
import './MainPage.scss'



export type TItem = {
  name: string;
  id: number;
  date: string;
  less?: boolean;
}


function MainPage() {
  const [items, setItems] = useState<TItem[]>([]);
  const [active, setActive] = useState<TItem | undefined>(undefined);

  const navigate = useNavigate();

  const compare = (a:TItem, b:TItem) => new Date(b.date).getTime() - new Date(a.date).getTime();
  const lessMonth = (item: TItem):boolean => {
    const currentTime = new Date().getTime();
    const itemTime = new Date(item.date).getTime();
    const moreThanMonth = itemTime - currentTime < 2592000000;
    const lessThanMonth = currentTime - itemTime < 2592000000;
    return lessThanMonth && moreThanMonth
  }

  useEffect(() => {
    request<TItem[]>(BACKEND+'/items')
      .then(items => items.sort(compare))
      .then(items => items.map(item => {return {...item, less:lessMonth(item)}}))
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
        {items.length > 0 && <ItemList 
          items={items}
          setItems={setItems}
          handleRemove={handleRemove}
          setActive={setActive}
          active={active}
        />}     
        {items.length === 0 && <h2>Нет записей</h2>}
        <div className="main__bottom">
          <motion.button 
            className='main_button'
            onClick={() => navigate('/create')}
            whileHover={{scale: 1.1, transition: {duration: .4}}}
          >
            Create
          </motion.button>
        </div>
      </div>
      // <Loader/>
  )
}

export default MainPage
