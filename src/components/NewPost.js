import React, { useState, useReducer, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const { addPost } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      author: author,
      date: new Date().toLocaleString(),
    };
    addPost(newPost);
    setAuthor("");
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Content: </label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <label>Author: </label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
}
