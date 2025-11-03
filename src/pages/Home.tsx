import { Container } from '@/common/layout/Container';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Welcome to K-Emi Store
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Browse Products
          </h2>
          <p className="mb-4 text-gray-600">
            Discover our amazing collection of products.
          </p>
          <Link
            to="/product-list"
            className="inline-block rounded-lg bg-[var(--color-purple)] px-6 py-2 text-white transition-colors hover:bg-[var(--color-dark-purple)]"
          >
            View Products
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Featured Product
          </h2>
          <p className="mb-4 text-gray-600">
            Check out our featured product of the month.
          </p>
          <Link
            to="/product-detail/1"
            className="inline-block rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;
