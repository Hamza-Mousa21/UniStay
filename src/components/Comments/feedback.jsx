import { useState } from "react"
import InputField from "./commentAndIssueSection"
import RatingStars from "./ratingStars"

const Feedback = (props) => {
//   const [comment, setComment] = useState("")
//   const [comments, setComments] = useState([])
  const [activeTab, setActiveTab] = useState("comments")



  const tabStyle = (tab) => ({
    color: "#1b2a41",
    backgroundColor: activeTab === tab ? "white" : "#f8f9fa",
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
      <div className="d-flex mt-4 " style={{ alignItems: "flex-end" }}>
        <span style={tabStyle("comments")} onClick={() => setActiveTab("comments")}>
          
          <b>تعليقات</b>
        </span>
        <span style={tabStyle("issues")} onClick={() => setActiveTab("issues")}>
          
          <b>مشاكل</b>
        </span>
        <span style={tabStyle("ratings")} onClick={() => setActiveTab("ratings")}>
          
          <b>تقييم</b>
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
            <InputField res_id={props?.res_id} content="Add a comment here..." tab="comments"></InputField>
        )}

        {activeTab === "issues" && (
          <InputField res_id={props?.res_id} content="Add an issue here..." tab="issues"></InputField>
        )}

        {activeTab === "ratings" && (
            <RatingStars></RatingStars>
        )}

      </div>
    </>
  )
}
export default Feedback