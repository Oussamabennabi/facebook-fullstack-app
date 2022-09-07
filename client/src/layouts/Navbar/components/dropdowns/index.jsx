import React, { useContext } from 'react'

// REACT ICONS
import { VscSettingsGear } from "react-icons/vsc";
import { IoMdHelpCircle } from "react-icons/io";
import {
  MdFeedback,
  MdOutlineArrowForwardIos,
  MdLock,
  MdLanguage,
  MdOutlineMailOutline,
} from "react-icons/md";
import { AiFillCompass, AiTwotoneStar } from "react-icons/ai";
import {GoReport} from 'react-icons/go'
import { ImExit } from "react-icons/im";
import { FaLock, FaKeyboard } from "react-icons/fa";
import { BsListStars, BsFillMoonFill } from "react-icons/bs";
import {RiListSettingsFill} from 'react-icons/ri'
import {IoMdRadioButtonOn} from 'react-icons/io'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { DropdownItem } from '../AccountDropdown';

import { AuthContext } from '../../../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { loginCall, logoutCall } from '../../../../apiCalls';
import {FriendsSidebar} from '../../../'
export const MainDropdown = ({ setActiveMenu }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory()
  const {
    user: { username, profilePicture,  },
    dispatch,
  } = useContext(AuthContext);

  async function handleClick() {
    logoutCall(dispatch)
    history.push("/")
  }
  return (
    <>
      <div className="shadow-black mb-3 shadow-sm rounded-md">
        <Link to={"/profile/" + username}>
          <DropdownItem
            leftIcon={
              <img
                className="user-icon"
                alt={username}
                src={profilePicture ? PF + profilePicture : PF + "noAvatar.png"}
              />
            }
          >
            <h3 className="text-white font-semibold text-base my-auto">
              {username}
            </h3>
          </DropdownItem>
        </Link>
        <hr className="border-gray-700 w-11/12 mx-auto my-1" />
        <div onClick={() => setActiveMenu("select profile")}>
          <DropdownItem>
            <h3 className="text-blue-500 font-semibold text-sm">
              See all profiles
            </h3>
          </DropdownItem>
        </div>
      </div>
      <div onClick={() => setActiveMenu("settings")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<VscSettingsGear />}
        >
          <h3 className="text-white font-semibold ">Settings & privacy</h3>
        </DropdownItem>
      </div>
      <div onClick={() => setActiveMenu("help")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<IoMdHelpCircle />}
        >
          <h3 className="text-white font-semibold ">Help & support </h3>
        </DropdownItem>
      </div>
      <div onClick={() => setActiveMenu("display")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<BsFillMoonFill />}
        >
          <h3 className="text-white font-semibold ">Display & accessibility</h3>
        </DropdownItem>
      </div>
      <DropdownItem leftIcon={<MdFeedback />}>
        <h3 className="text-white font-semibold ">Give feedback</h3>
      </DropdownItem>
      <div onClick={handleClick}>
        <DropdownItem leftIcon={<ImExit />}>
          <h3 className="text-white font-semibold ">Log Out</h3>
        </DropdownItem>
      </div>
      <p className="text-sm text-neutral-500 mt-4">
        <a href="#privacy">Privacy</a>· <a href="#Terms">Terms</a>·{" "}
        <a href="#Advertising">Advertising</a>·{" "}
        <a href="#Ad Choices">Ad Choices</a>· <a href="#Cookies">Cookies</a>· ·
        Meta © 2022
      </p>
    </>
  );
};


export const SettingsDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>

        <h1 className="font-bold text-2xl text-white">Settings & privacy</h1>
      </div>
      {/* item */}
      <div>
        <DropdownItem leftIcon={<VscSettingsGear />}>
          <h3 className="text-white font-semibold ">Settings</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdLock />}>
          <h3 className="text-white font-semibold ">Privacy Checkup</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<FaLock />}>
          <h3 className="text-white font-semibold ">Privacy Center</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<BsListStars />}>
          <h3 className="text-white font-semibold ">Activity log</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<RiListSettingsFill />}>
          <h3 className="text-white font-semibold ">Feed</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdLanguage />}>
          <h3 className="text-white font-semibold ">Language</h3>
        </DropdownItem>
      </div>
    </>
  );
};

export const HelpDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>
        <h1 className="font-bold text-2xl text-white">Help & support</h1>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<IoMdHelpCircle />}>
          <h3 className="text-white font-semibold ">Help Center</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<MdOutlineMailOutline />}>
          <h3 className="text-white font-semibold ">Support Inbox</h3>
        </DropdownItem>
      </div>

      {/* item */}
      <div>
        <DropdownItem leftIcon={<GoReport />}>
          <h3 className="text-white font-semibold ">Report a problem</h3>
        </DropdownItem>
      </div>
    </>
  );
};
          

