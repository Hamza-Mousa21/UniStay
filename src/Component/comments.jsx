import { useState } from "react"
import InputField from "./inputField"
import RatingStars from "./ratingStars"

const Comments = () => {
//   const [comment, setComment] = useState("")
//   const [comments, setComments] = useState([])
  const [activeTab, setActiveTab] = useState("comments")

//   const handleAddComment = () => {
//     if (comment.trim() === "") return
//     setComments([...comments, comment])
//     setComment("")
//   }

  const tabStyle = (tab) => ({
    color: "#1b2a41",
    backgroundColor: activeTab === tab ? "white" : "#faf7f7",
    //boxShadow: activeTab === tab ? "-3px -3px 6px rgba(0,0,0,0.08), 3px -3px 6px rgba(0,0,0,0.08)" : "none",
    borderRadius:activeTab===tab? "6px 6px 0 0":"4px 4px 0 0",
    border:activeTab===tab? "1px solid #f1efef":"transparent",
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
            {/* <ul className="list-unstyled">
              {comments.map((c, i) => (
                <li key={i} className="mb-2 p-2 rounded" style={{ backgroundColor: "#f5f5f5", color: "#1b2a41" }}>
                  {c}
                </li>
              ))}
            </ul> */}
            <InputField content="Add a comment..."></InputField>
          </>
        )}

        {activeTab === "issues" && (
          <InputField content="Add an issue"></InputField>
        )}

        {activeTab === "ratings" && (
            <RatingStars></RatingStars>
        )}

      </div>
    </>
  )
}

export default Comments