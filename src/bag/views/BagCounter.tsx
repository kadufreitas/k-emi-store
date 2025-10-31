import { ShoppingBagIcon } from '@/common/assets/icons/ShoppingBagIcon';
import { useAppContext } from '@/common/context/AppContext';

export const BagCounter = () => {
  const { getCount } = useAppContext();
  const itemsCount = getCount();

  return (
    <button
      type="button"
      className="relative p-2 text-gray-600 transition-colors hover:text-blue-600"
    >
      <div className="relative">
        <ShoppingBagIcon className="size-6 text-gray-600" />
        <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          {itemsCount}
        </span>
      </div>
    </button>
  );
};