export const DisplayDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>
        <h1 className="font-bold text-2xl text-white">
          Display & accessibility
        </h1>
      </div>
      {/* item */}
      <div className="dropdown-item-no-hover dropdown-item ">
        <span className="left-icon mt-1">
          <BsFillMoonFill />{" "}
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-white font-semibold ">Dark Mode</h3>
          <p className="text-sm text-neutral-400">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </p>
        </div>
      </div>

      <fieldset>
        <label className="radio-filed text-white">
          <span>Off</span>
          <input type="radio" id="off" name="drone" value="off" />
        </label>

        <label className="radio-filed text-white">
          <span>On</span>
          <input type="radio" id="on" name="drone" value="on" />
        </label>

        <label className=" radio-filed text-white">
          <div className="flex flex-col items-start">
            <span>Automatic</span>
            <p className="text-[calc(11px)] text-neutral-400">
              We'll automatically adjust the display based opn your device's
              system settings.
            </p>
          </div>
          <input type="radio" id="Automatic" name="drone" value="Automatic" />
        </label>
      </fieldset>

      {/* item */}
      <div className="dropdown-item-no-hover dropdown-item  ">
        <span className="left-icon mt-1">
          <AiFillCompass />{" "}
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-white font-semibold ">Compact Mode</h3>
          <p className="text-sm text-neutral-400">
            Make your font size smaller so more content can fit on the screen.
          </p>
        </div>
      </div>

      {/* item */}
      <div onClick={() => setActiveMenu("keyboard")}>
        <DropdownItem
          rightIcon={<MdOutlineArrowForwardIos />}
          leftIcon={<FaKeyboard />}
        >
          <h3 className="text-white font-semibold ">Keyboard</h3>
        </DropdownItem>
      </div>
    </>
  );
};


export const KeyboardDropdown = ({ setActiveMenu }) => {
  return (
    <>
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("display")}>
          <BackIcon className="icon" />
        </span>
        <h1 className="font-bold text-2xl text-white">Help & support</h1>
      </div>

      {/* item */}

      <DropdownItem leftIcon={<FaKeyboard />}>
        <h3 className="text-white font-semibold ">
          See all keyboard shortcuts
        </h3>
      </DropdownItem>

      {/* item */}
      <div className="dropdown-item-no-hover dropdown-item  ">
        <span className="left-icon mt-1">
          <AiTwotoneStar />{" "}
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-white font-semibold ">
            Use single-character keyboard shortcuts
          </h3>
          <p className="text-sm text-neutral-400">
            Use single-character shortcuts to perform common actions.
          </p>
        </div>
      </div>

      <fieldset>
        <label className="radio-filed text-white">
          <span>Off</span>
          <input type="radio" id="off" name="drone" value="off" />
        </label>

        <label className="radio-filed text-white">
          <span>On</span>
          <input type="radio" id="on" name="drone" value="on" />
        </label>
      </fieldset>
    </>
  );
};
export const SelectProfileDropdown = ({ setActiveMenu }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user, dispatch } = useContext(AuthContext);
  const accounts = JSON.parse(localStorage.getItem("userAccounts"));
  const history = useHistory()
 
  function changeAccount(account) {
    logoutCall(dispatch)
    history.push("/");
    loginCall(account,dispatch)

  }
  return (
    <div className="">
      <div className="dropdown-header mb-3">
        <span onClick={() => setActiveMenu("main")}>
          <BackIcon className="icon" />
        </span>
        <h1 className="font-bold text-2xl text-white">Select Profile</h1>
      </div>
      {accounts?.slice(0, 5).map((account, i) => (
        <div
          onClick={()=>changeAccount(account)}
          key={i}>
          <DropdownItem
            isRadio
            rightIcon={
              <IoMdRadioButtonOn
                className={`${
                  user.username === account.username
                    ? "fill-blue-500 "
                    : "fill-gray-300"
                } text-lg`}
              />
            }
            leftIcon={
              <img
                className="user-icon"
                src={
                  account.profilePicture
                    ? PF + account.profilePicture
                    : PF + "noAvatar.png"
                }
                alt={account.username}
              />
            }
          >
            <h3 className="text-white font-semibold text-base my-auto mr-auto">
              {account.username}
            </h3>
          </DropdownItem>
        </div>
      ))}
    </div>
  );
};

export const FriendsDropdown = () => {
  
  return (
    <>
      <FriendsSidebar/>
    </>
  );
}     
