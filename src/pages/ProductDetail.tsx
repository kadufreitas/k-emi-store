import { ProductOffer } from '@/product/views/ProductOffer';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-6xl">
        <ProductOffer id={id ?? ''} />
      </div>
    </div>
  );
}

export default ProductDetailPage;
