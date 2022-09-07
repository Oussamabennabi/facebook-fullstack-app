import React, { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

import { AiOutlineMinus } from "react-icons/ai";
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { useDispatch, useSelector } from 'react-redux';
import { MESSENGER_REDUCERS } from '../../../store/messenger-slice';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import {BsChevronCompactDown} from 'react-icons/bs'
const MessengerHeader = ({ currentChat }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friend, setFriend] = useState(null)
  const { user: currentUser } = useContext(AuthContext)
  const {socket} = useSelector(s=>s.messenger)
  const [isPersonOnline,setIsPersonOnline] = useState(false)
  useEffect(() => {
    async function getFriend() {
      if(!currentChat) return 
      const userId = currentChat?.members?.find((m) => m !== currentUser._id);
      try {
        const res = await axios.get("/users?userId="+userId)
        setFriend(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFriend()
  }, [currentChat,currentUser]);
  const dispatch = useDispatch();

  
  useEffect(() => {
    socket.emit("getAllUsers");
    socket.on("getUsers", (users) => {
      setIsPersonOnline(
        users.find(
          (f) => f.userId === friend?._id && f.userId !== currentUser._id
        )
      );

    });
  }, [socket, currentUser, friend?._id]);
  
  return (
    <div className="flex justify-between p-2 pl-1 border-b border-neutral-700 ">
      <div className="person-info relative cursor-pointer hover:bg-neutral-600 pr-2 rounded-lg flex items-center gap-2 justify-center ">
        <Link
          className="hover:bg-neutral-500 cursor-pointer p-1 relative rounded-lg"
          to={`profile/${friend?.username}`}
        >
          <img
            className="w-[1.9rem] h-[1.9rem] rounded-full "
            src={
              friend?.profilePicture
                ? PF + friend.profilePicture
                : PF + "noAvatar.png"
            }
            alt=""
          />

          <span
            className={`absolute  outline outline-1 outline-neutral-900 bottom-1 right-1 ${
              isPersonOnline
                ? "w-2 h-2 rounded-full   bg-green-500 "
                : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
            }`}
          ></span>
        </Link>

        <div className=" info-text-from-top-mesg group-hover:opacity-100 ">
          Chat Settings
        </div>
        <div className="flex items-center gap-1 ">
          <div className="flex flex-col  w-full">
            <h2 className="text-white overflow-hidden whitespace-nowrap text-ellipsis font-bold text-sm w-full max-w-[120px]">
              {friend?.username}
            </h2>
            <small className="text-neutral-400 text-xs">
              {isPersonOnline && "Active now"}
            </small>
          </div>
          <BsChevronCompactDown fill="#B1B2B8" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-0.5">
        <button className="icon  h-7 w-7 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <PhoneIcon fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">start a voice call</div>
        </button>
        <button className="icon h-7 w-7 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <VideoIcon fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">start a video call</div>
        </button>

        <button className="icon h-7 w-7  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <AiOutlineMinus fill="#B1B2B8" className="scale-125" />
          <div className=" info-text-from-top-mesg ">Minimize chat</div>
        </button>

        <button
          onClick={() => dispatch(MESSENGER_REDUCERS.hideMessenger())}
          className="icon h-7 w-7  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5"
        >
          <VscChromeClose fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">Cancel</div>
        </button>
      </div>
    </div>
  );
};

export default MessengerHeader