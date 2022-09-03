import React from 'react'
import { useSelector } from "react-redux";
import {IoMdAddCircle} from 'react-icons/io'
import { MdOutlineClose } from "react-icons/md";

import { useDispatch } from "react-redux";

const UserCard = ({ isAddAccount }) => {
  const {userName,userPhoto} = useSelector((s) => s.user);
  const dispatch = useDispatch()
  return (
    <div
      // onClick={() => dispatch(signInAPI())}
      className="rounded-lg group overflow-hidden  relative w-40 border cursor-pointer shadow-sm bg-white hover:shadow-lg transition-all duration-200 ease-in-out "
    >
      {!isAddAccount && (
        <div className=""
          // onClick={()=>dispatch(signOutAPI())}
        >
          <MdOutlineClose
            className="top-1 left-1 group group-hover:fill-gray-500  fill-white group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100 group-hover:scale-150 
          group-hover:bg-white
          absolute rounded-full bg-black bg-opacity-40"
          />
        </div>
      )}

      {!isAddAccount ? (
        <div className=" text-center">
          <img
            title={userName}
            className="object-cover w-full h-full"
            src={userPhoto}
            alt={userName}
          />
          <h1 className="text-xl py-2 text-gray-700">{userName}</h1>
        </div>
      ) : (
        <div className=" text-center ">
          <div className="flex h-40 justify-center bg-slate-50 items-center">
            <IoMdAddCircle fill="#1876F3" className="text-5xl" />
          </div>
          <h1 className="text-xl py-2  text-blue-500">{"Add Account"}</h1>
        </div>
      )}
    </div>
  );
}

export default UserCard