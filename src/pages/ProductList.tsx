import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

function ProductList() {
  // Mock product data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      image: 'https://via.placeholder.com/200x200?text=Headphones',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Feature-rich smartwatch with health monitoring.',
      image: 'https://via.placeholder.com/200x200?text=SmartWatch',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      description: 'Ergonomic aluminum laptop stand for better posture.',
      image: 'https://via.placeholder.com/200x200?text=LaptopStand',
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 79.99,
      description: 'Precision wireless mouse with long battery life.',
      image: 'https://via.placeholder.com/200x200?text=Mouse',
    },
  ];

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
          {products.map(product => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
