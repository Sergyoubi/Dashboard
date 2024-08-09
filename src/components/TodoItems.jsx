import { FaTasks } from "react-icons/fa";

const TodoItems = ({ todos }) => {
  return (
    <section className="w-[25%] h-[90%] border border-gray-300 rounded-lg flex-center">
      <div className="w-[40%] h-full flex-center">
        <div className="w-10 h-10 rounded-full flex-center bg-yellow-800">
          <FaTasks size={22} className="text-amber-300" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center items-start">
        <p className="text-slate-700 font-medium text-sm">Todos</p>
        <p className="text-slate-700 font-light text-sm">
          <span>{todos}</span> todos
        </p>
      </div>
    </section>
  );
};

export default TodoItems;
