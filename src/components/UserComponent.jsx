import UserTable from "./UserTable";

const UserComponent = ({ isPending, users }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-start items-center">
        <p className="text-slate-700 text-2xl font-bold ml-[5%]">
          List of Users
        </p>
      </div>
      <div className="w-full h-[80%] flex justify-start items-center">
        <UserTable isPending={isPending} users={users} />
      </div>
    </div>
  );
};

export default UserComponent;
