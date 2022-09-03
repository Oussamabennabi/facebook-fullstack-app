import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { MODULE_REDUCERS } from "../../../store/module-slice";
import { POST_REDUCERS } from "../../../store/post-slice";
import { POST_ACTIONS } from "../../../store/post-slice/actions";

const ModuleContainer = ({ children }) => {
  const dispatch = useDispatch();
  const moduleRef = useRef();
  const handleClickOutside = useCallback(
    (event) => {
      if (moduleRef.current && !moduleRef.current.contains(event.target)) {
        dispatch(MODULE_REDUCERS.hideModule());
        // clear the post data when we close
           dispatch(
             POST_REDUCERS.clearPost({
               type: POST_ACTIONS.clearAll,
             })
           );
      }
    },
    [moduleRef, dispatch]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);


    return (
      <div className="bg-black bg-opacity-75 z-[calc(100000000000)]  fixed  inset-0 h-screen px-3 ">
        <div
          ref={moduleRef}
          className="bg-neutral-800 py-3  m-auto shadow-lg shadow-black rounded-lg max-h-[calc(90%)]  w-full  lg:mt-48 mt-10  max-w-lg "
        >
          {children}
        </div>
      </div>
    );
};

export default ModuleContainer;
