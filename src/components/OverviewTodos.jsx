import { LuClipboardList } from "react-icons/lu";

const OverviewTodos = ({ todos }) => {
  return (
    <div className="overview-items">
      <div className="w-[40%] h-full flex-center">
        <div className="size-20 bg-amber-600 rounded-full flex-center">
          <LuClipboardList size={35} className="text-yellow-400" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        <p className="text-stone-500 font-bold text-xl">Todos</p>
        <p className="text-stone-700 font-extralight text-xl">{todos} todos</p>
      </div>
    </div>
  );
};

export default OverviewTodos;
