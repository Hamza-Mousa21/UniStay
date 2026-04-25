import { useState } from "react"

const Comments=()=>{

 const [comment, setComment] = useState("")
const [comments, setComments] = useState([])
    
const handleAddComment = () => {
  if (comment.trim() === "") return
  setComments([...comments, comment])
  setComment("")
}
  
    return(
        <>

            <div className="container bg-light mt-4" style={{borderRadius:"8px"}}>
                <h2  className="pt-3" style={{ color: "#1b2a41" }}>Comments</h2>
                
                <ul className="list-unstyled">
                    {comments.map((c, i) => (
                    <li key={i} className="mb-2 p-2 rounded" style={{ backgroundColor: "#ffffff", color: "#1b2a41" }}>
                        {c}
                    </li>
                    ))}
                </ul>


                <div className="d-flex gap-2 mb-4 pb-4">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                    className="btn"
                    style={{ backgroundColor: "#1b2a41", color: "white", whiteSpace: "nowrap" }}
                    onClick={handleAddComment}
                    >
                    Post
                    </button>
                </div>


            </div>
        </>
    )
}

export default Comments;