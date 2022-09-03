import React from 'react'
import { useSelector } from "react-redux";


import Main from '../layouts/Main';
import FeaturesSidebar from '../layouts/sidbars/FeaturesSidebar';
import FriendsSidebar from '../layouts/sidbars/FriendsSidebar';

import CreatePostModule from "../features/module/CreatePostModule";
// import { Navigate } from 'react-router-dom';
import { Navbar } from '../layouts';

const Home = () => {
  const { isModuleHidden } = useSelector((s) => s.module);
 const { isSignedIn } = useSelector((s) => s.user);

     if (!isSignedIn) {
      //  return <Navigate to="/" replace />;
     }
  


  return (
    <div className="Home h-screen  overflow-hidden">
      <Navbar />
      <main className="main-page max-w-[calc(1920px)] mx-auto mt-14 h-[calc(100%-56px)] ">
        <aside className="left-sidebar overflow-y-scroll">
          <FeaturesSidebar />
        </aside>

        <div className="posts">
          {!isModuleHidden && <CreatePostModule />}
          <Main />
        </div>
        <aside className="right-sidebar flex justify-end overflow-y-scroll  ">
          <FriendsSidebar />
        </aside>
      </main>
    </div>
  );
}


export default Home