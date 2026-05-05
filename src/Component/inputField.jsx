import { useState } from "react"


const InputField=(props)=>{
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [commentSetting,setCommentSetting]=useState(null)

    const handleAddComment = () => {
    if (comment.trim() === "") return
    setComments([...comments, comment])
    setComment("")
  }

  const handleCommentSettings=(index)=>{
    setCommentSetting(commentSetting === index ? null : index)
  }
  const handleUpdate=()=>{
    alert(2)
  }

  const handleDelete=()=>{
    alert(3)
  }


    return (
        <>
               <ul className="list-unstyled">
              {comments.map((c, i) => (
                <div className="mb-2 p-2 rounded d-flex justify-content-between" style={{ backgroundColor: "#faf7f7", color: "#1b2a41" }}>
                  <li key={i}  >
                    {c}
                  </li>
                  <div>
                    <i class="bi bi-three-dots-vertical" style={{cursor:"pointer"}} onClick={()=>handleCommentSettings(i)}></i>

                  {commentSetting===i&&
                    <div style={{width:"90px",
                                height:"auto",
                                backgroundColor:"#1b2a41",
                                color:"lightgray",
                                position:"absolute",
                                right:"5px",
                                padding:"2px",
                                borderRadius:"4px"
                                
                                }}>

                                  
                      <div className="d-flex p-1 justify-content-between align-items-baseline" style={{cursor:"pointer"}} 
                      onClick={()=>handleUpdate()}
                      
                      >  
                        <i class="bi bi-pencil"></i>         
                        <span className="">Update</span>
                      </div> 

                      


                      <div className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
                       style={{cursor:"pointer"}} 
                       onClick={()=>handleDelete()}
                       >  
                        <i class="bi bi-trash3"></i>         
                        <span className="me-1+">Delete</span>
                      </div> 
                    </div>}
                  </div>  
                </div>
              ))}
            </ul>
            <div className="d-flex gap-2 ">
              <input
                type="text"
                className="form-control"
                placeholder={props?.content}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
              />
               <button
                      className="btn "
                      style={{
                        
                       bottom: "px",
                       right: "1rem",
                       width: "30px",
                       height: "37px",
                       borderRadius: "8px",
                     backgroundColor: "#1b2a41",
                      padding: 0,
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                    }}
                    >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
            </div>
        </>
    )
}

export default InputField;