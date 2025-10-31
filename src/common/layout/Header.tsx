import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon } from '@/common/assets/icons/ShoppingBagIcon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-gray-900 transition-colors hover:text-blue-600"
              >
                K-Emi Store
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden space-x-8 md:flex">
              <Link
                to="/"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/product-list"
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/product-list')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            {/* <div className="hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div> */}

            {/* Cart */}
            <button
              type="button"
              className="relative p-2 text-gray-600 transition-colors hover:text-blue-600"
            >
              <ShoppingBagIcon />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="p-2 text-gray-600 transition-colors hover:text-blue-600 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
