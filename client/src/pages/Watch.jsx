import React from 'react'
import { Navbar } from '../layouts';
import { useSelector } from "react-redux";
// import { Navigate } from 'react-router-dom';

const Watch = () => {
    const { isSignedIn } = useSelector((s) => s.user);

        if (!isSignedIn) {
            // return <Navigate  to="/" replace />;
        }

  return (
    <div className=" h-screen  overflow-hidden">
      <Navbar />
      <main className="mt-14 h-[calc(100%-56px)]"></main>
    </div>
  );
}

export default Watch