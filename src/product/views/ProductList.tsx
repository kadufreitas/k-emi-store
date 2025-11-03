import { useProductList } from '../hooks/useProductList';
import { ProductListItem } from './ProductListItem';

export const ProductList = () => {
  const { productList, loading, error } = useProductList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return productList.map((product, index) => (
    <ProductListItem key={product.id} product={product} index={index} />
  ));
};
