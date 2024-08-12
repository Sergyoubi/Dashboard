import { RiFileList3Line } from "react-icons/ri";

const OverviewPosts = ({ posts }) => {
  return (
    <div className="overview-items">
      <div className="w-[40%] h-full flex-center">
        <div className="size-20 bg-slate-700 rounded-full flex-center">
          <RiFileList3Line size={35} className="text-stone-400" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        <p className="text-stone-500 font-bold text-xl">Posts</p>
        <p className="text-stone-700 font-extralight text-xl">{posts} posts</p>
      </div>
    </div>
  );
};

export default OverviewPosts;
