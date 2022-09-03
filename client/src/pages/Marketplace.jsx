import React from 'react'
import { useSelector } from "react-redux";
// import { Navigate } from 'react-router-dom';
import { Navbar } from '../layouts';

const Marketplace = () => {
    const { isSignedIn } = useSelector((s) => s.user);

        if (!isSignedIn) {
          // return <Navigate to="/" replace />;
        }

  return (
    <div className=" h-screen  overflow-hidden">
      <Navbar />
      <main className="mt-14 h-[calc(100%-56px)]"></main>
    </div>
  );
}

export default Marketplace