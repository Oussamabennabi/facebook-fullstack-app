import React from "react";
import { ImFilePicture } from "react-icons/im";
import { VscChromeClose } from "react-icons/vsc";
import { POST_REDUCERS } from "../../../../store/post-slice";
import { POST_ACTIONS } from "../../../../store/post-slice/actions";
import { useDispatch, useSelector } from "react-redux";
const AddPhotoOrVideo = ({ setShowAddPhotoOrVideoBlock }) => {
  const dispatch = useDispatch();
  const { image, video } = useSelector((s) => s.post);
  function handleImageChange(e) {
    
    const type = e.target.files[0].type.includes("image")
      ? "image":"video";
    if (type === "image") {
      dispatch(
        POST_REDUCERS.setPostData({
          type: POST_ACTIONS.image,
          data: e.target.files[0],
        })
      );
        
    }
    if (type === "video") {
      dispatch(
        POST_REDUCERS.setPostData({
          type: POST_ACTIONS.video,
          data: e.target.files[0],
        })
      );
    }


  }

  return (
    <label
      htmlFor="photo-video-input"
      className={`flex flex-col ${
        !image && "bg-neutral-700"
      } hover:bg-neutral-600 cursor-pointer rounded-lg p-2`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddPhotoOrVideoBlock(false)}
          className="icon hover:bg-neutral-500   cursor-pointer scale-125 rounded-full p-2"
        >
          <VscChromeClose fill="#B1B2B8" />
        </button>
      </div>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*, video/*"
            className="hidden"
            id="photo-video-input"
          />

          <div className="w-full h-40 grid place-items-center  cursor-pointer">
            <div>
              <button className="icon mx-auto bg-neutral-500 scale-[calc(1.8)] rounded-full p-2">
                <ImFilePicture fill="#FFFFFF" />
              </button>
              <div className="mt-4">
                <p className="font-bold">Add Photos/Videos</p>
                <small className="text-xs text-neutral-400">
                  or drag and drop
                </small>
              </div>
            </div>
          </div>
      
    </label>
  );
};

export default AddPhotoOrVideo;
