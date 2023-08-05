import React from 'react'
import { Reorder } from "framer-motion"
import { TItem } from '../../pages/MainPage/MainPage'
import './Item.scss'
import { useNavigate } from 'react-router-dom'

type itemProps = {
    item: TItem
    setActive: Function;
    handleRemove: Function;
}

const variants  = {
    initial: {
        opacity: 0,
        height: 0
    },
    animate: {
        opacity: 1,
        height: 'auto'
    },
    exit: {
        opacity: 0,
        height: 0
    },
    whileDrag: {      
        scale: 1.2,
        backgroundColor: '#009ecb',
    }
    
}

function Item({item, setActive, handleRemove}: itemProps) {
  const navigate = useNavigate();
    
  const timeout = setTimeout(() => {
    setActive(undefined)
  }, 5000)

  return (
    <Reorder.Item
        className={item.less ? "item item-active": 'item'}
        value={item}
        {...variants}
        onDragStart={(e) => {
            clearTimeout(timeout)
            setActive(item)
        }}
        onDragEnd={() => timeout}
        whileHover={{scale: 1.1, transition: { duration: .4 },}}
    >      
        <span className="item_id">{item.id}</span>
        <h4 className='item_name'>{item.name}</h4>
        <span className="item_date">{new Date(item.date).toLocaleDateString()}</span>
        <i 
            className="fa fa-trash"
            onClick={() => handleRemove(item.id)}
        />
        <i 
            className="fa-regular fa-pen-to-square"
            onClick={() => navigate(`edit/${item.id}`)}
        />
    </Reorder.Item>
  )
}

export default Item
