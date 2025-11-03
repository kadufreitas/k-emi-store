import type { Product } from '@/product/entity/Product';

export type BagItem = Product & {
  quantity: number;
};
