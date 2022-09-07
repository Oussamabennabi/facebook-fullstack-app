import React from 'react'
import { useContext } from 'react';
import {IoMdAddCircle} from 'react-icons/io'
import { MdOutlineClose } from "react-icons/md";
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';


const UserCard = ({ isAddAccount, user = "", setUserAccounts }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { dispatch } = useContext(AuthContext);
  function login() {
    const email = user.email;
    const password = user.password;
    loginCall({email,password},dispatch)
  }

  function logout() {
    const updatedAccountes = JSON.parse(
      localStorage.getItem("userAccounts")
    ).filter((account) => {
      return account._id !== user._id;
    });
    localStorage.setItem("userAccounts", JSON.stringify(updatedAccountes));
    setUserAccounts(JSON.parse(localStorage.getItem("userAccounts")));
  }
  return (
    <div
      
      className="rounded-lg group overflow-hidden  relative w-40 border cursor-pointer shadow-sm bg-white hover:shadow-lg transition-all duration-200 ease-in-out "
    >
      {!isAddAccount && (
        <div className="" onClick={logout}>
          <MdOutlineClose
            className="top-1 left-1 group group-hover:fill-gray-500  fill-white group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-100 group-hover:scale-150 
          group-hover:bg-white
          absolute rounded-full bg-black bg-opacity-40"
          />
        </div>
      )}

      {!isAddAccount ? (
        <div onClick={login}
          className=" text-center ">
          <img
            title={user.username}
            className="object-cover w-full h-full"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvatar.png"
            }
            alt={user.username}
          />
          <h1 className="text-xl py-2 px-1 text-gray-700">{user.username}</h1>
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
};

export default UserCard