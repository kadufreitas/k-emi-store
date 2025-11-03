export const PageTitle = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  const contentToDisplay = children ?? title;

  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="mb-0 text-4xl font-bold text-gray-900">
        {contentToDisplay}
      </h1>
    </div>
  );
};
