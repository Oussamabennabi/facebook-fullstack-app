import React, { useContext, useRef, useState } from 'react'
import { ReactComponent as CreateIcon } from "../assets/icons/create.svg";
import { ReactComponent as MessengerIcon } from "../assets/icons/messenger.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { AccountDropdown } from "./AccountDropdown";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlert";
import { AuthContext } from '../../../context/AuthContext';
import MessengerDropdown from './MessengerDropdown';
const RightIcons = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user:{profilePicture} } = useContext(AuthContext);
  
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isMessengerDropdownOpen, setIsMessengerDropdownOpen] = useState(false);
 const AccountDropDownRef = useRef(null);
 const messengerDropdownRef = useRef(null)
  useOutsideAlerter(AccountDropDownRef, setIsAccountDropdownOpen);
  useOutsideAlerter(messengerDropdownRef, setIsMessengerDropdownOpen);
  
  return (
    <div className="right-icons-container icons-container">
      <button className="icon ">
        <CreateIcon fill="#d0d1d5" className="mb-1 mr-1" />
        <div className="info-text">Create</div>
      </button>
      <button
        onClick={() => setIsMessengerDropdownOpen((p) => !p)}
        className="icon"
      >
        <MessengerIcon fill="#d0d1d5" />
        <div className="info-text">Messenger</div>
      </button>
      <button className="icon">
        <NotificationIcon fill="#d0d1d5" />
        <div className="info-text">Notification</div>
      </button>
      <button
        onClick={() => setIsAccountDropdownOpen((p) => !p)}
        className="user-icon"
      >
        <img alt={ profilePicture} src={profilePicture ? PF + profilePicture : PF + "noAvatar.png"} />
        <div className="info-text">Account</div>
      </button>
      <div ref={AccountDropDownRef}>
        {isAccountDropdownOpen && <AccountDropdown />}
      </div>
      <div ref={messengerDropdownRef}>
        {isMessengerDropdownOpen && <MessengerDropdown />}
      </div>
    </div>
  );
}

export default RightIcons