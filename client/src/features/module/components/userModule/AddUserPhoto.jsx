import React, { useContext } from "react";
import { useState } from "react";
import { ImFilePicture } from "react-icons/im";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { MODULE_REDUCERS } from "../../../../store/module-slice";
import axios from 'axios'
import { AuthContext } from "../../../../context/AuthContext";
const AddUserPhoto = () => {
  const moduleDispatch = useDispatch();
  const { typeOfImage } = useSelector((s) => s.module);
  const [image, setImage] = useState(null);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  async function handleSubmit() {
    var blob = image.slice(0, image.size, image.type);
    const newFile = new File(
      [blob],
      new Date().getMilliseconds() + (image.lastModified *2) + image.name,
      { type: image.type }
    );

    const data = new FormData();
    data.append("file", newFile);

    if (typeOfImage === "profilePicture") {
      try {
        await axios.put("/users/" + currentUser._id, {
          userId: currentUser._id,
          profilePicture: newFile.name,
        });

        dispatch({ type: "ADD_PROFILE_PICTURE", payload: newFile.name });
      } catch (error) {
        console.log(error);
      }
    } else if (typeOfImage === "profileCover") {
      // update the cover
      try {
        await axios.put("/users/" + currentUser._id, {
          userId: currentUser._id,
          coverPicture: newFile.name,
        });
        dispatch({ type: "ADD_PROFILE_COVER", payload: newFile.name });
      } catch (error) {
        console.log(error);
      }
    }

    // uploading the image
    try {
      await axios.post("/upload", data);
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
    moduleDispatch(MODULE_REDUCERS.hideUserModule());
  }

  return (
    <>
      {!image ? (
        <label
          htmlFor="photo-video-input"
          className={`mx-5 text-center flex flex-col bg-neutral-700 hover:bg-neutral-600 cursor-pointer rounded-lg p-2`}
        >
          <div className="flex justify-end"></div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
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
                <small className="text-xs text-neutral-400">
                  or drag and drop
                </small>
              </div>
            </div>
          </div>
        </label>
      ) : (
        <div className="relative">
          <button
            onClick={() => setImage(null)}
            className="hover:bg-neutral-500 bg-neutral-700 absolute ml-auto  top-2 right-5 cursor-pointer scale-125 rounded-full p-2"
          >
            <VscChromeClose fill="#B1B2B8" />
          </button>
          <img
            loading="lazy"
            className="w-full h-full -z-10"
            src={URL.createObjectURL(image)}
            alt={URL.createObjectURL(image)}
          />
        </div>
      )}

      <div className="px-5 mt-8 flex justify-end gap-2">
        <button
          onClick={() => {
            moduleDispatch(MODULE_REDUCERS.hideUserModule());
          }}
          className="py-2  text-center px-3 font-bold bg-neutral-700 hover:bg-neutral-600 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={!image}
          className="disabled:cursor-not-allowed disabled:hover:bg-neutral-700 disabled:text-neutral-500 py-2  text-center px-3 font-bold bg-neutral-700 hover:bg-neutral-600 rounded-lg"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default AddUserPhoto;
