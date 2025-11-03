import { Link } from 'react-router-dom';
import type { BagItem } from '../entity/Bag';
import { XMarkIcon } from '@/common/assets/icons';
import { useAppContext } from '@/common/context/AppContext';

export const ProductBagItem = ({ bagItem }: { bagItem: BagItem }) => {
  const { removeBagItem } = useAppContext();

  return (
    <div
      key={bagItem.id}
      className="group relative overflow-hidden rounded-lg border-2 border-solid border-gray-200 bg-white"
    >
      <Link to={`/product-detail/${bagItem.id}`} className="direction-col flex">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={bagItem.image}
            alt={bagItem.name}
            className="h-[140px] w-full transition-transform"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
              {bagItem.name}
            </h3>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-black">
              ${bagItem.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Quantity: {bagItem.quantity}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center transition-colors hover:cursor-pointer"
          onClick={() => removeBagItem(bagItem.id)}
        >
          <XMarkIcon className="size-6" />
        </button>
      </div>
    </div>
  );
};
