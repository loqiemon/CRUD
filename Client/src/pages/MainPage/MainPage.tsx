import  {useState, useEffect} from 'react'
import { request } from '../../service/fetch';
import { BACKEND } from '../../service/constants';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';
import {motion} from 'framer-motion'
import { compare, lessMonth } from '../../utils/date';
import './MainPage.scss'


export type TItem = {
  name: string;
  id: number;
  date: string;
  less?: boolean;
}


function MainPage() {
  const [items, setItems] = useState<TItem[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true)
    request<TItem[]>(BACKEND+'events')
      .then(items => items.sort((a, b)=>compare(a, b, 'desc')))
      .then(items => items.map(item => {return {...item, less:lessMonth(item)}}))
      .then(items => {
        setItems(items)
        setLoading(false)
      })
  }, []);


  const handleRemove = (id: number) => {
    if (id !== undefined) {
      request(BACKEND+`events/${id}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: {}
      }).then(() => {
        setItems(items.filter(item => item.id !== id))
      }).catch(() => alert("не удалось удалить"))
    }
  }


  return (
      <>
        {loading === true ? <Loader/> : <div className='main'>
          {items.length > 0 && <ItemList
            items={items}
            handleRemove={handleRemove}
          />}     
          {items.length === 0 && !loading && <h2>Нет записей</h2>}
          <div className="main__bottom">
            <motion.button 
              className='main_button'
              onClick={() => navigate('/create')}
              whileHover={{scale: 1.1, transition: {duration: .4}}}
            >
              Создать
            </motion.button>
          </div>
        </div>}
      </>
  )
}

export default MainPage
