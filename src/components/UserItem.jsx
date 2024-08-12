import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

const UserItem = ({ name, email, address }) => {
  return (
    <section className="w-[99%] py-3 flex justify-center items-center gap-2 hover:bg-stone-100 rounded-xl">
      <div className="w-[80%] flex justify-between gap-4">
        <p className="text-slate-500 text-sm font-thin ml-2">{name}</p>
        <p className="text-slate-700 text-sm font-normal relative right-4">
          {email}
        </p>
        <p className="text-slate-700 text-sm font-normal relative right-[10%]">
          {address.city}
        </p>
      </div>
      <div className="w-[20%] flex justify-end items-center gap-7">
        <GoPencil size={24} className="text-slate-800" />
        <GoTrash size={24} className="text-slate-800 mr-2" />
      </div>
    </section>
  );
};

export default UserItem;
