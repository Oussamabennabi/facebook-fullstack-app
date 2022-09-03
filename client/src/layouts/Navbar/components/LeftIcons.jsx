import React, {  useRef, useState } from 'react'
import  FacebookIcon  from "../assets/icons/facebook.png";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as BackIcon } from "../assets/icons/back.svg";
import { useOutsideAlerter } from '../../../hooks/useOutsideAlert';
import { Link } from 'react-router-dom';
const LeftIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setIsSearchOpen);
  
  return (
    <div className="left-icons-container icons-container">
      <button>
        <Link to="/">
          <img className='w-10'
            src={FacebookIcon} alt="facebook" />
        </Link>
      </button>
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="icon bg-neutral-700 flex xl:hidden"
      >
        <SearchIcon fill="#B1B2B8" />
      </button>

      <input
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        type="text"
        className="rounded-full border-none text-white pl-8 py-1.5 outline-none bg-neutral-700 xl:flex hidden placeholder:text-neutral-500"
        placeholder="Search Facebook"
      />
      <div
        ref={wrapperRef}
        className={`search-container ${isSearchOpen ? "flex" : "hidden"} `}
      >
        <div className="search-input-box ">
          <span
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="icon bg-neutral-700 hover:bg-neutral-600"
          >
            <BackIcon fill="#B1B2B8" />
          </span>
          <input
            type="text"
            className="bg-neutral-700  placeholder:text-neutral-500"
            placeholder="Search Facebook"
          />

          <SearchIcon className="search-icon " fill="#B1B2B8" />
        </div>
        <div className="search-results text-neutral-500">
          <p>No recent searches</p>
        </div>
      </div>
    </div>
  );
}

export default LeftIcons