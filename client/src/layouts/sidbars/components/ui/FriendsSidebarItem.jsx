import React from "react";

const FriendsSidebarItem = ({ user, isOnline }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className=" flex justify-start items-center px-2 py-2 gap-4 w-full  cursor-pointer rounded-md hover:bg-neutral-700 ">
      <span className="rounded-full relative cursor-pointer">
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "noAvatar.png"
          }
          className={`rounded-full  w-8 object-cover outline outline-blue-600 outline-2 outline-offset-1"
        }`}
          alt={user.username}
        />
        <span
          className={`absolute  outline outline-1 outline-neutral-900 bottom-0 right-0 ${
            isOnline
              ? "w-2 h-2 rounded-full   bg-green-500 "
              : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
          }`}
        ></span>
      </span>
      <h3 className=" font-semibold text-sm text-white">{user.username}</h3>
    </div>
  );
};

export default FriendsSidebarItem;
