 import React, { useState } from 'react';
import ModuleContainer from './components/ModuleContainer';
import PostModuleHeader from "./components/postModule/PostModuleHeader";
import PostModuleBody from "./components/postModule/PostModuleBody";
import PostModuleFooter from "./components/postModule/PostModuleFooter";
const CreatePostModule = () => {
  const [showAddPhotoOrVideoBlock, setShowAddPhotoOrVideoBlock] = useState(true);
  const [formData,setFormData] = useState(null)
  
  return (
    <ModuleContainer>
      <PostModuleHeader />
      <PostModuleBody
        setFormData={setFormData}
        setShowAddPhotoOrVideoBlock={setShowAddPhotoOrVideoBlock}
        showAddPhotoOrVideoBlock={showAddPhotoOrVideoBlock}
      />
      <PostModuleFooter
        setShowAddPhotoOrVideoBlock={setShowAddPhotoOrVideoBlock}
        showAddPhotoOrVideoBlock={showAddPhotoOrVideoBlock}
        formData={formData}
      />
    </ModuleContainer>
  );
};

export default CreatePostModule