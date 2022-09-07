
import React from 'react'
import { useEffect } from 'react';
import Message from './Message';
import { useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
const MessengerBody = ({  messages }) => {
  const {user} = useContext(AuthContext)
  const scrollToRef = useRef()
  useEffect(() => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  })
  return (
    <div className="text-white overflow-y-scroll overflow-x-hidden  h-[calc(347px)]">
      <div className=" h-full w-full z-[calc(1000000000000)]">
        {messages.length > 0 &&
          messages.map((message, i) => (
            <Message
              key={i}
              message={message}
              sender={message?.sender === user?._id}
            />
          ))}
          {!messages &&
        <h1 className='text-center pb-7'>
            Send a message
        </h1>
          }

        <div ref={scrollToRef} className="hideen"></div>
      </div>
    </div>
  );
}

export default MessengerBody

