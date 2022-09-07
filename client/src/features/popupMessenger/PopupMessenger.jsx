import React, { useContext, useEffect,  useState } from 'react'
import MessengerBody from './components/MessengerBody';
import MessengerFooter from './components/MessengerFooter';
import MessengerHeader from './components/MessengerHeader';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
const PopupMessenger = () => {
  const { isMessengerHidden,currentChat } = useSelector((s) => s.messenger);
   const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const {socket } = useSelector(s=>s.messenger)
  const {user} = useContext(AuthContext)

    useEffect(() => {
      socket.on("getMessage", (data) => {
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: new Date().toLocaleDateString("en-DZ", {
            weekday: "short",
            minute: "2-digit",
            hour: "2-digit",
          }),
        });
      });
    }, [user,socket]);

    useEffect(() => {
      arrivalMessage &&
        currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
      const getMessages = async () => {
        try {
          const res = await axios.get("/messages/" + currentChat?._id);
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMessages();
    }, [currentChat]);


  return (
    <>
      {!isMessengerHidden && (
        <div className="w-[calc(328px)] h-[calc(455px)] fixed bottom-2 rounded-md right-16 z-[calc(10000)] bg-neutral-800">
          <MessengerHeader currentChat={currentChat} />
          <MessengerBody messages={messages} setMessages={setMessages} />
          <MessengerFooter messages={messages} setMessages={setMessages} />
        </div>
      )}
    </>
  );
};

export default PopupMessenger;