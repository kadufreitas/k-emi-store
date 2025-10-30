import { Link, useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  // Mock product data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      longDescription:
        "Experience premium audio quality with our top-of-the-line wireless headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear sound whether you're listening to music, taking calls, or focusing on work. The comfortable over-ear design ensures you can wear them for hours without discomfort.",
      image: 'https://via.placeholder.com/400x400?text=Headphones',
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Wireless & wired connectivity',
        'Premium leather padding',
        'Voice assistant compatible',
      ],
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Feature-rich smartwatch with health monitoring.',
      longDescription:
        "Stay connected and monitor your health with our advanced smartwatch. Track your fitness goals, monitor heart rate, receive notifications, and much more. The sleek design pairs perfectly with any outfit, whether you're at the gym or in the office.",
      image: 'https://via.placeholder.com/400x400?text=SmartWatch',
      features: [
        'Heart rate monitoring',
        'GPS tracking',
        'Water resistant',
        '7-day battery life',
        'Sleep tracking',
      ],
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      description: 'Ergonomic aluminum laptop stand for better posture.',
      longDescription:
        'Improve your workspace ergonomics with our premium aluminum laptop stand. Designed to elevate your laptop to the perfect viewing angle, reducing neck strain and improving posture during long work sessions.',
      image: 'https://via.placeholder.com/400x400?text=LaptopStand',
      features: [
        'Adjustable height',
        'Aluminum construction',
        'Non-slip pads',
        'Foldable design',
        'Universal compatibility',
      ],
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 79.99,
      description: 'Precision wireless mouse with long battery life.',
      longDescription:
        "Experience precise control with our high-performance wireless mouse. Featuring an advanced optical sensor and ergonomic design, it's perfect for both work and gaming.",
      image: 'https://via.placeholder.com/400x400?text=Mouse',
      features: [
        'High-precision sensor',
        '12-month battery life',
        'Ergonomic design',
        'Silent clicks',
        'Multi-device connectivity',
      ],
    },
  ];

  const product = products.find(p => p.id === parseInt(id || '0'));

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
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              {product.longDescription}
            </p>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="space-y-2">
                {product.features.map(feature => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

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
      </div>
    </div>
  );
}

export default ProductDetail;
