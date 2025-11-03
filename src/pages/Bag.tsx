import { BagList } from '@/bag/views/BagList';
import { BagSummary } from '@/bag/views/BagSummary';
import { useAppContext } from '@/common/context/AppContext';
import { Container } from '@/common/layout/Container';
import { PageTitle } from '@/common/layout/PageTitle';

export const Bag = () => {
  const { getBagCount } = useAppContext();
  const itemsCount = getBagCount();

  return (
    <Container>
      <PageTitle>
        <span className="font-medium">Your Bag </span>
        <span className="text-base font-light">({itemsCount})</span>
      </PageTitle>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-4">
          <BagList />
        </div>
        <div className="col-span-1">
          <BagSummary />
        </div>
      </div>
    </Container>
  );
};
