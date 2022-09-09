import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProfileLeftBar = ({ user }) => {
  return (
    <>
      <IntroCard user={user} />
      <FriendsCard user={user} />
    </>
  );
};

function IntroCard({ user})
{
  const [bio,setBio] = useState("")
  const [showBio, setShowBio] = useState(false)
  const {user:currentUser,dispatch} = useContext(AuthContext)
 
  async function submitBio() {
    
    try {
      await axios.put("/users/"+user._id,{userId:currentUser._id,desc:bio})
        dispatch({ type: "ADD_DESC", payload: bio });

    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  } 
    return (
      <div className="section-container ">
        <h1 className="font-bold text-xl mb-5">Intro</h1>
        <div className="flex flex-col gap-5">
          {/* user description */}
          <div>
            <p>{user.desc}</p>
          </div>
          {user.username === currentUser.username && (
            <>
              {showBio && (
                <div className="w-full">
                  <textarea
                    name="bio"
                    id="bio"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    className="font-bold placeholder:text-neutral-300 bg-neutral-700 text-center resize-none rounded-lg p-2 border-none outline-none outline-2 outline-offset-1 w-full hover:bg-neutral-600  focus:outline-blue-600"
                    maxLength={101}
                    placeholder="Descibe who you are"
                  ></textarea>
                  <div className="mt-2 flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setShowBio(!showBio);
                        setBio("");
                      }}
                      className="py-2  text-center px-3 font-bold bg-neutral-700 hover:bg-neutral-600 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={submitBio}
                      disabled={bio === ""}
                      className="disabled:cursor-not-allowed disabled:hover:bg-neutral-700 disabled:text-neutral-500 py-2  text-center px-3 font-bold bg-neutral-700 hover:bg-neutral-600 rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {!showBio && (
                <button
                  onClick={() => setShowBio(!showBio)}
                  className="py-2 text-center w-full  bg-neutral-700 hover:bg-neutral-600 rounded-lg"
                >
                  {user.desc?"Update bio":"Add bio" } 
                </button>
              )}
            </>
          )}

          {/* USER DETAILS */}
          <div>
            <h1 className="font-bold text-xl mb-5">Details</h1>
            <h1 className="font-bold text-sm mb-1">Relationship :</h1>
            <h3 className="mb-2">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </h3>
            <h1 className="font-bold text-sm mb-2">City :</h1>
            <h3 className="mb-2">{user.city}</h3>
            <h1 className="font-bold text-sm mb-2">From :</h1>
            <h3 className="mb-2">{user.from}</h3>
          </div>
          {user.username === currentUser.username && (
            <>
              <button className="py-2 text-center w-full  bg-neutral-700 hover:bg-neutral-600 rounded-lg">
                Edit details
              </button>
              <button className="py-2 text-center w-full  bg-neutral-700 hover:bg-neutral-600 rounded-lg">
                Edit hobbies
              </button>
              <button className="py-2 mb-4 text-center w-full  bg-neutral-700 hover:bg-neutral-600 rounded-lg">
                Add featured
              </button>
            </>
          )}
        </div>
      </div>
    );
}
 
function FriendsCard({ user}) {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    const getFriends = async () => {
      try {
        
        const friendList =user? await axios.get("/users/friends/" + user._id):[];
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
    return (
      <div className="section-container ">
        <div className="flex justify-between mb-4 items-center font-bold">
          <div className="flex flex-col items-start">
            <h1 className=" text-xl ">Friends</h1>
            <span className="text-neutral-400  font-bold">
              {user?.followers?.length} followers
            </span>
            <span className="text-neutral-400  font-bold">
              {user?.followings?.length} following
            </span>
          </div>

          <button className="text-blue-500  px-2 py-3 rounded-lg hover:bg-neutral-700">
            See all friends
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 place-items-center">
          {friends.map((friend, i) => (
            <FriendCard key={i} user={friend} />
          ))}
        </div>
      </div>
    );
}

function FriendCard({ user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <Link to={`/profile/${user.username}`}>
      <div className='flex justify-start flex-col cursor-pointer'>
        <img
          className="rounded-lg w-full h-full max-w-[210px] object-cover hover:brightness-105"
          src={
            user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"
          }
          alt=""
            />
            <h4 className='font-bold text-sm mt-1'>{ user.username}</h4>
      </div>
        </Link>
    );
}
export default ProfileLeftBar