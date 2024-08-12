import { IoMdNotifications } from "react-icons/io";
import { LuUserCircle } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full h-[12%] flex justify-center items-start">
      <div className="w-[20%] h-full flex justify-start items-center">
        <p className="text-slate-700 text-lg font-medium ml-5">Logo</p>
      </div>
      <div className="w-[60%] h-full flex-center">
        <input type="text" className="input-class" placeholder="Search..." />
      </div>
      <div className="w-[20%] h-full flex justify-end items-center gap-5">
        <IoMdNotifications size={24} className="text-neutral-800" />
        <LuUserCircle size={28} className="mr-5 text-neutral-800" />
      </div>
    </header>
  );
};

export default Header;
