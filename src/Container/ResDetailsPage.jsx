import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField } from "@mui/material";
import ContactSidebar from "../Component/ContactSidebar";



const ResDetails = () => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)

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

    if (!hotel) return <div className="text-center">Loading</div>

    const images=[
        "{hotel?.image}",
        "{hotel?.image}",
        "{hotel?.image}",
        "{hotel?.image}",
        "{hotel?.image}",
        "{hotel?.image}",
        "{hotel?.image}",
    ]
    console.log(images.length)
return (
<>

        
    <div className="container mt-4 col-12 col-md-12 col-lg-12 ">
        <div className="mb-3">
            <ArrowBackIcon sx={{color:"#1b2a41"}}></ArrowBackIcon>  
            <a href="/" className="mb-3" style={{textDecoration:"none", color:"#1b2a41"}}><b> Back to previous page</b></a>
        </div>

        <div className="d-flex">
            <div className="col-8 col-md-7 col-lg-7 me-2">
                <div className="card">
                    <img src={images[0]} style={{
                            aspectRatio:"5/4",
                            height:"65vh"
                    }} />
                </div>
                
            </div>
        
            <div className="col-4 col-md-5 col-lg-5 ">
               
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr", gap:"8px",height:"100%" }}>
                        
                  
                    {images.slice(1,5).map((img,index)=>(
                        <div className="card overflow-hidden" key={index}>
                            <img src={img[index]} style={{ width: "100%", height: "100%", objectFit: "cover", }} />

                        </div>
                    ))}
                </div>
                
            </div>
        </div>



      <ContactSidebar></ContactSidebar>
    </div>
</>
)
}

export default ResDetails