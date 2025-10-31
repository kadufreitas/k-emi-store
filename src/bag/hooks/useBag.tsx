import { useState } from 'react';
import type { BagItem } from '../entity/Bag';

export const useBag = () => {
  const [items, setItems] = useState<BagItem[]>([]);

  const addItem = (item: BagItem) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = (itemId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const isInBag = (itemId: string) => {
    return items.some(item => item.id === itemId);
  };

  const getCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return { items, addItem, removeItem, isInBag, getCount };
};
