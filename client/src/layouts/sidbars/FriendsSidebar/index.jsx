import  { useContext, useEffect, useState } from "react";
import { ReactComponent as NewRoomIcon } from "./assets/new_room.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as OptionsIcon } from "./assets/options.svg";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import FriendConversation from "../components/FriendConversation";
import { useDispatch, useSelector } from "react-redux";
import { MESSENGER_REDUCERS } from "../../../store/messenger-slice";
const FriendsSidebar = ({ fromDropdown}) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const { socket, currentChat } = useSelector((s) => s.messenger);

  const [conversations, setConversations] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);

  //get friends and online friends
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  // get all online users in the socket server
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    user && socket.emit("addUser", user._id);
    socket.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user, socket,currentChat]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + user._id);
      setFriends(res.data);
    };
    getFriends();
  }, [user._id]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  // get all conversations
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id,socket]);

  return (
    <div className="overflow-y-scroll overflow-x-hidden max-w-[calc(360px)] flex justify-between w-full flex-col items-center py-4 px-2 ">
      {/*  Friends List */}
      <div className="w-full">
        {/* Friends List Header */}
        <div className="mb-2 flex justify-between items-center w-full">
          <h3 className="text-neutral-500  font-bold">
            {fromDropdown ? "Chats" : "Contacts"}
          </h3>

          <div className={`flex justify-center items-center ${fromDropdown?"gap-0":"gap-4"} cursor-pointer`}>
            <span
              className={`contact-icon icon  relative ${
                fromDropdown && "scale-75"
              }`}
            >
              <NewRoomIcon
                fill="#B1B2B8"
                className={`${fromDropdown && "mb-4 "}`}
              />
              <div className="info-text-contact-icon ">New room</div>
            </span>

            <span
              className={`contact-icon icon relative ${
                fromDropdown && "scale-75"
              }`}
            >
              <SearchIcon fill="#B1B2B8" />
              <div className="info-text-contact-icon ">
                Search by name or group
              </div>
            </span>

            <span
              className={`contact-icon icon relative ${
                fromDropdown && "scale-75"
              }`}
            >
              <OptionsIcon fill="#B1B2B8" />
              <div className="info-text-contact-icon ">Options</div>
            </span>
          </div>
        </div>

        {conversations.map((c, i) => {
          const member = c.members.find((m) => m !== user._id);
          return (
            <div
              key={i}
              onClick={() => {
                dispatch(MESSENGER_REDUCERS.showMessenger({ chat: c }));
              }}
            >
              <FriendConversation
                conversation={c}
                isOnline={onlineFriends.find((f) => f._id === member)}
                currentUser={user}
              />
            </div>
          );
        })}
      </div>
      {/*  END of Friends List */}
    </div>
  );
};

export default FriendsSidebar;
