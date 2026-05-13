import { useState } from "react"

const CommentSection = (props) => {
  const [commentSetting, setCommentSetting] = useState(null)
  const [isEditing, setIsEditing] = useState(false)       // 👈 toggle edit mode
  const [editValue, setEditValue] = useState(props.data?.comment) // 👈 edit input value

  const handleCommentSettings = (index) => {
    setCommentSetting(commentSetting === index ? null : index)
  }

  const handleDeleteComment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/residence/1/Ratings/${id}/student/1/`, {
        method: "DELETE"
      })
      if (!response.ok) throw new Error("Failed to delete comment");
      props.setData(prev => prev.filter(c => c.id !== props.data.id));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  }

  const handleUpdateComment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/Ratings/${id}`, {
        method: "PUT",                                     
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: editValue })       
      })
      if (!response.ok) throw new Error("Failed to update comment");

      props.setData(prev =>
        prev.map(c => c.id === props.data.id             
          ? { ...c, comment: editValue }                   
          : c
        )
      );
      setIsEditing(false)                                  
      setCommentSetting(null)                              
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  }

  return (
    <>
      <div
        className="d-flex mb-2 p-2 rounded justify-content-between align-items-center"
        style={{ listStyle: "none", backgroundColor: "#f8f9fa", color: "#1b2a41", position: "relative" }}
      >

        {isEditing ? (                                     
          <div className="d-flex gap-2 flex-grow-1 me-2">
            <input
              className="form-control form-control-sm"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button
              className="btn btn-sm"
              style={{ backgroundColor: "#1b2a41", color: "white", whiteSpace: "nowrap" }}
              onClick={() => handleUpdateComment(props.data.id)}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setIsEditing(false)}           
            >
              Cancel
            </button>
          </div>
        ) : (
          <li>{props.data?.comment}</li>                   
        )}

        {!isEditing && (
          <i
            className="bi bi-three-dots-vertical"
            style={{ cursor: "pointer" }}
            onClick={() => handleCommentSettings(props.i)}
          />
        )}

        {commentSetting === props.i && (
          <div
            style={{
              width: "90px",
              height: "auto",
              backgroundColor: "#1b2a41",
              color: "lightgray",
              position: "absolute",
              top: "30px",
              left: "0px",
              zIndex: 10,
              padding: "2px",
              borderRadius: "4px",
            }}
          >
            <div
              className="d-flex p-1 justify-content-between align-items-baseline"
              style={{ cursor: "pointer" }}
              onClick={() => { setIsEditing(true); setCommentSetting(null) }} 
            >
              <i className="bi bi-pencil" />
              <span>Update</span>
            </div>

            <div
              className="d-flex p-1 mt-1 justify-content-between align-items-baseline"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteComment(props.data.id)}
            >
              <i className="bi bi-trash3" />
              <span>Delete</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CommentSection;