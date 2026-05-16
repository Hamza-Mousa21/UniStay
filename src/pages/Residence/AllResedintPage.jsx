import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "../../components/Sidbar/SideBar.jsx"
import MobileSidebar from "../../components/Contact/MobileSidebar.jsx"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"

const AllResidence = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [smallScreen, setSmallScreen] = useState(window.innerWidth >= 1000)
    const [liked, setLiked] = useState({})

    const token = localStorage.getItem("token")


    const handleAISearch = (results) => {
            setData(results);
    };

    useEffect(() => {

        const getData = async () => {

            try {

                const res = await fetch(`http://localhost:3000/residence`)

                if (!res.ok) {
                    console.log("API error:", res.status)
                    return
                }

                const data = await res.json()

                setData(data.residences)
                console.log(data)

            } catch (err) {
                console.error(err)
            }
        }

        getData()

    }, [])

    useEffect(() => {

        if (data.length > 0 && token) {
            getWishlistStates()
        }

    }, [data])

    const getWishlistStates = async () => {

        try {

            const likedObj = {}

            await Promise.all(

                data.map(async (hotel) => {

                    const res = await fetch(`http://localhost:3000/wishlist/${hotel.res_id}`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })

                    if (!res.ok) return

                    const result = await res.json()

                    likedObj[hotel.res_id] = result.isWishlisted
                })
            )

            setLiked(likedObj)

        } catch (err) {
            console.error("Wishlist fetch error:", err)
        }
    }

    const toggleWishlist = async (hotel) => {

        try {

            const isLiked = liked[hotel.res_id]

            const method = isLiked ? "DELETE" : "POST"

            const res = await fetch(`http://localhost:3000/wishlist/${hotel.res_id}`, {
                method: method,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (res.ok) {

                setLiked(prev => ({
                    ...prev,
                    [hotel.res_id]: !prev[hotel.res_id]
                }))
            }

        } catch (err) {
            console.error("Wishlist error:", err)
        }
    }

    useEffect(() => {

        const handelSmallScreen = () => {
            setSmallScreen(window.innerWidth >= 1000)
        }

        window.addEventListener("resize", handelSmallScreen)

        return () =>
            window.removeEventListener("resize", handelSmallScreen)

    }, [])

    return (
        <>
            <div style={{display:"block", marginBottom: "100px"}}>    
                <Header></Header>
            </div>
            <div
                className="d-flex p-4"
                style={{
                    minHeight: "100vh",
                    color: "#1b2a41",
                    backgroundColor: "white"
                }}
            >

                
                {smallScreen && <SideBar onSearch={handleAISearch}/>}

                <div className="col-12 col-md-12 col-lg-9">

                    <p className="pt-4" style={{ color: "gray" }}>
                        {data.length} results
                    </p>

                    {!smallScreen && <MobileSidebar onSearch={handleAISearch}/>}

                    <div className="row">

                        {data.length === 0 &&
                            <div className="d-flex justify-content-center align-items-center">
                                لا يوجد سكنات حاليا
                            </div>
                        }

                        {data.map((hotel) => (

                            <div
                                className="col-6 col-md-4 col-lg-4 mb-4"
                                key={hotel?.id}
                            >

                                <div
                                    className="card me-2"
                                    style={{
                                        cursor: "pointer",
                                        color: "#1b2a41"
                                    }}
                                >

                                    <img
                                        src={`http://localhost:3000${hotel?.ResidenceImages[0]?.image_url}`}
                                        style={{ aspectRatio: "14/15" }}
                                        alt={hotel?.name}
                                    />

                                    <div className="card-body bg-light">

                                        <h5 className="card-title">
                                            {hotel?.name}
                                        </h5>

                                        <div className="d-flex w-100 justify-content-around">

                                            <button
                                                className="btn"
                                                style={{
                                                    width: "80%",
                                                    height: "40px",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#1b2a41",
                                                    color: "white"
                                                }}
                                                onClick={() => navigate(`/details/${hotel?.res_id}`)}
                                            >
                                                info
                                            </button>

                                            <div
                                                style={{ cursor: "pointer" }}
                                                onClick={() => toggleWishlist(hotel)}
                                            >

                                                {liked[hotel.res_id]
                                                    ? (
                                                        <i
                                                            className="bi bi-heart-fill"
                                                            style={{
                                                                fontSize: "35px",
                                                                position: "relative",
                                                                bottom: "3.5px"
                                                            }}
                                                        />
                                                    )
                                                    : (
                                                        <i
                                                            className="bi bi-heart"
                                                            style={{
                                                                fontSize: "35px",
                                                                position: "relative",
                                                                bottom: "3.5px"
                                                            }}
                                                        />
                                                    )
                                                }

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}


export default AllResidence