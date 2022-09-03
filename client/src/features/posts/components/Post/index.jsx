import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiComment, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { format } from "timeago.js";

import { useSelector } from "react-redux";
const Post = ({post}) => {

const { userName } = useSelector((s) => s.user);
  return (
    <div className="section-container">
      <div className="post-info section-container">
        <div>
          <span className="rounded-full relative cursor-pointer">
            <img
              className={`rounded-full  w-8 object-cover ${
                // have a story
                true && "outline outline-blue-600 outline-2 outline-offset-1"
              }`}
              src={post.userPhoto}
              alt={post.userName}
            />
            <span
              className={`absolute  outline outline-1 outline-neutral-900 bottom-0 right-0 ${
                // isOnline
                true
                  ? "w-2 h-2 rounded-full   bg-green-500 "
                  : "text-green-700 font-bold  scale-90 -bottom-1 -right-1  bg-neutral-900 text-xs rounded-2xl"
              }`}
            >
              {!true && false}
            </span>
          </span>
        </div>
        <div className="flex flex-col items-start mr-auto">
          <h1 className="flex flex-col  font-semibold cursor-pointer">
            {post.userName}
          </h1>
          <small>{format(post.timestamp)}</small>
        </div>
        <div>
          <button className="hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <BsThreeDots className="  fill-neutral-400" />
          </button>
        </div>
      </div>

      <div className="title">{post.text}</div>
      <div className="thumb">
        {post.image && !post.video && <img src={post.image} alt="postImage" />}

        {post.video && !post.image && <video controls src={post.video}></video>}
      </div>

      <div className="stats-container">
        <span>
          <small>{} comments </small> &#8226; <small>{} shared </small>
        </span>
      </div>
      <hr className="border-neutral-700 " />
      <div className="icons my-2">
        <button className="like-btn ">
          <BiLike className="mr-2 scale-125" />
          <div className="text">Like</div>
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
