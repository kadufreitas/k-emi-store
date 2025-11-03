import { useAppContext } from '@/common/context/AppContext';
import { ProductBagItem } from '@/bag/views/BagItem';

export const BagList = () => {
  const { bagItems } = useAppContext();

  if (bagItems.length === 0) {
    return <p>Your bag is empty.</p>;
  }

  return (
    <>
      {bagItems.map(item => (
        <ProductBagItem key={item.id} bagItem={item} />
      ))}
    </>
  );
};
