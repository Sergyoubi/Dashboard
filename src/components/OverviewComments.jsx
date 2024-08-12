import { BiCommentDetail } from "react-icons/bi";

const OverviewComments = ({ comments }) => {
  return (
    <div className="overview-items">
      <div className="w-[40%] h-full flex-center">
        <div className="size-20 bg-sky-800 rounded-full flex-center">
          <BiCommentDetail size={35} className="text-teal-400" />
        </div>
      </div>
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        <p className="text-stone-500 font-bold text-xl">Comments</p>
        <p className="text-stone-700 font-extralight text-xl">
          {comments} comments
        </p>
      </div>
    </div>
  );
};

export default OverviewComments;
