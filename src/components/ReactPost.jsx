import { useState } from "react"
import PostLiked from "./PostLiked"

const ReactPost = ( {post} ) => {

    let [liked, setLiked] = useState(false)

    return (
        <div className="React-post">
            <strong className="question">{post.question}</strong>
            <p>{post.answer}</p>
            <button onClick={() => {setLiked(!liked)}}>{liked ? <i className="fa-regular fa-thumbs-down"></i> : <i className="fa-regular fa-thumbs-up"></i>}</button>
            {liked && (<PostLiked />)}
            
        </div>
    )
}

export default ReactPost