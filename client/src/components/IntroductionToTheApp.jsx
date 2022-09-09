import { VscChromeClose } from "react-icons/vsc";
import { AiTwotoneStar } from "react-icons/ai";
import {WiStars} from 'react-icons/wi'
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_REDUCERS } from "../store/global-slice";
const IntroductionToTheApp = () => {
    const {isIntroductionHidden} = useSelector(s=>s.global)
    const dispatch = useDispatch()
    return (
      <>
        {!isIntroductionHidden && (
          <div className=" section-container  ">
            <div className="flex justify-between items-center p-1">
              <h1 className="font-bold text-xl flex items-center gap-1">
                <WiStars className="fill-yellow-300 scale-110 mt-1" />
                Introduction
              </h1>
              <button
                onClick={() => dispatch(GLOBAL_REDUCERS.hideIntroduction())}
                className="icon hover:bg-neutral-700   cursor-pointer scale-125 rounded-full p-2"
              >
                <VscChromeClose className="fill-neutral-400" />
              </button>
            </div>

            <div className="flex justify-center items-start flex-col gap-3 mt-3 p-1">
              <h1 className="w-full flex items-center  text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can instantly messege any one even if you dont follow him.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can see if someone is active or not.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can follow or unfollow a user.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can see other users profiles.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can update your bio and your photos.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can see all your recent logins in the login page.
              </h1>
              <h1 className="w-full flex items-center text-left">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                You can add a post and like it.
              </h1>
              <h1 className="w-full flex items-center text-left ">
                <AiTwotoneStar className="mr-2 fill-yellow-400" />
                Feel free to send me a message any time.
              </h1>
            </div>
          </div>
        )}
      </>
    );
};

export default IntroductionToTheApp;
