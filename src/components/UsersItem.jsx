import { LuUserCheck2 } from "react-icons/lu";
const UsersItem = ({ users }) => {
  return (
    <section className="w-[25%] h-[90%] border border-gray-300 rounded-lg ml-[10%] flex-center">
      <div className="w-[40%] h-full flex-center">
        <div className="w-10 h-10 rounded-full flex-center bg-teal-800">
          <LuUserCheck2 size={22} className="text-green-300" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center items-start">
        <p className="text-slate-700 font-medium text-sm">Users</p>
        <p className="text-slate-700 font-light text-sm">
          <span>{users}</span> active users
        </p>
      </div>
    </section>
  );
};

export default UsersItem;
