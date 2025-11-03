import { Link } from 'react-router-dom';
import type { Product } from '../entity/Product';
import { ShoppingBagIcon } from '@/common/assets/icons';
import { useProductItem } from '../hooks/useProductItem';

export const ProductListItem = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const { addToBag, productIsAlreadyInBag } = useProductItem(product);

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
            fetchPriority={index < 6 ? 'high' : 'low'}
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
              {product.name}
            </h3>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-black">
              ${product.price.toFixed(2)}
            </span>
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
            className={`size-6 hover:text-[var(--color-dark-purple)] ${
              productIsAlreadyInBag
                ? 'text-[var(--color-purple)]'
                : 'text-gray-400'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
