import Header from "./Header";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-[88%] flex-center">
        <Sidebar />
        <Wrapper />
      </div>
    </div>
  );
};

export default Layout;
