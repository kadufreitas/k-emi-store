import { Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProductItem';

export const ProductOffer = ({ id }: { id: string }) => {
  const { product, loading, error, productIsAlreadyInBag, addToBag } =
    useProduct(id);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading product offer</div>;
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <p className="mb-8 text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/product-list"
            className="rounded-lg bg-[var(--color-purple)] px-6 py-3 text-white transition-colors hover:bg-[var(--color-dark-purple)]"
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
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          {product.name}
        </h1>
        <p className="mb-6 text-3xl font-medium text-black">${product.price}</p>

        <div className="flex gap-4">
          <button
            type="button"
            className={`rounded-lg bg-[var(--color-purple)] px-8 py-3 text-white transition-colors hover:cursor-pointer hover:bg-[var(--color-dark-purple)]`}
            onClick={addToBag}
          >
            {productIsAlreadyInBag ? 'Added to Bag' : 'Add to Bag'}
          </button>
          {/* <button
            type="button"
            className="rounded-lg border border-gray-300 px-8 py-3 text-gray-700 transition-colors hover:bg-gray-100"
          >
            Add to Wishlist
          </button> */}
        </div>
      </div>
    </div>
  );
};
