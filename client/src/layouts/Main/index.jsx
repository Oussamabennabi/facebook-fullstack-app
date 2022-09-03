import React, { useEffect } from 'react'
import CreateNewPostCard from '../../features/posts/components/CreateNewPostCard';
import Post from '../../features/posts/components/Post';
import { useSelector, useDispatch } from "react-redux";
import Spiner from '../../components/ui/Spiner';
const Main = () => {
  const { loading, posts } = useSelector((s) => s.post);

  const dispatch = useDispatch();

  return (
    <section className="main-section  px-3 h-full overflow-scroll">
      <CreateNewPostCard />
      <div className='w-full grid place-items-center'>
        {loading && <Spiner/>}

      </div>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  );
}

export default Main;