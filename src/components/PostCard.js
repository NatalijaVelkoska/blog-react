import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {GlobalContext} from "../context/GlobalState"

export default function PostCard({post}) {

    const {removePost} = useContext(GlobalContext)

    return (
        <div>
            <Link to={`/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
            <h3>{post.author}</h3>
            <h3>{post.date}</h3>
            <button onClick={() => removePost(post.id)}>Delete</button>
        </div>
    )
}
