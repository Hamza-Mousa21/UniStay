const MobileContactBar=()=>{
    return(
        <>
            <div className="bg-light mt-4 p-4 col-12 " style={{height:"fit-content",borderRadius:"5px",color:"#1b2a41"}}>
                <h4><b>Contact owner</b></h4>
                <p className="mb-3">Owner name</p>
                <h5>Your Name</h5>
                <input type="text" className="borderRadius-4" style={{width:"100%"}}></input>
                <h5 className="mt-3">phone number</h5>
                <input type="tel" style={{width:"100%"}}></input>
                <h5 className="mt-3">your message</h5>
                <textarea style={{width:"100%"}}></textarea>
                <button className="mt-4 p-2" style={{ width:"100%",backgroundColor:"#1b2a41" ,color:"lightgrey" ,borderRadius:"5px"}}>Contact info</button>
                
            </div> 
        </>
    )
}

export default MobileContactBar