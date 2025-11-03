export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};
