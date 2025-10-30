import { ProductOffer } from '@/product/views/ProductOffer';
import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            to="/product-list"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
          >
            ← Back to Products
          </Link>
        </div>

        <ProductOffer id={parseInt(id || '0')} />
      </div>
    </div>
  );
}

export default ProductDetailPage;
