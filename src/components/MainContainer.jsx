import OverView from "./OverView";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Users from "./Users";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TodoModal from "./TodoModal";
import CommentsModal from "./CommentsModal";

const MainContainer = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
  };
  const endPoint = "https://jsonplaceholder.typicode.com";
  const urls = [
    `${endPoint}/users`,
    `${endPoint}/todos`,
    `${endPoint}/posts`,
    `${endPoint}/comments`,
  ];
  const [users, setUsers] = useState(null);
  const [todos, setTodos] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const [openTodo, setOpenTodo] = useState(false);
  const handleOpenTodo = () => setOpenTodo(true);
  const handleCloseTodo = () => setOpenTodo(false);

  const [openComments, setOpenComments] = useState(false);
  const handleOpenComments = () => setOpenComments(true);
  const handleCloseComments = () => setOpenComments(false);

  const requests = urls.map((url) => axios.get(url));
  const fetchData = () => {
    try {
      setIsPending(true);
      axios.all(requests).then((responses) => {
        setIsPending(false);
        setUsers(responses[0].data);
        setTodos(responses[1].data);
        setPosts(responses[2].data);
        setComments(responses[3].data);
      });
    } catch (error) {
      setIsPending(false);
      console.error(
        `Error ${error.type} while fetching data! Error: ${error.message}`
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-[88%] flex flex-col justify-start items-center gap-3">
      <OverView
        users={users?.length}
        todos={todos?.length}
        posts={posts?.length}
      />
      <div className="w-full h-[88%] flex flex-col justify-center items-center">
        <div className="w-[80%] h-[15%] my-1 flex justify-start items-center gap-6">
          <button className="button-todo" onClick={handleOpenTodo}>
            <FaTasks size={18} />
            List of Todos
          </button>
          <button className="button-cmt" onClick={handleOpenComments}>
            <CiViewList size={19} />
            List of Comments
          </button>
        </div>
        <p>List of users</p>
        <Users users={users} isPending={isPending} />
        <Modal open={openTodo} onClose={handleCloseTodo}>
          <Box sx={style}>
            <TodoModal data={todos} />
          </Box>
        </Modal>
        <Modal open={openComments} onClose={handleCloseComments}>
          <Box sx={style}>
            <CommentsModal data={comments} />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default MainContainer;
