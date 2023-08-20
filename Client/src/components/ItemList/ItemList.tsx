
import { Reorder, AnimatePresence } from "framer-motion"
import { TItem } from '../../pages/MainPage/MainPage';
import Item from '../Item/Item';
import './ItemList.scss'
import { useSort } from '../../hooks/useSort';

type ItemListProps = {
    handleRemove: Function;
    items: TItem[];
    setActive: Function;
    active: TItem | undefined;
}

function ItemList({items, handleRemove, setActive} : ItemListProps) {

  const {list, setList, toggleSortType, sortType } = useSort({sortList: items, sortProp: 'date'})

  return (
    <div className='main__list'>
        <Reorder.Group as='ol' axis='y' values={list} onReorder={setList} className='item_list'>
            <i
              style={{
                rotate: sortType ? '180deg' : '360deg'
              }}
              className="fa-solid fa-arrow-up-short-wide"
              onClick={toggleSortType}
            />
            <AnimatePresence>
                {list.map(item =><Item 
                                      item={item}
                                      key={item.id}
                                      setActive={setActive}
                                      handleRemove={handleRemove}
                                      />
                          )}
            </AnimatePresence>
        </Reorder.Group>
    </div>
  )
}

export default ItemList
