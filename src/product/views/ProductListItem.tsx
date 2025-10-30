import { Link } from 'react-router-dom';
import type { Product } from '../entity/Product';

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <div
      key={product.id}
      className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
    >
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />
      <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {product.name}
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-green-600">
          ${product.price}
        </span>
        <Link
          to={`/product-detail/${product.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
