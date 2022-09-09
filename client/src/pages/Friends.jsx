import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';

import { useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FeaturesSidebar, Navbar } from '../layouts';
import { MESSENGER_REDUCERS } from '../store/messenger-slice';
import { useDispatch } from 'react-redux';
import UsersContainer from '../components/UsersContainer';
const Friends = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allFriends, setAllFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
     const messengerDispatch = useDispatch()

  // get all user
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        
        const allFriends = await axios.get("/users/friends/"+currentUser._id);
        setAllFriends(allFriends.data);
        const allUsers = await axios.get("/users/allusers");
        setAllUsers(allUsers.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, [currentUser._id]);

   
  const handleMessenger = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentUser._id}/${user._id}`
      );
      if (res.data) {
        // if there is a conversation between the two
        messengerDispatch(MESSENGER_REDUCERS.showMessenger({ chat: res.data }));
      } else {
        // if there is no  conversation between the two
        const res = await axios.post("/conversations", {
          senderId: currentUser._id,
          receiverId: user._id,
        });
        messengerDispatch(MESSENGER_REDUCERS.showMessenger({ chat: res.data }));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" h-screen  overflow-hidden">
      <Navbar />
      <main className="main-page mt-14 h-[calc(100%-56px)] text-white">
        <aside className="left-sidebar overflow-y-scroll">
          <FeaturesSidebar />
        </aside>
        <div className=" overflow-y-scroll w-full">
          {/* All friends */}
          <UsersContainer
            handleMessenger={handleMessenger}
            users={allFriends}
            containerHeader="See All Your Friends"
          />

          {/* All users */}
          <UsersContainer
            handleMessenger={handleMessenger}
            users={allUsers}
            containerHeader="See All Users"
          />
         
        </div>
      </main>
    </div>
  );
}

export default Friends