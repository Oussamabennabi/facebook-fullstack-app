import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { MODULE_REDUCERS } from "../../../../store/module-slice";

const UserModuleHeader = () => {
  const dispatch = useDispatch();
  const { selectedUserModule } = useSelector((s) => s.module);

  return (
    <>
      <div className="px-5  flex justify-between items-center h-10">
        <h1 className="font-bold text-xl mx-auto">{selectedUserModule}</h1>
        <button
          onClick={() => {
            dispatch(MODULE_REDUCERS.hideUserModule());
          }}
          className="icon z-[2] hover:bg-neutral-600 bg-neutral-700  cursor-pointer scale-125 rounded-full p-2"
        >
          <VscChromeClose fill="#B1B2B8" />
          <div className="info-text ">Cancel</div>
        </button>
      </div>
      <hr className="border-neutral-700 my-2" />
    </>
  );
};

export default UserModuleHeader;
