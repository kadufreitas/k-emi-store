import { ProductList } from '@/product/views/ProductList';

function ProductListPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="mb-0 text-4xl font-bold text-gray-900">
            Product List
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
