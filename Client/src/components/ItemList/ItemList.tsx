import { useState, useEffect, MouseEventHandler } from 'react'
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
    useSort: MouseEventHandler<HTMLElement>;
    desc: boolean;
}

function ItemList({items, setItems, handleRemove, setActive, active, useSort, desc} : ItemListProps) {
  return (
    <div className='main__list'>
        <Reorder.Group as='ol' axis='y' values={items} onReorder={setItems} className='item_list'>
            <i
              style={{
                rotate: desc ? '180deg' : '360deg'
              }}
              className="fa-solid fa-arrow-up-short-wide"
              onClick={useSort}
            />
            <AnimatePresence>
                {items.map(item =><Item item={item} key={item.id} setActive={setActive} handleRemove={handleRemove}/>)}
            </AnimatePresence>
        </Reorder.Group>
    </div>
  )
}

export default ItemList
