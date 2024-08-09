import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const NavLinks = () => {
  return (
    <div className="w-full h-[90%] flex-center">
      <ul className="w-full h-full flex flex-col justify-start items-center relative">
        <li className="navlinks">
          <IoMdHome size={20} className="text-neutral-600 ml-4" /> Dashboard
        </li>
        <li className="navlinks">
          <FaUser size={19} className="text-neutral-600 ml-4" /> Users
        </li>
        <li className="navlinks">
          <IoMdPhotos size={20} className="text-neutral-600 ml-4" /> Photos
        </li>
        <li className="navlinks">
          <IoSettingsSharp size={20} className="text-neutral-600 ml-4" />{" "}
          Configurations
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
