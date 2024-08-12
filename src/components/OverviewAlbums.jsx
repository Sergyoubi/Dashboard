import { MdOutlinePhoto } from "react-icons/md";

const OverviewAlbums = ({ albums }) => {
  return (
    <div className="overview-items">
      <div className="w-[40%] h-full flex-center">
        <div className="size-20 bg-gray-900 rounded-full flex-center">
          <MdOutlinePhoto size={35} className="text-teal-300" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        <p className="text-stone-500 font-bold text-xl">Comments</p>
        <p className="text-stone-700 font-extralight text-xl">
          {albums} comments
        </p>
      </div>
    </div>
  );
};

export default OverviewAlbums;
