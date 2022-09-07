import React from 'react'
import ModuleContainer from './components/ModuleContainer';
import UserModuleHeader from "./components/userModule/UserModuleHeader";
import AddUserPhoto from './components/userModule/AddUserPhoto';

const SelectUserPhotosModule = ({forTheUser}) => {

  return (
    <ModuleContainer forTheUser={forTheUser}>
      <UserModuleHeader
      />
      <AddUserPhoto
      />
    </ModuleContainer>
  );
}

export default SelectUserPhotosModule