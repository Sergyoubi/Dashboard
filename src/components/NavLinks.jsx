import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoGear } from "react-icons/go";

const NavLinks = () => {
  return (
    <div className="w-full h-[90%] flex-center border-r border-neutral-100">
      <ul className="w-full h-full flex flex-col justify-start items-center">
        <li className="navlinks">
          <RiHome2Line size={20} className="text-neutral-600 ml-4" /> Dashboard
        </li>
        <li className="navlinks">
          <FaRegUser size={19} className="text-neutral-600 ml-4" /> Users
        </li>
        <li className="navlinks">
          <MdOutlineInsertPhoto size={20} className="text-neutral-600 ml-4" />{" "}
          Photos
        </li>
        <li className="navlinks">
          <GoGear size={20} className="text-neutral-600 ml-4" /> Configurations
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
