import { useState, useEffect } from 'react';

interface IUseSort<T> {
    sortList: T[]
    sortProp: keyof T
}

export function useSort<T> ({sortList, sortProp}: IUseSort<T>) {
    const [list, setList] = useState<T[]>([]);
    const [sortType, setSortType] = useState(true);
    
    useEffect(() => {
        setList([...sortList].sort((a, b) => {
            if (sortType) {
                return a[sortProp] > b[sortProp] ? 1 : -1;
            } else {
                return a[sortProp] < b[sortProp] ? 1 : -1;
            }
        }));
    }, [sortList, sortProp, sortType]);


    const toggleSortType = () => {
        setSortType(prev => !prev);
    };

    return { list, toggleSortType, setList, sortType };

}