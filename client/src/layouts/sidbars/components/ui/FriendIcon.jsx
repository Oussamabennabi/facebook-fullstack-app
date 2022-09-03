import React from "react";
import UserIcon from "./UserIcon";

const FriendsSidebarItem = ({
  userName,
  haveAStory,
  isOnline,
  oflineTime,
  leftIcon,
}) => {
  return (
    <div className=" flex justify-start items-center px-2 py-2 gap-4 w-full  cursor-pointer rounded-md hover:bg-neutral-700 ">
      <UserIcon
        haveAStory={haveAStory}
        leftIcon={leftIcon}
        userName={userName}
        isOnline={isOnline}
        oflineTime={oflineTime}
      />
      <h3 className=" font-semibold text-sm text-white">{userName}</h3>
    </div>
  );
};

export default FriendsSidebarItem;
