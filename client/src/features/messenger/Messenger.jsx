import React, { useState } from 'react'
import MessengerBody from './components/MessengerBody';
import MessengerFooter from './components/MessengerFooter';
import MessengerHeader from './components/MessengerHeader';
import { io} from "socket.io-client"
import { useSelector } from 'react-redux'

const socket = io("http://localhost:3001");

const Messenger = () => {
  const { isMessengerHidden } = useSelector((s) => s.messenger);
  const [messages, setMessages] = useState([]);
  
 
  
  return (
    <>
      {!isMessengerHidden &&
      <div className="w-[calc(328px)] h-[calc(455px)] absolute bottom-2 rounded-md right-16 z-[calc(10000)] bg-neutral-800">
        <MessengerHeader />
        <MessengerBody socket={socket} messages={messages} setMessages={setMessages} />
        <MessengerFooter socket={socket}  setMessages={setMessages} />
      </div>
      }
    </>
  );
}

export default Messenger