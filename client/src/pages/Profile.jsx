import React from 'react'
import ProfileHero from '../components/ProfileHero';
import { Navbar } from '../layouts';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ProfileLeftBar from '../components/ProfileLeftBar';
import ProfileMainSection from '../components/ProfileMainSection';
const Profile = () => {
   const [user, setUser] = useState({});
   const username = useParams().username;

   useEffect(() => {
     const fetchUser = async () => {
       const res = await axios.get(`/users?username=${username}`);
       setUser(res.data);
     };
     fetchUser();
   }, [username]);

  return (
    <div className=" overflow-hidden">
      <Navbar />
      <main className="mt-14 h-[calc(100%-56px)] ">
        <ProfileHero user={user} />
        <section className="text-white flex w-full   flex-col lg:flex-row  max-w-[1250px] mx-auto    ">
          <div className="basis-2/5  px-8 pr-8 lg:pr-0 ">
        

            <ProfileLeftBar user={user} />
          </div>
          <div className="basis-3/5 px-5 pr-3">
            <ProfileMainSection />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile