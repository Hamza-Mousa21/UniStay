import { useState } from "react"
import InputAndSubmet from "./inputAndSubmit"

const CommentSection=(props)=>{
    const [commentSetting, setCommentSetting] = useState(null)


    const handleCommentSettings = (index) => {
    setCommentSetting(commentSetting === index ? null : index)
    }

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
      props.setData(prev => prev.filter(c => c.id !== props.data.id));
    }
    catch(error){
      console.log("E")
      console.error("Error deleting comment:", error);
    }
}

    return(
        <>  
         
         <div className="d-flex mb-2 p-2 rounded d-flex justify-content-between align-items-center"
          style={{ listStyle: "none",backgroundColor: "#faf7f7", color: "#1b2a41" ,position:"relative"}}

          >
            
            
            <li>{props.data?.comment}</li>

            {/* <li>{comm?.issues}</li> */}
            
            <i className="bi bi-three-dots-vertical" style={{cursor:"pointer"}} onClick={() => handleCommentSettings(props.i)}></i>
            {commentSetting === props.i && (
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
                      onClick={()=>handleDeleteComment(props.data.id)}
                    >
                      <i className="bi bi-trash3" />
                      <span>Delete</span>
                    </div>
                  </div>
                )} 


          </div>  
          {/* <InputAndSubmet content="post a comment here ..." tab="comment" data={props.data}></InputAndSubmet> */}

        </>
    )
}
export default CommentSection;