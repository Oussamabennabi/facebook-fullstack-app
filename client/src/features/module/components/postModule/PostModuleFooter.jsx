import React from 'react'
import { BsThreeDots, BsFlag, BsFillPersonPlusFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { ReactComponent as FeelingActivityIcon} from "../../assets/feeling-activity.svg";
import { ReactComponent as PhotoVideoIcon} from "../../assets/photo-video.svg";
import {useDispatch,useSelector} from 'react-redux'
import { serverTimestamp } from 'firebase/firestore';
import { MODULE_REDUCERS } from '../../../../store/module-slice';
import { POST_REDUCERS } from '../../../../store/post-slice';
import { POST_ACTIONS } from '../../../../store/post-slice/actions';
const PostModuleFooter = ({setShowAddPhotoOrVideoBlock,showAddPhotoOrVideoBlock }) => {
  const dispatch = useDispatch()
  	const { userName, userPhoto, userId } = useSelector((s) => s.user);
    
	const { text, image, video } = useSelector((s) => s.post);
  
  function handleSubmit() {
    console.log("submited")
      const payload = {
        userName,
        userId,
        text,
        userPhoto,
        image: image ? image : null,
        video: video ? video : null,
        timestamp: serverTimestamp(),
    };
    
    // TODO: post the POST
    
      dispatch(MODULE_REDUCERS.hideModule());
       dispatch(
         POST_REDUCERS.clearPost({
           type: POST_ACTIONS.clearAll,
         })
       );
  

  }
  return (
    <div className="px-5">
      <div className="flex justify-between border border-neutral-600 rounded-lg px-3 py-3">
        {/* ADD TO POST */}
        <button className="font-bold cursor-pointer">Add to your post</button>
        {/* END OF ADD TO POST */}
        {/* ICONS */}
        <div className="flex gap-2 justify-end items-center ">
          {/* ICON */}
          <button
            onClick={() => setShowAddPhotoOrVideoBlock(true)}
            className={`icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2 ${
              showAddPhotoOrVideoBlock && "bg-black"
            }`}
          >
            <PhotoVideoIcon fill="#44BC62" className="scale-125" />
            <div className=" info-text-from-top ">Photo/Video</div>
          </button>
          {/* END OF ICON */}

          {/* ICON */}
          <button className="icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <BsFillPersonPlusFill className=" scale-15" fill="#1877F2" />
            <div className=" info-text-from-top ">Tag people</div>
          </button>
          {/* END OF ICON */}

          {/* ICON */}
          <button className="icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <FeelingActivityIcon fill="#F7B829" className="scale-125" />
            <div className=" info-text-from-top ">Feeling/activity</div>
          </button>
          {/* END OF ICON */}

          {/* ICON */}
          <button className="icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <TiLocation className=" scale-125" fill="#F2435F" />
            <div className="info-text-from-top ">Ckeck in</div>
          </button>
          {/* END OF ICON */}

          {/* ICON */}
          <button className="icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <BsFlag fill="#39AED4" className="scale-125" />
            <div className=" info-text-from-top ">Life events</div>
          </button>
          {/* END OF ICON */}

          {/* ICON */}
          <button className="icon hover:bg-neutral-700 cursor-pointer scale-125 rounded-full p-2">
            <BsThreeDots className="scale-125" />
            <div className=" info-text-from-top ">More</div>
          </button>
          {/* END OF ICON */}
        </div>
        {/* END OF ICONS  */}
      </div>

      <div className="w-full mt-5">
        <button
          onClick={handleSubmit}
          disabled={!text}
          className="disabled:bg-neutral-600 disabled:cursor-not-allowed bg-blue-600 font-bold hover:bg-blue-500  cursor-pointer w-full p-2 rounded-lg "
        >
          Post
        </button>
      </div>
    </div>
  );
}



export default PostModuleFooter