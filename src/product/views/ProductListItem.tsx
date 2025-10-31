import { Link } from 'react-router-dom';
import type { Product } from '../entity/Product';
import { ShoppingBagIcon } from '@/common/assets/icons/ShoppingBagIcon';
import { useProductItem } from '../hooks/useProductItem';

export const ProductListItem = ({ product }: { product: Product }) => {
  const { addToBag, productIsAlreadyInBag } = useProductItem(product);
  // Calculate discount percentage (assuming originalPrice exists in future)
  // const originalPrice = product.price * 1.43; // Mock 30% discount
  // const discountPercentage = Math.round(
  //   ((originalPrice - product.price) / originalPrice) * 100
  // );

  return (
    <div
      key={product.id}
      className="group relative overflow-hidden rounded-lg border-2 border-solid border-gray-200 bg-white"
    >
      <Link to={`/product-detail/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            // w-[230px]
            className="h-[340px] w-full transition-transform group-hover:scale-105"
          />

          {/* Discount Badge */}
          {/* {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
              -{discountPercentage}%
            </div>
          )} */}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
              {product.name}
            </h3>
            {/* <p className="line-clamp-1 text-xs text-gray-500">
              {product.description}
            </p> */}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-black">
              ${product.price.toFixed(2)}
            </span>
            {/* {discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )} */}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="absolute right-4 bottom-4">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center transition-colors hover:cursor-pointer"
          onClick={addToBag}
        >
          <ShoppingBagIcon
            className={`size-6 hover:text-blue-600 ${
              productIsAlreadyInBag ? 'text-blue-600' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
