import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TextField } from "@mui/material";
import ContactSidebar from "../../components/Contact/ContactSidebar.jsx";
import MobileContactBar from "../../components/Contact/MobileContactBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Feedback from "../../components/Comments/feedback.jsx";
import ImagesCarousel from "../../components/Carousel/Carousel.jsx";

const ResDetails = () => {
    const { id } = useParams()

    const [hotel, setHotel] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768)
    const [selected, setSelected] = useState(0)
    const [moreImagesButton, setMoreImagesButton] = useState(false)
    const [clicked, setClicked] = useState(false)

    const token = localStorage.getItem("token")

    // ================= GET HOTEL =================
    useEffect(() => {
        const getHotel = async () => {
            try {
                const res = await fetch(`http://localhost:3000/residence/${id}`)

                if (!res.ok) {
                    console.log("API error:", res.status)
                    return
                }

                const data = await res.json()
                setHotel(data.residence)

            } catch (err) {
                console.error(err)
            }
        }

        if (id) {
            getHotel()
        }

    }, [id])

    // ================= GET WISHLIST STATE =================
    useEffect(() => {
        if (id && token) {
            getLikedResidence()
        }
    }, [id])

    // ================= MOBILE RESPONSIVE =================
    useEffect(() => {
        const handleIsMobileState = () => {
            setIsMobile(window.innerWidth >= 768)
        }

        window.addEventListener("resize", handleIsMobileState)

        return () => {
            window.removeEventListener("resize", handleIsMobileState)
        }

    }, [])

    // ================= ADD / REMOVE WISHLIST =================
    const addToWishList = async () => {
        try {

            const method = clicked ? "DELETE" : "POST"

            const res = await fetch(`http://localhost:3000/wishlist/${id}`, {
                method: method,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (res.ok) {
                setClicked(!clicked)
            }

        } catch (err) {
            console.error("Wishlist error:", err)
        }
    }

    // ================= CHECK IF LIKED =================
    const getLikedResidence = async () => {
        try {

            const res = await fetch(`http://localhost:3000/wishlist/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (!res.ok) {
                console.log("Error fetching wishlist state")
                return
            }

            const data = await res.json()

            setClicked(data.isWishlisted)

        } catch (err) {
            console.error("Wishlist error:", err)
        }
    }

    if (!hotel) return <div className="text-center">Loading</div>

    const images = hotel.ResidenceImages

    const func = () => {
        return clicked ? "bi bi-heart-fill" : "bi bi-heart"
    }

    const handleSelectedPic = (i) => {
        setSelected(i)
    }

    const Amenities = [
        "Wi-Fi",
        "Air Conditioning",
        "Swimming Pool",
        "Gym",
        "Room Service",
        "Parking"
    ]

    let restImages = 0

    if (images.length - 5 === 0) {
        restImages = false
    } else {
        restImages = images.length - 5
    }

    const handleMoreImagesButton = () => {
        setMoreImagesButton(true)
    }

    return (
        <>
            {moreImagesButton && (
                <div style={{
                    position: "absolute",
                    width: "100%",
                    backgroundColor: "black",
                    zIndex: "555",
                    padding: "20px",
                    top: "3.5%",
                    left: "50%",
                    transform: "translate(-50%)"
                }}>
                    <p
                        style={{
                            position: "absolute",
                            top: 0,
                            right: "18px",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onClick={() => setMoreImagesButton(false)}
                    >
                        X
                    </p>

                    <div style={{
                        width: "82%",
                        position: "relative",
                        right: "5%",
                        transform: "translate(-5%)"
                    }}>
                        <ImagesCarousel image={images[0]?.image_url} />
                    </div>
                </div>
            )}

            <div
                className="container mt-4 col-12 col-md-12 col-lg-12"
                style={{ backgroundColor: "white" }}
            >

                <div className="mb-3">
                    <ArrowBackIcon sx={{ color: "#1b2a41" }} />

                    <a
                        href="/all-residence"
                        className="mb-3"
                        style={{
                            textDecoration: "none",
                            color: "#1b2a41"
                        }}
                    >
                        <b> العودة لكل السكنات</b>
                    </a>
                </div>

                <div className="d-flex">

                    <div className="col-md-6 col-lg-5">

                        {isMobile && (
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridTemplateRows: "1fr 1fr",
                                gap: "8px",
                                height: "65vh",
                                direction: "ltr"
                            }}>

                                {images.slice(1, 4).map((img, index) => (
                                    <div
                                        className="card"
                                        key={index}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSelectedPic(index + 1)}
                                    >
                                        <img
                                            src={img?.image_url}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }}
                                        />
                                    </div>
                                ))}

                                {restImages > 0 &&
                                    <div
                                        className="card overflow-hidden"
                                        style={{
                                            position: "relative",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => handleSelectedPic(4)}
                                    >
                                        <img
                                            src={images[4]?.image_url}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }}
                                        />

                                        {restImages > 0 && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    backgroundColor: "rgba(0,0,0,0.5)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleMoreImagesButton()
                                                }}
                                            >
                                                <p style={{
                                                    color: "white",
                                                    fontSize: "1.5rem",
                                                    fontWeight: "bold"
                                                }}>
                                                    +{restImages}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        )}
                    </div>

                    <div className="col-12 col-md-6 col-lg-7 me-2">

                        <div className="card">
                            <img
                                src={images[selected]?.image_url}
                                style={{
                                    aspectRatio: "5/4",
                                    height: "58vh"
                                }}
                            />

                            {!isMobile && (
                                <p style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    border: "1px solid transparent",
                                    padding: "5px",
                                    width: "auto",
                                    borderRadius: "8px",
                                    background: "rgba(0,0,0,0.4)",
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                    color: "white",
                                }}>
                                    {selected + 1}/{images.length}
                                </p>
                            )}
                        </div>

                    </div>
                </div>

                <div className="row mt-5">

                    <div className="col-md-6 col-lg-4">
                        {isMobile && <ContactSidebar />}
                        {!isMobile && <MobileContactBar />}
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">

                        <div className="d-flex justify-content-between">

                            <i
                                className={func()}
                                style={{
                                    fontSize: "35px",
                                    position: "relative",
                                    bottom: "10px",
                                    cursor: "pointer"
                                }}
                                onClick={addToWishList}
                            />

                            <div
                                className="d-flex"
                                style={{
                                    alignItems: "baseline",
                                    color: "#1b2a41"
                                }}
                            >
                                <p style={{ color: "gray" }}>شهريا/</p>
                                <h2>300JD</h2>
                            </div>

                        </div>

                    </div>
                </div>

                <Feedback res_id={id} />

            </div>

            <Footer />
        </>
    )
}

export default ResDetails