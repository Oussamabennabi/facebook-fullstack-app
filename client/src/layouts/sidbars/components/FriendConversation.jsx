import axios from "axios";
import React, { useEffect, useState } from "react";
import FriendsSidebarItem from "./ui/FriendsSidebarItem";

const FriendConversation = ({ conversation, currentUser, isOnline }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div>{user && <FriendsSidebarItem isOnline={isOnline} user={user} />}</div>
  );
};

export default FriendConversation;
