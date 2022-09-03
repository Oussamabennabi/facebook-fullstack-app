import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as FriendsIcon } from "../assets/icons/friends.svg";
import { ReactComponent as WatchIcon } from "../assets/icons/watch.svg";
import { ReactComponent as MarketplaceIcon } from "../assets/icons/marketplace.svg";
import { ReactComponent as GroupsIcon } from "../assets/icons/groups.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

const MiddleIcons = () => {
  return (
    <div className="middle-icons-container icons-container">
      <NavLink className="icon" to={"/"} exact activeClassName="active">
        <span>
          <HomeIcon fill="#B1B2B8" />
          <div className="info-text">Home</div>
        </span>
      </NavLink>

      <NavLink className="icon" to={"/friends"} activeClassName="active">
        <span>
          <FriendsIcon fill="#B1B2B8" />
          <div className="info-text">Friends</div>
        </span>
      </NavLink>

      <NavLink className="icon" to={"/watch"} activeClassName="active">
        <span>
          <WatchIcon fill="#B1B2B8" />
          <div className="info-text">Watch</div>
        </span>
      </NavLink>

      <NavLink className="icon " to={"/marketplace"} activeClassName="active">
        <span>
          <MarketplaceIcon fill="#B1B2B8" />
          <div className="info-text">Marketplace</div>
        </span>
      </NavLink>
    
      <NavLink
        className="icon group-icon"
        to={"/groups"}
        activeClassName="active"
      >
        <span>
          <GroupsIcon fill="#B1B2B8" />
      <div className="info-text">Groups</div>
        </span>
      </NavLink>

      <NavLink
        className="icon menu-icon"
        to={"/bookmarks"}
        activeClassName="active"
      >
        <span>
          <MenuIcon fill="#B1B2B8" />
          <div className="info-text">More</div>
        </span>
      </NavLink>
    </div>
  );
};

export default MiddleIcons;
