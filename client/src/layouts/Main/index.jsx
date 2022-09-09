import React, { useContext, useEffect, useState } from 'react'
import Post from '../../features/posts/components/Post';
import { useSelector } from "react-redux";
import Spiner from '../../components/ui/Spiner';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios"
import { CreateNewPostCard } from '../../features/posts';
import { useParams } from 'react-router-dom';
import IntroductionToTheApp from '../../components/IntroductionToTheApp';
const Main = () => {

  const { loading,  } = useSelector((s) => s.post);
 const [posts, setPosts] = useState([]);
 const username = useParams().username
 const {
   user: {username:curentUser,  _id },
 } = useContext(AuthContext);
 useEffect(() => {
   const fetchPosts = async () => {
     const res = username
       ? await axios.get("/posts/profile/" + username)
       : await axios.get("posts/timeline/" + _id);
     setPosts(
       res.data.sort((p1, p2) => {
         return new Date(p2.createdAt) - new Date(p1.createdAt);
       })
     );
   };
   fetchPosts();
 }, [username, _id]);
  


  return (
    <section className="  px-3 h-full overflow-scroll">
      {!username && <IntroductionToTheApp />}
      {(!username || username === curentUser) && <CreateNewPostCard />}

      <div className="w-full grid place-items-center">
        {loading && <Spiner />}
      </div>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  );
}

export default Main;