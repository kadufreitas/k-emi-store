import { Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProductItem';

export const ProductOffer = ({ id }: { id: number }) => {
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading product offer</div>;
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Product Not Found
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/product-list"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="h-96 w-full rounded-lg object-cover shadow-lg"
        />
      </div>

      <div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p className="mb-6 text-3xl font-bold text-green-600">
          ${product.price}
        </p>

        <div className="flex gap-4">
          <button
            type="button"
            className="rounded-lg bg-green-600 px-8 py-3 text-white transition-colors hover:bg-green-700"
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-8 py-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
