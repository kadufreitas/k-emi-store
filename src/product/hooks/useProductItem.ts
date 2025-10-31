import { useAppContext } from '@/common/context/AppContext';
import { useGetProduct } from '../api';
import type { Product } from '../entity/Product';

export const useProductItem = (product: Product | null) => {
  const { addItem, removeItem, isInBag } = useAppContext();
  const productIsAlreadyInBag = product ? isInBag(product.id) : false;

  const addToBag = () => {
    if (!product) return;
    if (productIsAlreadyInBag) {
      removeItem(product.id);
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return { addToBag, productIsAlreadyInBag };
};

export const useProduct = (id: string) => {
  const { data: product, loading, error } = useGetProduct(id);
  const productItem = useProductItem(product);

  return { product, loading, error, ...productItem };
};
