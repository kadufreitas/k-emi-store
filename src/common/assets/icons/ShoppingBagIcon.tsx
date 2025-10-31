import { ShoppingBagIcon as ShoppingBagIconBase } from '@heroicons/react/24/solid';

export const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <ShoppingBagIconBase
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      strokeWidth={1.5}
      stroke="currentColor"
    />
  );
};
