import OverviewAlbums from "./OverviewAlbums";
import OverviewComments from "./OverviewComments";
import OverviewPosts from "./OverviewPosts";
import OverviewTodos from "./OverviewTodos";
import OverviewUser from "./OverviewUser";

const OverView = ({ users, todos, posts, comments, albums }) => {
  return (
    <div className="w-full h-[90%] flex flex-col">
      <div className="w-full h-[20%] flex justify-start items-center">
        <p className="text-slate-700 text-2xl font-bold ml-[5%]">Overview</p>
      </div>
      <div className="w-full h-[80%] flex justify-start items-start flex-wrap gap-4">
        <OverviewUser users={users?.length} />
        <OverviewTodos todos={todos?.length} />
        <OverviewPosts posts={posts?.length} />
        <OverviewComments comments={comments?.length} />
        <OverviewAlbums albums={albums?.length} />
      </div>
    </div>
  );
};

export default OverView;
