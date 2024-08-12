import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OverView from "./OverView";
import UserComponent from "./UserComponent";
import PhotoComponent from "./PhotoComponent";
import SettingComponent from "./SettingComponent";

const Wrapper = () => {
  const { pathname } = useLocation();
  const endPoint = "https://jsonplaceholder.typicode.com";
  const urls = [
    `${endPoint}/users`,
    `${endPoint}/todos`,
    `${endPoint}/posts`,
    `${endPoint}/comments`,
    `${endPoint}/albums`,
  ];
  const [users, setUsers] = useState(null);
  const [todos, setTodos] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [isPending, setIsPending] = useState(false);

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
        setAlbums(responses[4].data);
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
    <div className="w-[80%] h-full">
      {pathname === "/" && (
        <OverView
          users={users}
          todos={todos}
          posts={posts}
          comments={comments}
          albums={albums}
        />
      )}
      {pathname === "/users" && (
        <UserComponent isPending={isPending} users={users} />
      )}
      {pathname === "/photos" && <PhotoComponent />}
      {pathname === "/setting" && <SettingComponent />}
    </div>
  );
};

export default Wrapper;
