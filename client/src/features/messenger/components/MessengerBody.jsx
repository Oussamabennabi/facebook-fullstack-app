
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Message from './Message';
import {useSelector} from 'react-redux'
import { useRef } from 'react';
const MessengerBody = ({socket,messages,setMessages}) => {
  const { isSignedIn, userName, userId } = useSelector((s) => s.user);
  const scrollToRef = useRef()
  socket.on("message-resive", (message) => {

    setMessages((prev) => [...prev, message]);
    console.log('enterd');
  });
  useEffect(() => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
    
  })
  return (
    <div className="text-white  overflow-y-scroll overflow-x-hidden h-[calc(347px)]">
      <div className=" h-full w-full z-[calc(10000000)]">
        {messages.length > 0 &&
          messages.map((message, i) => (
            <Message
              key={i}
              message={message}
              sender={userId === message.userId}
            />
          ))}
        <div ref={scrollToRef} className='hideen' ></div>
      </div>
    </div>
  );
}

export default MessengerBody

