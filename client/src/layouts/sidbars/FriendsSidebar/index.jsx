import React from 'react'
import FriendsSidebarItem from '../components/ui/FriendIcon';

import { ReactComponent as NewRoomIcon } from "./assets/new_room.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as OptionsIcon } from "./assets/options.svg";

// TODO: USER
import userPhoto from './assets/user.jpg'

const FriendsSidebar = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden max-w-[calc(360px)] flex justify-between w-full flex-col items-center py-4 px-2 ">
      {/*  Friends List */}
      <div className="w-full">
        {/* Friends List Header */}
        <div className="mb-2 flex justify-between items-center  w-full">
          <h3 className="text-neutral-500  font-bold">Contacts</h3>

          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <span className="contact-icon icon relative">
              <NewRoomIcon fill="#B1B2B8" />
              <div className="info-text-contact-icon  ">New room</div>
            </span>

            <span className="contact-icon icon relative">
              <SearchIcon fill="#B1B2B8" />
              <div className="info-text-contact-icon ">
                Search by name or group
              </div>
            </span>

            <span className="contact-icon icon relative">
              <OptionsIcon fill="#B1B2B8" />
              <div className="info-text-contact-icon ">Options</div>
            </span>
          </div>
        </div>
        {/* END OF Friends List Header */}
        <FriendsSidebarItem
          haveAStory
          isOnline
          oflineTime="12h"
          userName={"Oussama Bennabi"}
          leftIcon={userPhoto}
        />
        <FriendsSidebarItem
          haveAStory
          isOnline
          // oflineTime="12h"
          userName={"Walid Shiban"}
          leftIcon={userPhoto}
        />{" "}
        <FriendsSidebarItem
          // haveAStory
          // isOnline
          oflineTime="12h"
          userName={"yanki with no brim"}
          leftIcon={userPhoto}
        />
      </div>
      {/*  END of Friends List */}
    </div>
  );
}

export default FriendsSidebar