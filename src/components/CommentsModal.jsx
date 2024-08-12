import CommentList from "./CommentList";

const CommentsModal = ({ data }) => {
  return (
    <div className="w-[98%] h-[96%] my-2 border border-slate-200 rounded-lg flex flex-col justify-start items-center overflow-scroll">
      <header className="w-[100%] bg-stone-600 py-3 flex justify-between gap-4">
        <p className="relative left-[10%] text-white">Comment Name</p>
        <p className="text-white relative left-[20%]">Email</p>
        <p className="text-white relative right-[3%]">Action</p>
      </header>
      <div className="w-full h-full flex flex-col justify-start items-center overflow-scroll">
        {data?.map((item) => (
          <CommentList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CommentsModal;
