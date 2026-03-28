const ContactSidebar=()=>{
    return(
          <div className="bg-light p-4 mt-4 col-8 col-md-5 col-lg-5 ms-auto" style={{height:"fit-content",borderRadius:"5px",color:"#1b2a41"}}>
            <h4><b>Contact owner</b></h4>
            <p className="mb-3">Owner name</p>
            <h5>Your Name</h5>
            <input type="text" className="borderRadius-4" style={{width:"100%"}}></input>
            <h5 className="mt-3">phone number</h5>
            <input type="tel" style={{width:"100%"}}></input>
            <h5 className="mt-3">your message</h5>
            <textarea style={{width:"100%"}}></textarea>
            
        </div>  
    )
}
export default ContactSidebar;