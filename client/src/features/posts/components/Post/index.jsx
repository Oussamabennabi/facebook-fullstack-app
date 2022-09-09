import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiComment, } from "react-icons/bi";
import {AiFillLike} from 'react-icons/ai'
import { RiShareForwardLine } from "react-icons/ri";
import { format } from "timeago.js";
import {AuthContext} from '../../../../context/AuthContext'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Post = ({post}) => {

   const [like, setLike] = useState(post.likes.length);
   const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [isPersonOnline, setIsPersonOnline] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {socket} = useSelector(s=>s.messenger)
   const {
     user: { _id},
   } = useContext(AuthContext);

   useEffect(() => {
     setIsLiked(post.likes.includes(_id));
   }, [_id, post.likes]);

   useEffect(() => {
     const fetchUser = async () => {
       const res = await axios.get(`/users?userId=${post.userId}`);
       setUser(res.data);
     };
     fetchUser();
   }, [post.userId]);

   const likeHandler = () => {
     try {
       axios.put("/posts/" + post._id + "/like", { userId: _id });
     } catch (err) {}
     setLike(isLiked ? like - 1 : like + 1);
     setIsLiked(!isLiked);
   };
  
  // handeling if the user is online

  useEffect(() => {
    socket.emit("getAllUsers");
     socket.on("getUsers", (users) => {
       setIsPersonOnline(users.find((f) => f.userId=== post.userId));
     });
   }, [post.userId, socket]);
  return (
    <div className="section-container ">
      <div className="post-info section-container items-center ">
        <div>
          <Link to={`/profile/${user.username}`}>
            <span className="rounded-full relative cursor-pointer">
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "noAvatar.png"
                }
                className={`rounded-full  w-9 object-cover outline outline-blue-600 outline-2 outline-offset-1"
        }`}
                alt={user.username}
              />
              <span
                className={`absolute  outline outline-1 outline-neutral-900 bottom-0 right-0 ${
                  isPersonOnline
                    ? "w-2 h-2 rounded-full   bg-green-500 "
                    : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
                }`}
              ></span>
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-start mr-auto">
          <Link to={`/profile/${user.username}`}>
            <h1 className="flex flex-col  font-semibold cursor-pointer">
              {user.username}
            </h1>
          </Link>
          <small>{format(post.createdAt)}</small>
        </div>
        <div>
          <button className="hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <BsThreeDots className="  fill-neutral-400" />
          </button>
        </div>
      </div>

      <div className="title">{post?.desc}</div>
      <div className="thumb">
        {post.image && !post.video && (
          <img src={PF + post.image} alt="postImage" />
        )}

        {post.video && !post.image && (
          <video controls src={PF + post.video}></video>
        )}
      </div>

      <div className="stats-container">
        <span>
          <small>{like} likes</small>
          <small>{} comments </small> &#8226; <small>{} shared </small>
        </span>
      </div>
      <hr className="border-neutral-700 " />
      <div className="icons my-2">
        <button onClick={likeHandler} className={`like-btn`}>
          <AiFillLike
            className={` mr-2 scale-125 ${isLiked && "fill-blue-500"} `}
          />
          <div className={`text ${isLiked && "text-blue-500"} `}>Like</div>
        </button>
        <button>
          <BiComment className="mr-2 scale-125" />
          <div className="text">Comment</div>
        </button>
        <button>
          <RiShareForwardLine className="mr-2 scale-125" />
          <div className="text">share</div>
        </button>
        <div className="sub-icons">
          <span>
            <small>Like</small>
          </span>
          <span>
            <small>Celebrate</small>
          </span>
          <span>
            <small>Support</small>
          </span>
          <span>
            <small>Love</small>
          </span>
          <span>
            <small>Insightful</small>
          </span>
          <span>
            <small>Curious</small>
          </span>
        </div>
      </div>
      <hr className="border-neutral-700 " />
    </div>
  );
};

export default Post;
