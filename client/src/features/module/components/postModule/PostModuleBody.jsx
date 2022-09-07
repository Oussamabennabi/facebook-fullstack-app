import React, { memo, useMemo } from "react";

import AddPhotoOrVideo from "./AddPhotoOrVideo";
import { useSelector, useDispatch } from "react-redux";
import { VscChromeClose } from "react-icons/vsc";

import { POST_REDUCERS } from "../../../../store/post-slice";
import { POST_ACTIONS } from "../../../../store/post-slice/actions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
const PostModuleBody = ({setShowAddPhotoOrVideoBlock,showAddPhotoOrVideoBlock}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user:{username, profilePicture} } = useContext(AuthContext);
  const {image,video} = useSelector((s) => s.post);
  const dispatch = useDispatch()
  
  
  function handleTextChange(e) {
      dispatch(
        POST_REDUCERS.setPostData({
          type: POST_ACTIONS.desc,
          data: e.target.value,
        })
      );

    
  }
  
  const videoComponent = useMemo(() => (
    <Video video={ video}/>
  ),[video]);
 
 const imageComponent = useMemo(() => <Image image={image} />, [image]);
 

  return (
    <div className="px-5 pr-[calc(20px-9px)] overflow-y-scroll  max-h-[calc(500px)] ">
      {/* USER INFO */}
      <div className="flex gap-3 justify-start">
        <img
          className="rounded-full cursor-pointer w-10 h-10 object-cover hover:brightness-110"
          src={profilePicture ? PF + profilePicture : PF + "noAvatar.png"}
          alt="user"
        />

        <div className="flex flex-col gap-1 items-start">
          <h1 className="font-semibold text-sm">
            {username}
            {" is a feeling like a legend"}
          </h1>
          <button className=" text-sm rounded  bg-neutral-600 px-2 py-1 ">
            Friends except...
          </button>
        </div>
      </div>
      {/* END OF USER INFO */}

      {/* TEXTAREA */}
      <div className={`my-4 h-40 ${showAddPhotoOrVideoBlock && "h-20"}`}>
        <textarea
          className=" resize-none outline-none w-full text-xl  h-full text-inherit bg-transparent"
          autoFocus={true}
          onChange={handleTextChange}
          placeholder="What do you want to talk about?"
        />
      </div>
      {/* END OFTEXTAREA */}
      {/* ADD PHOTOS */}
      {showAddPhotoOrVideoBlock && (
        <div className="p-2 my-4 flex flex-col justify-between border  border-neutral-600 rounded-lg px-3 py-3">
          {(image || video) && (
            <div className="relative h-full w-full">
              <button
                onClick={() => {
                  setShowAddPhotoOrVideoBlock(false);
                  dispatch(
                    POST_REDUCERS.clearPost({
                      type: image
                        ? POST_ACTIONS.image
                        : video
                        ? POST_ACTIONS.video
                        : "",
                    })
                  );
                }}
                className=" ml-auto z-50 hover:bg-neutral-700 bg-neutral-800 absolute top-2 right-2 cursor-pointer scale-125 rounded-full p-2"
              >
                <VscChromeClose fill="#B1B2B8" />
              </button>
              {image && imageComponent}

              {video && videoComponent}
            </div>
          )}

          {!image && !video && (
            <AddPhotoOrVideo
              setShowAddPhotoOrVideoBlock={setShowAddPhotoOrVideoBlock}
            />
          )}
        </div>
      )}
      {/* END OF ADD PHOTOS */}
    </div>
  );
};

function Video({ video}) {
  return (
    video&&
    <video
      className="w-full h-full"
        controls
      src={URL.createObjectURL(video)}
      alt={URL.createObjectURL(video)}
    ></video>
  );
}

function Image({ image }) {
  return (
    image && (
      <img
        loading="lazy"
        className="w-full h-full"
        src={URL.createObjectURL(image)}
        alt={URL.createObjectURL(image)}
      />
    )
  );
}
export default memo(PostModuleBody);
