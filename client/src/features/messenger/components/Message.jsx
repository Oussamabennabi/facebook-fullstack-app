import React from 'react'
import '../assets/index.css'
import { RiShareForwardFill } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'
import {CgMoreVerticalAlt} from 'react-icons/cg'
const Message = ({ message, sender }) => {


    return (
      <div
        className={`mb-1 pl-10 pr-4 text-white message flex items-center justify-start w-full ${
          sender && "justify-end"
        } `}
      >
        <div
          className={`relative  message-text  max-w-[calc(200px)] ${
            sender && "order-2"
          }`}
        >
          <p
            className={`px-3 py-1.5 text-sm  break-words ${
              message.message.length > 20
                ? "rounded-2xl rounded-br-3xl  rounded-tr-lg"
                : "rounded-3xl"
            } ${sender ? "bg-blue-600" : "bg-neutral-600"}`}
          >
            {message.message}
          </p>
          <small className=" z-[calc(1000000)]   bg-gray-400 whitespace-nowrap select-none opacity-0 rounded-lg px-4 py-2 absolute pointer-events-none text-gray-800 text-xs -left-1 top-1/2  -translate-y-1/2 -translate-x-full transition-all delay-200">
            {message.date}
          </small>
        </div>

        <div
          className={`message-items   justify-center items-center  ${
            sender ? "ml-auto mr-2" : "mr-auto ml-2"
          }`}
        >
          <button className="icon h-6 w-6  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
            <BsEmojiSmile fill="#B1B2B8" className="" />
            <div className=" info-text-from-top-mesg text-xs">React</div>
          </button>

          <button className="icon h-6 w-6  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
            <RiShareForwardFill fill="#B1B2B8" className=" share-icon " />
            <div className=" info-text-from-top-mesg text-xs">Share</div>
          </button>

          <button className="icon h-6 w-6  hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
            <CgMoreVerticalAlt fill="#B1B2B8" className="" />
            <div className=" info-text-from-top-mesg text-xs">More</div>
          </button>
        </div>
      </div>
    );
}

export default Message