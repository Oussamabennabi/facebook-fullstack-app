import React from 'react'

const ExpandIcon = ({ icon,text,setState,state}) => {
  return (
    <button
      onClick={() => setState(!state)}
      className=" flex justify-start items-center px-1 py-2 gap-4 w-full  cursor-pointer rounded-md hover:bg-neutral-600 "
    >
      <span className="text-4xl">{icon}</span>
      <span className="font-semibold text-base text-white">{text}</span>
    </button>
  );
}

export default ExpandIcon