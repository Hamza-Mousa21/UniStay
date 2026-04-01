import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField } from "@mui/material";
import ContactSidebar from "../Component/ContactSidebar";
import MobileContactBar from "../Component/MobileContactBar";




const ResDetails = () => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const [isMobile,setIsMobile]=useState(window.innerWidth>=768)

  

    useEffect(() => {
        const getHotel = async () => {
            const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
            if (!res.ok) {
                console.log("API error:", res.status)
                return
            }
            const data = await res.json()
            setHotel(data)
        }
        if (id) getHotel()
    }, [id])


   

   useEffect(()=>{
        const handleIsMobileState=()=>{
            setIsMobile(window.innerWidth>=768)
        }

        window.addEventListener("resize",handleIsMobileState)
        return ()=> window.removeEventListener("resize",handleIsMobileState)
    },[])
    if (!hotel) return <div className="text-center">Loading</div>

    const images=[
        hotel?.image,
        hotel?.image,
        hotel?.image,
        hotel?.image,
        hotel?.image,
        hotel?.image,
        hotel?.image,

        
    ]

     let restImages=0;
    if(images.length-5===0){
        restImages=false;
        
    }
    else{
        restImages=images.length-5;
    }

   
return (
<>

        
    <div className="container mt-4 col-12 col-md-12 col-lg-12 ">
        <div className="mb-3">
            <ArrowBackIcon sx={{color:"#1b2a41"}}></ArrowBackIcon>  
            <a href="/" className="mb-3" style={{textDecoration:"none", color:"#1b2a41"}}><b> Back to previous page</b></a>
        </div>

        <div className="d-flex">
            <div className="col-12 col-md-6 col-lg-7 me-2">
                <div className="card">
                    <img src={images[0]} style={{
                            aspectRatio:"5/4",
                            height:"58vh"
                    }} />
                </div>
                
            </div>
        
            <div className="col-md-6 col-lg-5 ">
               
                {isMobile &&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr", gap:"8px",height:"65vh" }}>
                        
                  
                    {images.slice(1,4).map((img,index)=>(
                        <div className="card overflow-hidden" key={index}>
                            <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover", position:"relative"}} />
                        </div>
                    ))}
                        
                    {images.length>4&& <div className="card overflow-hidden" key={4} style={{backgroundColor:"#474545"}}>
                            <img src={images[4]} style={{ width: "100%", height: "100%", objectFit: "cover", position:"relative"}} />
                            {restImages&&<p style={{position:"absolute",top:"50%", left:"50%", transform:"translate(-50%,-50%)" ,color:"white"}}>+{restImages}</p>}
                        </div>}
                </div>}
                
            </div>
        </div>

     <div className="row mt-4">
      <div className="col-12 col-md-6 col-lg-8">
        <h2>{hotel?.price}</h2>
      </div>



      <div className="col-md-6 col-lg-4">             
        {isMobile && <ContactSidebar></ContactSidebar>}
        {!isMobile &&<MobileContactBar></MobileContactBar> }
      </div> 
     </div>  
    </div>
   
  
</>
)
}
 

export default ResDetails