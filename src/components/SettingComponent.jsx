import { GoGear } from "react-icons/go";

const SettingComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-start items-center">
        <p className="text-slate-700 text-2xl font-bold ml-[5%]">
          Setting Page
        </p>
      </div>
      <div className="w-full h-[80%] flex-center">
        <div className="w-[90%] h-[90%] flex-center gap-5 bg-white border border-slate-200 rounded-lg">
          <GoGear size={30} className="text-gray-900" />
          <p className="text-slate-500 font-light text-3xl">
            Your setting here
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingComponent;
