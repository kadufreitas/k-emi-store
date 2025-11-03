import { useAppContext } from '@/common/context/AppContext';

export const BagSummary = () => {
  const { bagItems } = useAppContext();
  const bagTotalItems = bagItems.length;
  const bagTotalPrice = bagItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (bagTotalItems === 0) {
    return;
  }

  return (
    <>
      <p className="mb-4 text-lg font-medium">
        <strong>Bag Summary</strong>
      </p>
      <div className="flex justify-between">
        <span className="text-lg font-light">
          {`${bagTotalItems} product${bagTotalItems > 1 ? 's' : ''}`}
        </span>
        <span className="text-lg font-medium">€{bagTotalPrice.toFixed(2)}</span>
      </div>
      <div>
        <button
          type="button"
          className="mt-4 w-full rounded bg-[var(--color-purple)] px-4 py-2 text-white hover:bg-[var(--color-dark-purple)]"
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};
