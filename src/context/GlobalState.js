import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const getPosts = async () => {
    dispatch({ type: "START_FETCH" });
    const res = await fetch("/posts", {
      headers: { "Content-Type": "application/json" },
      Accept: "application/json",
    });
    const data = await res.json();
    dispatch({ type: "FINISHED_FETCH" });
    dispatch({ type: "SET_POSTS", payload: data });
  };

  const getPostById = async (id) => {
    try {
      dispatch({ type: "START_FETCH" });
      const res = await fetch(`/posts/${id}`);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "FINISHED_FETCH" });
      dispatch({ type: "SET_POST", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  async function addPost(post) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };
    const response = await fetch("/posts", requestOptions);
    const data = await response.json();
    dispatch({ type: "ADD_POST", payload: data });
  }

  function removePost(id) {
    fetch(`posts/${id}`, { method: "DELETE" }).then(() =>
      dispatch({ type: "DELETE_POST", payload: id })
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        blogPosts: state.blogPosts,
        currentBlogPost: state.currentBlogPost,
        loading: state.loading,
        getPosts: getPosts,
        getPostById: getPostById,
        addPost: addPost,
        removePost: removePost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
