import type { Product } from '@/product/entity/Product';

export type BagItem = Omit<Product, 'description' | 'image'> & {
  quantity: number;
};
