import { PageTitle } from '@/common/layout/PageTitle';
import { ProductList } from '@/product/views/ProductList';

function ProductListPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-7xl">
        <PageTitle title="Product List" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
