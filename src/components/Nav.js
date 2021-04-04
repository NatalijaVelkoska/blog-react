import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <Link to="/">
                <h1>React Blog</h1>
            </Link>           
        </div>
    )
}
