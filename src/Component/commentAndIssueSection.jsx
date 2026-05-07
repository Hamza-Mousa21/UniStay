import { useEffect, useState } from "react"
import InputAndSubmet from "./inputAndSubmit"
import CommentSection from "./commentSection"
import IssueSection from "./issueSection"

const InputField = (props) => {
  const [data,setData]=useState([])
  // const [comment, setComment] = useState("")
  // const [comments, setComments] = useState([])
  const [commentSetting, setCommentSetting] = useState(null)
  // const [editingIndex, setEditingIndex] = useState(null)
  // const [editValue, setEditValue] = useState("")

  // const handleAddComment = () => {
  //   if (comment.trim() === "") return
  //   setComments([...comments, comment])
  //   setComment("")
  // }

  const handleCommentSettings = (index) => {
    setCommentSetting(commentSetting === index ? null : index)
  }

  // const handleUpdate = (index) => {
  //   setEditingIndex(index)
  //   setEditValue(comments[index])
  //   setCommentSetting(null)
  // }

  // const handleSaveEdit = (index) => {
  //   if (editValue.trim() === "") return
  //   const updated = [...comments]
  //   updated[index] = editValue
  //   setComments(updated)
  //   setEditingIndex(null)
  //   setEditValue("")
  // }

  // const handleDelete = (index) => {
  //   setComments(comments.filter((_, i) => i !== index))
  //   setCommentSetting(null)
  
  // }
const handleDeleteComment=async(id)=>{
    try{
      //console.log("API")
      const response=await fetch(`http://localhost:3000/Ratings/${id}/comment`,{
        method:"DELETE"
        
      })
        //console.log("1")
      if (!response.ok) {
        throw new Error("Failed to delete comment");
        console.log("Error")
      }
      //console.log("2")
      setData(prev => prev.filter(c => c.id !== id));
    }
    catch(error){
      console.log("E")
      console.error("Error deleting comment:", error);
    }
}


const handleDeleteIssue=async(id)=>{
    try{
      //console.log("API")
      const response=await fetch(`http://localhost:3000/Ratings/${id}/issue`,{
        method:"DELETE"
        
      })
        
      if (!response.ok) {
        throw new Error("Failed to delete issue");
        console.log("Error")
      }
      //console.log("2")
      setData(prev => prev.filter(c => c.id !== id));
    }
    catch(error){
      
      console.error("Error deleting comment:", error);
    }
}



  const ratingType=[
    "comments",
    "issues",
    "stars"
  ]
  useEffect(()=>{
    const getData=async()=>{
      const res=await fetch('http://localhost:3000/Ratings')
      const data=await res.json()
      setData(data)
    }
    getData()
  },[])
  

  return (
    <>
    

    <ul className="list-unstyled">
      {data.map((comm,i)=>(

        <div  key={i} >

         {props.tab==="comment"&&comm.comment!==null && <CommentSection data={comm} i={i}></CommentSection> }







          {props.tab==="issues" && comm.issues!==null&& <IssueSection data={comm} i={i}></IssueSection> }
          
          
          </div>      
          

          

      ))}
      



      
      

    </ul>
    

      
    </>
  )
}

export default InputField



  {/* <ul className="list-unstyled">
        {data.map((c, i) => (
          <div
            key={i}
            className="mb-2 p-2 rounded d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#faf7f7", color: "#1b2a41" }}
          >
            {editingIndex === i ? (
              <div className="d-flex gap-2 flex-grow-1 me-2">
                <input
                  className="form-control form-control-sm"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveEdit(i)
                    if (e.key === "Escape") setEditingIndex(null)
                  }}
                  autoFocus
                />
                <button
                  className="btn btn-sm"
                  style={{ backgroundColor: "#1b2a41", color: "white", whiteSpace: "nowrap" }}
                  onClick={() => handleSaveEdit(i)}
                >
                  Save
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => setEditingIndex(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <li style={{ listStyle: "none" }}>{c.comment}</li>
            )}

            {editingIndex !== i && (
              <div style={{ position: "relative" }}>
                <i
                  className="bi bi-three-dots-vertical"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCommentSettings(i)}
                />
                {commentSetting === i && (
                  <div
                    style={{
                      width: "90px",
                      height: "auto",
                      backgroundColor: "#1b2a41",
                      color: "lightgray",
                      position: "absolute",
                      right: "0",
                      zIndex: 10,
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="d-flex p-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleUpdate(i)}
                    >
                      <i className="bi bi-pencil" />
                      <span>Update</span>
                    </div>

                    <div
                      className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(i)}
                    >
                      <i className="bi bi-trash3" />
                      <span>Delete</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </ul> */}