import { useGetProduct } from '../api';

export const useProduct = (id: number) => {
  const { data: product, loading, error } = useGetProduct(id);

  return { product, loading, error };
};
