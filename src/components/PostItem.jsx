import { CiViewList } from "react-icons/ci";

const PostItem = ({ posts }) => {
  return (
    <section className="w-[25%] h-[90%] border border-gray-300 rounded-lg flex-center">
      <div className="w-[40%] h-full flex-center">
        <div className="w-10 h-10 rounded-full flex-center bg-neutral-800">
          <CiViewList size={25} className="text-gray-300" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center items-start">
        <p className="text-slate-700 font-medium text-sm">Posts</p>
        <p className="text-slate-700 font-light text-sm">
          <span>{posts}</span> posts
        </p>
      </div>
    </section>
  );
};

export default PostItem;
