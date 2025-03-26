export const StackCard = ({ children }) => {
  return (
    <div className="p-4 border-2 border-slate-500   flex items-center justify-center font-semibold rounded-lg gap-2 cursor-pointer hover:opacity-75 hover:border-purple-600">
      {children}
    </div>
  );
};
