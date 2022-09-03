import React from 'react'




const SidebarItem = ({ leftIcon, children}) => {
  return (
    <div className=" flex justify-start items-center px-1 py-2 gap-4 w-full  cursor-pointer rounded-md hover:bg-neutral-700 ">
      <span className="rounded-full ">
        <img className='rounded-full w-9 object-cover' src={leftIcon} alt="" />
      </span>
      {children}
    </div>
  );
};

export default SidebarItem