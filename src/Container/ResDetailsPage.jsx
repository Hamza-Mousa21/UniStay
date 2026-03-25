import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    return (
        <>
            
            <div className="container mt-4 p-4 col-8 col-md-8 col-lg-8 ">
                <div className="mb-3">
                 <ArrowBackIcon sx={{color:"#1b2a41"}}></ArrowBackIcon>  
                 <a href="/" className="mb-3" style={{textDecoration:"none", color:"#1b2a41"}}><b>Back to previous page</b></a>
                </div>
              <div className="d-flex">
                <div className="col-8 col-md-8 col-lg-8 me-2">
                    <div className="card">
                        <img src={hotel?.image}  />
                    </div>
                    <p>Testtttttttttttttttt</p>
                </div>
               
                <div className="col-4 col-md-4 col-lg-4 ">
                    <div className="card mb-2">
                        <img src={hotel?.image} style={{
                            aspectRatio:"3/2"
                        }}  />
                    </div>
                    <div className="card mb-2">
                        <img src={hotel?.image}/>
                    </div>
                    <div className="card">
                        <img src={hotel?.image}/>
                    </div>
                </div>
              </div>  
            </div>
        </>
    )
}

export default ResDetails