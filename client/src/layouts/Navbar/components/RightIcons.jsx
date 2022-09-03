import React, { useContext, useRef, useState } from 'react'
import { ReactComponent as CreateIcon } from "../assets/icons/create.svg";
import { ReactComponent as MessengerIcon } from "../assets/icons/messenger.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import {Dropdown} from "./Dropdown";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlert";
import {useDispatch, useSelector} from 'react-redux'
import { MESSENGER_REDUCERS } from '../../../store/messenger-slice';
import { AuthContext } from '../../../context/AuthContext';
const RightIcons = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [isOpen, setIsOpen] = useState(false);
 const wrapperRef = useRef(null);
 const dispatch = useDispatch()
  useOutsideAlerter(wrapperRef, setIsOpen);
  const { user:{username,profilePicture} } = useContext(AuthContext);
  
  return (
    <div className="right-icons-container icons-container">
      <button className="icon ">
        <CreateIcon fill="#d0d1d5" className="mb-1 mr-1" />
        <div className="info-text">Create</div>
      </button>
      <button
        onClick={() => dispatch(MESSENGER_REDUCERS.showMessenger())}
        className="icon"
      >
        <MessengerIcon fill="#d0d1d5" />
        <div className="info-text">Messenger</div>
      </button>
      <button className="icon">
        <NotificationIcon fill="#d0d1d5" />
        <div className="info-text">Notification</div>
      </button>
      <button onClick={() => setIsOpen(!isOpen)} className="user-icon">
        <img
          src={profilePicture ? PF + profilePicture : PF + "noAvatar.png"}
          alt={username}
        />
        <div className="info-text">Account</div>
      </button>
      <div ref={wrapperRef}>{isOpen && <Dropdown />}</div>
    </div>
  );
}

export default RightIcons