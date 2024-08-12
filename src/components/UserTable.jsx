import Loader from "./Loader";
import UserItem from "./UserItem";

const UserTable = ({ isPending, users }) => {
  return (
    <div className="w-[90%] h-[90%] bg-white relative left-[4%] border border-slate-200 rounded-lg flex flex-col justify-start items-center overflow-scroll">
      <header className="w-full bg-white py-3 flex justify-between gap-4 rounded-lg">
        <p className="relative left-[3%]">Name</p>
        <p className="relative left-[5%]">Email</p>
        <p>Address</p>
        <p className="relative right-[3%]">Action</p>
      </header>
      {isPending ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex flex-col justify-start items-center overflow-scroll">
          {users?.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTable;
