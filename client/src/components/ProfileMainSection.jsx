import React from 'react'
import { useSelector } from 'react-redux';
import CreatePostModule from '../features/module/CreatePostModule';
import SelectUserPhotosModule from '../features/module/SelectUserPhotosModule';
import Main from '../layouts/Main'
const ProfileMainSection = () => {
  const { isUserModuleHidden, isPostModuleHidden } = useSelector(
    (s) => s.module
  );
  return (
    <div className="text-white ">
      {!isUserModuleHidden && <SelectUserPhotosModule forTheUser={true} />}
      {!isPostModuleHidden && <CreatePostModule />}
      <Main />
    </div>
  );
}

export default ProfileMainSection