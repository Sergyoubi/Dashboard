import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
const TodoList = ({ userId, title, completed }) => {
  return (
    <section className="w-[99%] py-3 flex justify-center items-center gap-2 hover:bg-stone-100 rounded-xl">
      <div className="w-[80%] flex justify-between gap-4">
        <p className="text-slate-500 text-base font-thin ml-2">{userId}</p>
        <p className=" text-slate-700 text-base line-clamp-1 font-normal relative">
          {title}
        </p>
        <p className="text-slate-700 text-base font-normal relative">
          {completed ? "Completed" : "Not completed"}
        </p>
      </div>
      <div className="w-[20%] flex justify-end items-center gap-7">
        <GoPencil size={24} className="text-slate-800" />
        <GoTrash size={24} className="text-slate-800 " />
      </div>
    </section>
  );
};

export default TodoList;
