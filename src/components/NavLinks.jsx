import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-[90%] flex-center">
      <ul className="w-full h-full flex flex-col justify-start items-center">
        <Link
          to="/"
          className={pathname === "/" ? "navlinks-active" : "navlinks"}
        >
          <RiHome2Line size={20} className="text-neutral-600 ml-4" /> Dashboard
        </Link>
        <Link
          to="/users"
          className={pathname === "/users" ? "navlinks-active" : "navlinks"}
        >
          <FaRegUser size={19} className="text-neutral-600 ml-4" /> Users
        </Link>
        <Link
          to="/photos"
          className={pathname === "/photos" ? "navlinks-active" : "navlinks"}
        >
          <MdOutlineInsertPhoto size={20} className="text-neutral-600 ml-4" />{" "}
          Photos
        </Link>
        <Link
          to="/setting"
          className={pathname === "/setting" ? "navlinks-active" : "navlinks"}
        >
          <GoGear size={20} className="text-neutral-600 ml-4" /> Configurations
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
