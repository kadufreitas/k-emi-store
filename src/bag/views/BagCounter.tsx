import { ShoppingBagIcon } from '@/common/assets/icons';
import { useAppContext } from '@/common/context/AppContext';
import { Link } from 'react-router-dom';

export const BagCounter = () => {
  const { getBagCount } = useAppContext();
  const itemsCount = getBagCount();

  return (
    <Link
      to="/bag"
      type="button"
      className="relative p-2 text-gray-600 transition-colors hover:text-blue-600"
    >
      <div className="relative">
        <ShoppingBagIcon className="size-6 text-gray-600" />
        <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-purple)] text-xs text-white">
          {itemsCount}
        </span>
      </div>
    </Link>
  );
};
