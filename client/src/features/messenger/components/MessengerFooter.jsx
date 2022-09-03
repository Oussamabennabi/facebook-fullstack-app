import React, { useState } from 'react'
import {BsEmojiSmileFill} from 'react-icons/bs'
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';
import { ReactComponent as FileIcon } from '../assets/icons/file.svg';
import { ReactComponent as StickerIcon } from '../assets/icons/sticker.svg';
import { useSelector } from "react-redux";

import { ReactComponent as GifIcon } from '../assets/icons/gif.svg';
import { ReactComponent as LikeIcon } from "../assets/icons/like.svg";
import { ReactComponent as SendIcon } from "../assets/icons/send.svg";
import EmojiPicker from './EmojiPicker';
import { useEffect } from 'react';


const MessengerFooter = ({socket,setMessages}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [emoji, setEmoji] = useState('')
  const [message, setMessage] = useState('')
  const [spanInput, setspanInput] = useState(false);


  const { isSignedIn, userName, userId } = useSelector((s) => s.user);

  useEffect(() => {
    if (message!== "")
      setspanInput(true)
     else 
      setspanInput(false);      

  }, [message])
  useEffect(() => {
    setMessage(message + emoji);
    setEmoji('')
    }, [emoji]);

  async function handleSubmit() {
    if(message==="") return 
    const messageData = {
      message,
      userName,
      userId,
      date:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    setMessage("")
    await socket.emit("send-message", messageData);
    setMessages((prev) => [...prev, messageData]);
  }

  return (
    <div className="border-t border-neutral-700 p-2 ">
      <div className="flex justify-center items-center gap-1 ">
        <div className="flex justify-start items-center gap-1">
          <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
            <PlusIcon fill="#B1B2B8" className="" />
            <div className=" info-text-from-top-mesg ">Open more actions</div>
          </button>

          {/* tO HIDE THE ICONS */}
          {!spanInput && (
            <div className="flex justify-between items-start">
              <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
                <FileIcon fill="#B1B2B8" className="" />
                <div className=" info-text-from-top-mesg ">Attach a file</div>
              </button>
              <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
                <StickerIcon fill="#B1B2B8" className="" />
                <div className=" info-text-from-top-mesg ">
                  Choose a sticker
                </div>
              </button>
              <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
                <GifIcon fill="#B1B2B8" className="" />
                <div className=" info-text-from-top-mesg ">Choose a gif</div>
              </button>
            </div>
          )}
        </div>

        <div className="flex w-full relative justify-center items-center gap-1">
          <div className="relative w-full h-full flex-shrink">
            <input
              type="text"
              className="resize-none text-white bg-neutral-700 w-full  placeholder:text-neutral-500 outline-none rounded-full py-1.5 pr-10 px-2"
              placeholder="Aa"
              onKeyPress={(e)=> {e.key==="Enter"&&handleSubmit()} }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="absolute  right-1 top-1/2 translate-y-[calc(-50%)]">
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className=" icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5"
              >
                <BsEmojiSmileFill fill="#B1B2B8" className="" />
                <div className=" info-text-from-top-mesg ">Choose an Emoji</div>
              </button>

              {showEmojiPicker && (
                <div className="absolute   bottom-full right-0">
                  <EmojiPicker setEmoji={setEmoji} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          {spanInput ? (
            <button
              type="submit"
              onClick={handleSubmit}
              className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5"
            >
              <SendIcon fill="#B1B2B8" className="" />
              <div className=" info-text-from-top-mesg ">
                Press Enter to send
              </div>
            </button>
          ) : (
            <button className="icon h-8 w-8 hover:bg-neutral-600 cursor-pointer  rounded-full p-0.5">
              <LikeIcon fill="#B1B2B8" className="" />
              <div className=" info-text-from-top-mesg ">Send a Like</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessengerFooter