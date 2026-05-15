import { useState } from "react";
import api from "../../lib/api.js";



const InputAndSubmet=(props)=>{
    const [inputValue, setInputValue] = useState("");

    const handlePostMethod=async()=>{
      try{
      if(inputValue==="") return ;

      const token = localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("student"))
      if(props.tab==="comments"){
        const rate=await fetch(`http://localhost:3000/Ratings/residence/${props?.res_id}`,{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },

          body: JSON.stringify({
            user_id: user.id,          
            res_id: props?.res_id,     
            starCount: null,
            comment: inputValue,
            issues: null
          })
                    
        }
        
       
      )
        const response=await rate.json()
        
        props.setData((prev) => [...prev, response]);
        setInputValue("")

    }




      else{
            const rate=await fetch(`http://localhost:3000/Ratings/residence/${props?.res_id}`,{
            method:"POST",
            headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },

           body: JSON.stringify({
            user_id: user.id,          
            res_id: props?.res_id,     
            starCount: null,
            comment: null,
            issues: inputValue
          })
            
          }
          
        
        )
        const response=await rate.json()
        
        props.setData((prev) => [...prev, response]);
        setInputValue("")
        }

      
      }
      catch(error){
        console.error(error)
      }

    }
  

    return(
        <>
            <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder={props?.content}
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
         
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
          
          onClick={()=>handlePostMethod()}
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

export default InputAndSubmet
