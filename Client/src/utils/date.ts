import { TItem } from "../pages/MainPage/MainPage";

export const compare = (a:TItem, b:TItem, type: 'asc' | 'desc') => {
    if (type === 'desc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    }else {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
};
export const lessMonth = (item: TItem):boolean => {
  const currentTime = new Date().getTime();
  const itemTime = new Date(item.date).getTime();
  const moreThanMonth = itemTime - currentTime < 2592000000;
  const lessThanMonth = currentTime - itemTime < 2592000000;
  return lessThanMonth && moreThanMonth
}