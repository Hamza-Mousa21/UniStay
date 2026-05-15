import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import SideBar from "../../components/Sidbar/SideBar.jsx"
import MobileSidebar from "../../components/Contact/MobileSidebar.jsx"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"

import { getImageUrl } from "../../lib/utils.js"

const AllResidence = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [smallScreen, setSmallScreen] = useState(
        window.innerWidth >= 1000
    )

    const [liked, setLiked] = useState({})

    const token = localStorage.getItem("token")

    // ================= AI SEARCH =================
    const handleAISearch = (results) => {
        setData(results)
    }

    // ================= GET ALL RESIDENCE =================
    useEffect(() => {

        const getData = async () => {

            try {

                const res = await fetch(
                    `http://localhost:3000/residence`
                )

                if (!res.ok) {
                    console.log("API error:", res.status)
                    return
                }

                const result = await res.json()

                setData(result.residences)

            } catch (err) {
                console.error(err)
            }
        }

        getData()

    }, [])

    // ================= GET WISHLIST STATES =================
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

                    try {

                        const res = await fetch(
                            `http://localhost:3000/wishlist/${hotel.res_id}`,
                            {
                                headers: {
                                    "Authorization": `Bearer ${token}`
                                }
                            }
                        )

                        if (!res.ok) return

                        const result = await res.json()

                        likedObj[hotel.res_id] =
                            result.isWishlisted

                    } catch (err) {
                        console.error(err)
                    }

                })
            )

            setLiked(likedObj)

        } catch (err) {
            console.error(
                "Wishlist fetch error:",
                err
            )
        }
    }

    // ================= TOGGLE WISHLIST =================
    const toggleWishlist = async (hotel) => {

        if (!token) {
            alert("يجب تسجيل الدخول أولاً")
            return
        }

        try {

            const isLiked = liked[hotel.res_id]

            const method = isLiked
                ? "DELETE"
                : "POST"

            const res = await fetch(
                `http://localhost:3000/wishlist/${hotel.res_id}`,
                {
                    method: method,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )

            if (res.ok) {

                setLiked((prev) => ({
                    ...prev,
                    [hotel.res_id]:
                        !prev[hotel.res_id]
                }))
            }

        } catch (err) {
            console.error(
                "Wishlist error:",
                err
            )
        }
    }

    // ================= RESPONSIVE =================
    useEffect(() => {

        const handelSmallScreen = () => {
            setSmallScreen(
                window.innerWidth >= 1000
            )
        }

        window.addEventListener(
            "resize",
            handelSmallScreen
        )

        return () => {
            window.removeEventListener(
                "resize",
                handelSmallScreen
            )
        }

    }, [])

    return (
        <>
            <div
                style={{
                    display: "block",
                    marginBottom: "100px"
                }}
            >
                <Header />
            </div>

            <div
                className="d-flex p-4"
                style={{
                    minHeight: "100vh",
                    color: "#1b2a41",
                    backgroundColor: "white"
                }}
            >

                {smallScreen && (
                    <SideBar
                        onSearch={handleAISearch}
                    />
                )}

                <div className="col-12 col-md-12 col-lg-9">

                    <p
                        className="pt-4"
                        style={{ color: "gray" }}
                    >
                        {data.length} results
                    </p>

                    {!smallScreen && (
                        <MobileSidebar />
                    )}

                    <div className="row">

                        {data.length === 0 && (

                            <div className="d-flex justify-content-center align-items-center">
                                لا يوجد سكنات حاليا
                            </div>

                        )}

                        {data.map((hotel) => (

                            <div
                                className="col-6 col-md-4 col-lg-4 mb-4"
                                key={hotel?.res_id}
                            >

                                <div
                                    className="card me-2"
                                    style={{
                                        cursor: "pointer",
                                        color: "#1b2a41"
                                    }}
                                >

                                    <img
                                        src={getImageUrl(
                                            hotel?.ResidenceImages?.[0]?.image_url
                                        )}
                                        style={{
                                            aspectRatio: "14/15",
                                            objectFit: "cover"
                                        }}
                                        alt={
                                            hotel?.title
                                        }
                                    />

                                    <div className="card-body bg-light">

                                        <h5 className="card-title">
                                            {hotel?.title ||
                                                "Residence"}
                                        </h5>

                                        <p
                                            style={{
                                                color: "gray"
                                            }}
                                        >
                                            {hotel?.address}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <button
                                                className="btn"
                                                style={{
                                                    width: "80%",
                                                    height: "40px",
                                                    borderRadius: "8px",
                                                    backgroundColor:
                                                        "#1b2a41",
                                                    color: "white"
                                                }}
                                                onClick={() =>
                                                    navigate(
                                                        `/details/${hotel?.res_id}`
                                                    )
                                                }
                                            >
                                                info
                                            </button>

                                            <div
                                                style={{
                                                    cursor: "pointer"
                                                }}
                                                onClick={() =>
                                                    toggleWishlist(
                                                        hotel
                                                    )
                                                }
                                            >

                                                {liked[
                                                    hotel.res_id
                                                ] ? (

                                                    <i
                                                        className="bi bi-heart-fill"
                                                        style={{
                                                            fontSize:
                                                                "35px",
                                                            position:
                                                                "relative",
                                                            bottom:
                                                                "3.5px",
                                                            color:
                                                                "#1b2a41"
                                                        }}
                                                    />

                                                ) : (

                                                    <i
                                                        className="bi bi-heart"
                                                        style={{
                                                            fontSize:
                                                                "35px",
                                                            position:
                                                                "relative",
                                                            bottom:
                                                                "3.5px"
                                                        }}
                                                    />

                                                )}

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