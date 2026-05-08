import { useState } from "react"

const MobileContactBar=()=>{
    const [clicked,setClicked]=useState(false)
    const handleOnClick=()=>{
       
        setClicked(!clicked);
    }
    return(
        <>
            {clicked && <div className="bg-light mt-4 p-4 col-12 " style={{height:"fit-content",borderRadius:"8px",color:"#1b2a41",marginBottom:"1.5rem"}}>
                <h4><b>Contact owner</b></h4>
                <p className="mb-3">Owner name</p>
                <h5>Your Name</h5>
                <input  type="text" className="form-control" style={{width:"100%"}}></input>
                <h5 className="mt-3">phone number</h5>
                <input className="form-control" type="tel" style={{width:"100%"}}></input>
                <h5 className="mt-3">your message</h5>
                <div className="position-relative ">
                     <textarea
                       className="form-control"
                      rows="3"
                      placeholder="e.g."
                     style={{ resize: "none", paddingRight: "45px", fontSize: "13px", }}
                    ></textarea>
                     <button
                      className="btn position-absolute"
                      style={{
                       bottom: "12px",
                       right: "1rem",
                       width: "30px",
                       height: "30px",
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
            </div> }


            <div className="container col-12 mt-4 " style={{position:"fixed",bottom:"0",left:0,right:0}}>
                <button className="mt-4 p-2" onClick={handleOnClick} 
                  style={{ width:"100%",
                    backgroundColor:"#1b2a41" ,
                    color:"lightgrey" ,
                    borderRadius:"5px",
                    cursor:"pointer",
                    
                }}

                >
                    Contact owner
                </button>
                
            </div>
            
        </>
    )
}

export default MobileContactBar