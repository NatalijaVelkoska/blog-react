import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import PostCard from "./PostCard";

export default function PostsList() {
  const { getPosts, blogPosts, loading } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {!loading ? (
        blogPosts.map((post) => <PostCard post={post} />)
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}
