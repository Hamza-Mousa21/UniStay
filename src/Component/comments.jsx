import { useState } from "react"

const Comments = () => {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [activeTab, setActiveTab] = useState("comments")

  const handleAddComment = () => {
    if (comment.trim() === "") return
    setComments([...comments, comment])
    setComment("")
  }

  const tabStyle = (tab) => ({
    color: "#1b2a41",
    backgroundColor: activeTab === tab ? "white" : "#f0f0f0",
    //boxShadow: activeTab === tab ? "-3px -3px 6px rgba(0,0,0,0.08), 3px -3px 6px rgba(0,0,0,0.08)" : "none",
    borderRadius:activeTab===tab? "6px 6px 0 0":"2px 2px 0 0",
    border: "1px solid #eeeeee",
    borderBottom: activeTab === tab ? "1px solid white" : "1px solid #ddd",
    cursor: "pointer",
    padding: "8px 16px",
    position: "relative",
    zIndex: activeTab === tab ? 1 : 0,
    marginBottom: "-1px",  
  })

  return (
    <>
      <div className="d-flex mt-4" style={{ alignItems: "flex-end" }}>
        <span style={tabStyle("comments")} onClick={() => setActiveTab("comments")}>
          <b>Comments</b>
        </span>
        <span style={tabStyle("issues")} onClick={() => setActiveTab("issues")}>
          <b>Issues</b>
        </span>
        <span style={tabStyle("ratings")} onClick={() => setActiveTab("ratings")}>
          <b>Ratings</b>
        </span>
      </div>

      
      <div className="" style={{
        backgroundColor: "white",
        border: "1px solid #eeeeee",
        borderRadius: "0 6px 6px 6px",
        padding: "16px",
        position: "relative",
        zIndex: 0
      }}>

        {activeTab === "comments" && (
          <>
            <ul className="list-unstyled">
              {comments.map((c, i) => (
                <li key={i} className="mb-2 p-2 rounded" style={{ backgroundColor: "#f5f5f5", color: "#1b2a41" }}>
                  {c}
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Write a comment..."
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
        )}

        {activeTab === "issues" && (
          <p style={{ color: "#1b2a41" }}>Issues content here...</p>
        )}

        {activeTab === "ratings" && (
          <p style={{ color: "#1b2a41" }}>Ratings content here...</p>
        )}

      </div>
    </>
  )
}

export default Comments