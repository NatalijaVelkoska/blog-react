import React from 'react'
import Hero from "../components/Hero"
import PostsList from "../components/PostsList"
import NewPost from "../components/NewPost"


export default function Home() {
    return (
        <div>
            <Hero/>
            <PostsList/>
            <NewPost/>
        </div>
    )
}
