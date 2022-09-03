import React from 'react'

import { useSelector } from "react-redux";
const UserIcon = ({ userName}) => {

  const {userPhoto} = useSelector((s)=>s.user)
  return (
    <span className="rounded-full relative cursor-pointer">
      <img
        className={`rounded-full  w-8 object-cover ${
          // have a story
          true
          && "outline outline-blue-600 outline-2 outline-offset-1"
        }`}
        src={userPhoto}
        alt={userName}
      />
      <span
        className={`absolute  outline outline-1 outline-neutral-900 bottom-0 right-0 ${
          // isOnline
          true
            ? "w-2 h-2 rounded-full   bg-green-500 "
            : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
        }`}
      >
        {!true && false}
      </span>
    </span>
  );
}

export default UserIcon