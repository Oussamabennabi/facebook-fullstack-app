import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AiFillCamera, AiFillCaretDown, AiOutlineMinus } from "react-icons/ai";
import { BsFillPencilFill, BsThreeDots, BsMessenger } from "react-icons/bs";
import {IoMdAdd} from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MODULE_REDUCERS } from "../store/module-slice";
import { MESSENGER_REDUCERS } from "../store/messenger-slice";
const ProfileHero = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const usernameParam = useParams().username;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  //  if user online
  const { socket } = useSelector((s) => s.messenger);
  const messengerDispatch = useDispatch()
  const [isPersonOnline, setIsPersonOnline] = useState(false);

  const moduleDispatch = useDispatch();
  // follow

  const [followed, setFollowed] = useState(
    currentUser.followings?.includes(user?._id)
  );
  useEffect(() => {
    const isFollowed = currentUser.followings?.includes(user?._id);
    setFollowed(isFollowed);
  }, [currentUser, user]);
  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
        setFollowed(false);
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });

        dispatch({ type: "FOLLOW", payload: user._id });
        setFollowed(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // handeling if the user is online

  useEffect(() => {
    socket.emit("getAllUsers");
    socket.on("getUsers", (users) => {
      setIsPersonOnline(users.find((f) => f.userId === user._id&& f.userId!== currentUser._id ));
    });
  }, [user, socket, currentUser]);
  
  // 
   
   
  const handleMessenger = async () => {
      try {

        const res = await axios.get(
          `/conversations/find/${currentUser._id}/${user._id}`
        );
        if (res.data) { 
          // if there is a conversation between the two
          messengerDispatch(MESSENGER_REDUCERS.showMessenger({ chat: res.data }));
        } else {
          // if there is no  conversation between the two
          const res = await axios.post("/conversations",{senderId:currentUser._id,
            receiverId:user._id});
          messengerDispatch(
            MESSENGER_REDUCERS.showMessenger({ chat: res.data })
          );

        }

      } catch (err) {
        console.log(err);
      }
    };
  
  
  return (
    <header className=" text-white relative bg-neutral-800">
      <div className="h-[300px] max-w-[1250px] bg-neutral-900  -mt-0.5 mx-auto rounded-lg shadow-inner  shadow-black cursor-pointer relative">
        {user.coverPicture && (
          <img
            className="w-full h-full cursor-pointer"
            src={PF + user.coverPicture}
            alt=""
          />
        )}

        {usernameParam === currentUser.username && (
          <button
            onClick={() =>
              moduleDispatch(
                MODULE_REDUCERS.showUserModule({ type: "profileCover" })
              )
            }
            className=" rounded-lg z-10 cursor-pointer  bg-white px-3 py-2 font-bold hover:bg-gray-200  absolute bottom-3 right-8 gap-2 flex justify-center items-center"
          >
            <AiFillCamera className="scale-125 text-black" />
            <span className="hidden md:block text-black">
              {user.coverPicture ? "Update your cover" : "Add cover photo"}
            </span>
          </button>
        )}
      </div>

      <div className="max-w-[1250px] mx-auto px-8 ">
        <div className="flex gap-6 items-center -translate-y-1/4 flex-col md:-translate-y-6  md:flex-row">
          <div className="relative">
            <img
              className="outline  outline-neutral-600 w-[168px] h-[168px] hover:brightness-105 rounded-full cursor-pointer"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "noAvatar.png"
              }
              alt=""
            />
            <span
              className={`absolute  outline outline-1 outline-neutral-900 bottom-2.5 right-6 ${
                isPersonOnline
                  ? "w-4 h-4 rounded-full   bg-green-500 "
                  : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
              }`}
            ></span>
            {usernameParam === currentUser.username && (
              <button
                onClick={() => {
                  moduleDispatch(
                    MODULE_REDUCERS.showUserModule({ type: "profilePicture" })
                  );
                }}
              >
                <span className="p-2.5 absolute bottom-5 bg-neutral-600 rounded-full  right-5 hover:bg-neutral-500 cursor-pointer">
                  <AiFillCamera className="fill-neutral-200 scale-[1.7] " />
                </span>
              </button>
            )}
          </div>

          <div className=" flex flex-col justify-between items-center md:items-start">
            <h2 className=" font-bold text-2xl">{user.username}</h2>
            <span className="text-neutral-400 font-bold">
              {user?.followers?.length} followers
            </span>
            <span className="text-neutral-400 font-bold">
              {user?.followings?.length} following
            </span>

            <div className="friends icons"></div>
          </div>

          <div className="buttons w-full md:w-auto ml-0 md:ml-auto flex gap-3 justify-center  items-center">
            <button
              onClick={
                usernameParam === currentUser.username ? null : handleFollow
              }
              className="w-full  sm:w-auto rounded-lg bg-blue-600 px-3 py-2 font-bold hover:bg-blue-500   gap-2 flex justify-center items-center"
            >
              {usernameParam === currentUser.username ? (
                <>
                  <IoMdAdd className="scale-150 fill-neutral-200" />
                  <span className="text-sm">Add to story</span>
                </>
              ) : (
                <>
                  {followed ? (
                    <AiOutlineMinus className="scale-150 fill-neutral-200" />
                  ) : (
                    <IoMdAdd className="scale-150 fill-neutral-200" />
                  )}

                  <span className="text-sm">
                    {followed ? "Unfollow" : "Follow"}
                  </span>
                </>
              )}
            </button>

            <button
              onClick={
                usernameParam === currentUser.username ? null : handleMessenger
              }
              className="w-full sm:w-auto rounded-lg bg-neutral-700 px-3 py-2 font-bold hover:bg-neutral-600   gap-2 flex justify-center items-center"
            >
              {usernameParam === currentUser.username ? (
                <>
                  <BsFillPencilFill className="" />
                  <span className="text-sm">Edit profile</span>
                </>
              ) : (
                <>
                  <BsMessenger className="" />
                  <span className="text-sm">Message</span>
                </>
              )}
            </button>
          </div>
        </div>
        <hr className="border-neutral-600 mt-3 " />
        <div className="  text-[15px] text-neutral-400 flex justify-start mt-1 items-center  ">
          <NavLink
            className="py-3 px-4 font-bold hover:bg-neutral-700 transition-all duration-100 rounded-md "
            to={`/profile/${usernameParam}`}
            exact
            activeClassName="active"
          >
            <button className="">Posts</button>
          </NavLink>

          <NavLink
            className="py-3 px-4 font-bold hover:bg-neutral-700 transition-all duration-100 rounded-md "
            to={`/profile/${usernameParam}/about`}
            activeClassName="active"
          >
            <button className="">About</button>
          </NavLink>

          <NavLink
            className="py-3 px-4 font-bold hover:bg-neutral-700 transition-all duration-100 rounded-md "
            to={`/profile/${usernameParam}/friends`}
            activeClassName="active"
          >
            <button className="">Friends</button>
          </NavLink>

          <NavLink
            className="py-3 px-4 font-bold hover:bg-neutral-700 transition-all duration-100 rounded-md  "
            to={`/profile/${usernameParam}/photos`}
            activeClassName="active"
          >
            <button className="">Photos</button>
          </NavLink>
          <NavLink
            className="p-3 font-bold hover:bg-neutral-700 transition-all || hidden sm:block ||  duration-100 rounded-md  "
            to={`/profile/${usernameParam}/videos`}
            activeClassName="active"
          >
            <button className="">Videos</button>
          </NavLink>
          <NavLink
            className="p-3 font-bold hover:bg-neutral-700 transition-all hidden md:block duration-100 rounded-md  "
            to={`/profile/${usernameParam}/map`}
            activeClassName="active"
          >
            <button className="">Check-ins</button>
          </NavLink>

          <button className="flex items-center gap-1 p-3 font-bold hover:bg-neutral-700 transition-all duration-100 rounded-md  ">
            <span>More</span> <AiFillCaretDown className="mt-0.5" />
          </button>

          <button className="ml-auto flex items-center gap-1 px-5 py-2.5 font-bold hover:bg-neutral-600 bg-neutral-700 transition-all duration-100 rounded-md  ">
            <BsThreeDots className="scale-125 fill-neutral-200" />
          </button>
        </div>
      </div>
    </header>
  );
};
//882
export default ProfileHero;
