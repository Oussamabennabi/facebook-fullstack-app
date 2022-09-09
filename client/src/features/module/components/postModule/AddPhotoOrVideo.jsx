import React from "react";
import { ImFilePicture } from "react-icons/im";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { POST_REDUCERS } from "../../../../store/post-slice";
import { POST_ACTIONS } from "../../../../store/post-slice/actions";
const AddPhotoOrVideo = ({ setShowAddPhotoOrVideoBlock, setFormData }) => {
  const { image, video } = useSelector((s) => s.post);
  const dispatch = useDispatch();
  function handleImageChange(e) {
    const type = e.target.files[0].type.includes("image") ? "image" : "video";
    const file = e.target.files[0];
    const blob = file.slice(0, file.size,file.type);
    const newFile = new File(
      [blob],
      new Date().getMilliseconds() + file.lastModified * 2 + file.name,
      { type: file.type }
    );
  
    const data = new FormData();
    data.append("file", newFile);
    setFormData(data);

    if (type === "image") {
      dispatch(
        POST_REDUCERS.setPostData({
          type: POST_ACTIONS.image,
          data: newFile,
        })
      );
    }
    if (type === "video") {
      dispatch(
        POST_REDUCERS.setPostData({
          type: POST_ACTIONS.video,
          data: newFile,
        })
      );
    }
  }

  return (
    <label
      htmlFor="photo-video-input"
      className={`flex flex-col ${
        (!image || !video) && "bg-neutral-700"
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
        name="file"
        id="photo-video-input"
      />

      <div className="w-full h-40 grid place-items-center  cursor-pointer">
        <div>
          <button className="icon mx-auto bg-neutral-500 scale-[calc(1.8)] rounded-full p-2">
            <ImFilePicture fill="#FFFFFF" />
          </button>
          <div className="mt-4">
            <p className="font-bold">Add Photos/Videos</p>
            <small className="text-xs text-neutral-400">or drag and drop</small>
          </div>
        </div>
      </div>
    </label>
  );
};

export default AddPhotoOrVideo;
