import { useBag } from '@/bag/hooks/useBag';
import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

type AppContext = ReturnType<typeof useBag>;

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const bagContext = useBag();

  const bag = useMemo(() => ({ ...bagContext }), [bagContext]);

  return <AppContext value={bag}>{children}</AppContext>;
};

const useAppContext = () => {
  const context = use(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useAppContext };
