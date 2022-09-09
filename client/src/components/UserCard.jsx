import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BsMessenger } from "react-icons/bs";

const UserCard = ({ user, handleMessenger }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  return (
    <div className="rounded-lg h-full w-full bg-neutral-700">
      <Link to={`profile/${user.username}`}>
        <div className="relative">
          <img
            className="rounded-tr-lg object-cover w-full rounded-tl-lg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvatar.png"
            }
            alt=""
          />
          
        </div>
      </Link>
      <div className="p-3">
        <h1 className="pb-3">{user.username}</h1>
        <Link className="" to={`profile/${user.username}`}>
          <button className="w-full  text-sm rounded-lg bg-blue-600 px-3 py-2 font-bold hover:bg-blue-500   gap-2 flex justify-center items-center">
            Go to {currentUser._id === user._id ? "my" : ""} profile
          </button>
        </Link>
        {currentUser._id !== user._id && (
          <button
            onClick={() => handleMessenger(user)}
            className="w-full  mt-2 rounded-lg bg-neutral-600 px-3 py-2 font-bold hover:bg-neutral-500   gap-2 flex justify-center items-center"
          >
            <BsMessenger className="" />
            <span className="text-sm">Send Message</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard