import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-[20%] h-full flex flex-col justify-start items-center">
      <div className="w-full h-[10%] flex justify-start items-center">
        <p className="text-slate-800 font-semibold text-xl mx-3">Test</p>
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
