import React,{useEffect, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState" 
import {useParams} from "react-router-dom"

export default function Post() {

    const {getPostById, currentBlogPost} = useContext(GlobalContext)

    let {postId} = useParams()

    console.log(postId)

    useEffect(() => {
        getPostById(postId)
    }, [])

    return (
        <div>

            {currentBlogPost ? 
            (   <div>
                <div>{currentBlogPost.title}</div>
                <img src={currentBlogPost.image}/>
                <div>{currentBlogPost.author}</div>
                <div>{currentBlogPost.content}</div>

                </div>
                
                )
            :
            (<div>Loading...</div>)
        }
        </div>
    )
}
