import { useState, useEffect } from 'react'
import { Reorder, AnimatePresence, motion } from "framer-motion"
import { TItem } from '../../pages/MainPage/MainPage';
import Item from '../Item/Item';
import './ItemList.scss'

type ItemListProps = {
    setItems: Function;
    handleRemove: Function;
    items: TItem[];
    setActive: Function;
    active: TItem | undefined;
}

function ItemList({items, setItems, handleRemove, setActive, active} : ItemListProps) {
  return (
    <div className='main__list'>
        <Reorder.Group as='ol' axis='y' values={items} onReorder={setItems} className='item_list'>
            <AnimatePresence>
                {items.map(item =><Item item={item} key={item.id} setActive={setActive} handleRemove={handleRemove}/>)}
            </AnimatePresence>
        </Reorder.Group>
    </div>
  )
}

export default ItemList
