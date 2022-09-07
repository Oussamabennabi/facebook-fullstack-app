import React from 'react'
import { useSelector } from "react-redux";


import Main from '../layouts/Main';
import CreatePostModule from "../features/module/CreatePostModule";
import { FriendsSidebar,FeaturesSidebar, Navbar } from '../layouts';


const Home = () => {
  const { isPostModuleHidden } = useSelector((s) => s.module);

  

  return (
    <div className="Home h-screen  overflow-hidden">
      <Navbar />
    
    <main className="main-page max-w-[calc(1920px)] mx-auto mt-14 h-[calc(100%-56px)] ">
        <aside className="left-sidebar overflow-y-scroll">
          <FeaturesSidebar />
        </aside>

        <div className="posts">
          {!isPostModuleHidden && <CreatePostModule />}
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