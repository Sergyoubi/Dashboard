import TodoItems from "./TodoItems";
import UsersItem from "./UsersItem";
import PostItem from "./PostItem";

const OverView = ({ users, todos, posts }) => {
  return (
    <div className="w-full h-[12%] flex justify-start items-center gap-4">
      <UsersItem users={users} />
      <TodoItems todos={todos} />
      <PostItem posts={posts} />
    </div>
  );
};

export default OverView;
