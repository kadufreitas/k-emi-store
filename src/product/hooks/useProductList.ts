import { useGetProducts } from '../api';

export const useProductList = () => {
  // create state to persist product list
  const { data: productList, loading, error } = useGetProducts();

  return { productList, loading, error };
};
