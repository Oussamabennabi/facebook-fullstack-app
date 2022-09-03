import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

import { AiOutlineMinus } from "react-icons/ai";
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { useDispatch } from 'react-redux';
import { MESSENGER_REDUCERS } from '../../../store/messenger-slice';
const MessengerHeader = () => {

  const dispatch = useDispatch()
  return (
    <div className="flex justify-between p-2  border-b border-neutral-700 ">
      <div className=""></div>

      <div className="flex justify-center items-center gap-0.5">
        <button className="icon  h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <PhoneIcon fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">start a voice call</div>
        </button>
        <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <VideoIcon fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">start a video call</div>
        </button>

        <button className="icon h-8 w-8  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
          <AiOutlineMinus fill="#B1B2B8" className="scale-125" />
          <div className=" info-text-from-top-mesg ">Minimize chat</div>
        </button>

        <button
          onClick={() => dispatch(MESSENGER_REDUCERS.hideMessenger())}
          className="icon h-8 w-8  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5"
        >
          <VscChromeClose fill="#B1B2B8" className="" />
          <div className=" info-text-from-top-mesg ">Cancel</div>
        </button>
      </div>
    </div>
  );
}

export default MessengerHeader