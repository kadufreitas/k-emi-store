import { ProductList } from '@/product/views/ProductList';
import { Link } from 'react-router-dom';

function ProductListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="mb-0 text-4xl font-bold text-gray-900 dark:text-white">
            Product List
          </h1>
          <Link
            to="/"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
