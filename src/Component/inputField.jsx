import { useEffect, useState } from "react"

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

         {props.tab==="comment"&&comm.comment!==null &&<div className="d-flex mb-2 p-2 rounded d-flex justify-content-between align-items-center"
          style={{ listStyle: "none",backgroundColor: "#faf7f7", color: "#1b2a41" ,position:"relative"}}

          >
            
            
            <li>{comm?.comment}</li>

            {/* <li>{comm?.issues}</li> */}
            
            <i className="bi bi-three-dots-vertical" style={{cursor:"pointer"}} onClick={() => handleCommentSettings(i)}></i>
            {commentSetting === i && (
                  <div
                    style={{
                      width: "90px",
                      height: "auto",
                      backgroundColor: "#1b2a41",
                      color: "lightgray",
                      position: "absolute",
                      top: "30px",
                      right:"0px",
                      zIndex: 10,
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="d-flex p-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      
                    >
                      <i className="bi bi-pencil" />
                      <span>Update</span>
                    </div>

                    <div
                      className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      onClick={()=>handleDeleteComment(comm.id)}
                    >
                      <i className="bi bi-trash3" />
                      <span>Delete</span>
                    </div>
                  </div>
                )} 


          </div>  }







          {props.tab==="issues" && comm.issues!==null&&<div className="d-flex mb-2 p-2 rounded d-flex justify-content-between align-items-center"
          style={{ listStyle: "none",backgroundColor: "#faf7f7", color: "#1b2a41" ,position:"relative"}}

          >
            
            
            <li>{comm?.issues}</li>

            {/* <li>{comm?.issues}</li> */}
            
            <i className="bi bi-three-dots-vertical" style={{cursor:"pointer"}} onClick={() => handleCommentSettings(i)}></i>
            {commentSetting === i && (
                  <div
                    style={{
                      width: "90px",
                      height: "auto",
                      backgroundColor: "#1b2a41",
                      color: "lightgray",
                      position: "absolute",
                      top: "30px",
                      right:"0px",
                      zIndex: 10,
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="d-flex p-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      
                    >
                      <i className="bi bi-pencil" />
                      <span>Update</span>
                    </div>

                    <div
                      className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
                      style={{ cursor: "pointer" }}
                      
                      onClick={()=>handleDeleteIssue(comm.id)}
                    >
                      <i className="bi bi-trash3" />
                      <span>Delete</span>
                    </div>
                  </div>
                )} 


          </div>  }
          </div>      

          

      ))}




      

    </ul>
    

      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder={props?.content}
         
        />
        <button
          className="btn"
          
          style={{
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
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
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