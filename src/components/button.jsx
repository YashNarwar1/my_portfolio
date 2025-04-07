export const Button = ({ children }) => {
  return (
    <>
      <button className="px-4 py-2 w-[10rem] relative rounded-lg text-black border-2 mt-10 hover:opacity-75 cursor-pointer hover:border-purple-700">
        {children}
      </button>
      <span className="px-4 py-2 w-[10rem] absolute top-0 left-[-2rem] hover:translate-[2rem] rounded-lg text-black  mt-10  bg-purple-700"></span>
    </>
  );
};
