import { LuUser2 } from "react-icons/lu";

const OverviewUser = ({ users }) => {
  return (
    <div className="overview-items">
      <div className="w-[40%] h-full flex-center">
        <div className="size-20 bg-emerald-700 rounded-full flex-center">
          <LuUser2 size={35} className="text-lime-400" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        <p className="text-stone-500 font-bold text-xl">Users</p>
        <p className="text-stone-700 font-extralight text-xl">
          {users} activ users
        </p>
      </div>
    </div>
  );
};

export default OverviewUser;
