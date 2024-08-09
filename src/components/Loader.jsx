import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-4">
      <p>Fetching...</p>
      <AiOutlineLoading3Quarters
        size={20}
        className="text-slate-800 animate-spin"
      />
    </div>
  );
};

export default Loader;
