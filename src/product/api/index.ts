import type { Product } from '../entity/Product';

export const useGetProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Feature-rich smartwatch with health monitoring.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      description: 'Ergonomic aluminum laptop stand for better posture.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 79.99,
      description: 'Precision wireless mouse with long battery life.',
      image: 'https://picsum.photos/400',
    },
  ];
  return { data: products, loading: false, error: null };
};

export const useGetProduct = (id: number) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Feature-rich smartwatch with health monitoring.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      description: 'Ergonomic aluminum laptop stand for better posture.',
      image: 'https://picsum.photos/400',
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 79.99,
      description: 'Precision wireless mouse with long battery life.',
      image: 'https://picsum.photos/400',
    },
  ];

  const product = products.find(p => p.id === id);

  return { data: product || null, loading: false, error: null };
};
