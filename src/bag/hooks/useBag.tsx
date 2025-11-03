import { useState } from 'react';
import type { BagItem } from '../entity/Bag';

export const useBag = () => {
  const [items, setItems] = useState<BagItem[]>([]);

  const addBagItem = (item: BagItem) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeBagItem = (itemId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const isInBag = (itemId: string) => {
    return items.some(item => item.id === itemId);
  };

  const getBagCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return { bagItems: items, addBagItem, removeBagItem, isInBag, getBagCount };
};
