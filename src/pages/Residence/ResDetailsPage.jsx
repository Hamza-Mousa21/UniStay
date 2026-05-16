import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactSidebar from "../../components/Contact/ContactSidebar.jsx";
import MobileContactBar from "../../components/Contact/MobileContactBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Feedback from "../../components/Comments/feedback.jsx";
import ImagesCarousel from "../../components/Carousel/Carousel.jsx";
import Header from '../../components/Header/Header.jsx'

const BASE_URL = "http://localhost:3000"

const ResDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [hotel, setHotel] = useState(null)
    const [images, setImages] = useState([])
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768)
    const [selected, setSelected] = useState(0)
    const [mobileSelectedImage, setMobileSelectedImage] = useState(0)
    const [moreImagesButton, setMoreImagesButton] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [average, setAverage] = useState(null)
    const [totalRatings, setTotalRatings] = useState(0)

    const token = localStorage.getItem("token")

    // ================= GET HOTEL =================
    useEffect(() => {
        const getHotel = async () => {
            try {
                const res = await fetch(`${BASE_URL}/residence/${id}`)
                if (!res.ok) { console.log("API error:", res.status); return }
                const data = await res.json()
                console.log(data)
                setHotel(data.residence)
                setImages(data.residence.ResidenceImages)
            } catch (err) {
                console.error(err)
            }
        }
        if (id) getHotel()
    }, [id])

    // ================= GET AVERAGE RATING =================
    useEffect(() => {
        const getAverage = async () => {
            try {
                const res = await fetch(`${BASE_URL}/Ratings/residence/${id}/average`)
                const data = await res.json()
                setAverage(data.average)
                setTotalRatings(data.total)
            } catch (error) {
                console.error("Error fetching average:", error)
            }
        }
        if (id) getAverage()
    }, [id])

    // ================= GET WISHLIST STATE =================
    useEffect(() => {
        if (id && token) getLikedResidence()
    }, [id])

    // ================= RESPONSIVE =================
    useEffect(() => {
        const handleIsMobileState = () => setIsMobile(window.innerWidth >= 768)
        window.addEventListener("resize", handleIsMobileState)
        return () => window.removeEventListener("resize", handleIsMobileState)
    }, [])

    // ================= ADD / REMOVE WISHLIST =================
    const addToWishList = async () => {
        try {
            const method = clicked ? "DELETE" : "POST"
            const res = await fetch(`${BASE_URL}/wishlist/${id}`, {
                method: method,
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (res.ok) setClicked(!clicked)
        } catch (err) {
            console.error("Wishlist error:", err)
        }
    }

    // ================= CHECK IF LIKED =================
    const getLikedResidence = async () => {
        try {
            const res = await fetch(`${BASE_URL}/wishlist/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (!res.ok) { console.log("Error fetching wishlist state"); return }
            const data = await res.json()
            setClicked(data.isWishlisted)
        } catch (err) {
            console.error("Wishlist error:", err)
        }
    }

    if (!hotel) return <div className="text-center">Loading</div>

    const func = () => clicked ? "bi bi-heart-fill" : "bi bi-heart"

    const handleSelectedPic = (i) => {
        if (i === 0) return
        setImages(prev => {
            const updated = [...prev]
            ;[updated[0], updated[i]] = [updated[i], updated[0]]
            return updated
        })
        setSelected(0)
    }

    let restImages = 0
    if (images.length - 5 === 0) {
        restImages = false
    } else {
        restImages = images.length - 5
    }

    const handleMoreImagesButton = () => setMoreImagesButton(true)

    // ================= AVERAGE STARS RENDERER =================
    const renderAverageStars = () => {
        if (!average) return <p style={{ color: "gray", fontSize: "0.85rem" }}>لا يوجد تقييمات بعد</p>

        const fullStars = Math.floor(average)
        const hasHalf = average - fullStars >= 0.25 && average - fullStars < 0.75
        const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

        return (
            <div className="d-flex align-items-center gap-2">
                <div className="d-flex gap-1">
                    {[...Array(fullStars)].map((_, i) => (
                        <i key={`full-${i}`} className="bi bi-star-fill" style={{ color: "#f5c518" }} />
                    ))}
                    {hasHalf && <i className="bi bi-star-half" style={{ color: "#f5c518" }} />}
                    {[...Array(emptyStars)].map((_, i) => (
                        <i key={`empty-${i}`} className="bi bi-star" style={{ color: "#f5c518" }} />
                    ))}
                </div>
                <span style={{ color: "#1b2a41", fontWeight: "600" }}>{average}</span>
                <span style={{ color: "gray", fontSize: "0.85rem" }}>({totalRatings} تقييم)</span>
            </div>
        )
    }

    return (
        <>
            <div style={{ display: "block", marginBottom: "100px" }}>
                <Header />
            </div>

            {moreImagesButton && (
                <div style={{
                    position: "absolute",
                    width: "100%",
                    backgroundColor: "#1b2a41",
                    zIndex: "555",
                    padding: "20px",
                    top: "3.5%",
                    left: "50%",
                    transform: "translate(-50%)",
                    marginTop: "65px"
                }}>
                    <p
                        style={{ position: "absolute", top: "18px", right: "25px", color: "white", cursor: "pointer" }}
                        onClick={() => setMoreImagesButton(false)}
                    >
                        X
                    </p>
                    <div style={{ width: "82%", position: "relative", right: "5%", transform: "translate(-5%)" }}>
                        <ImagesCarousel images={images.slice(4)} totalImages={images.length} startIndex={4} />
                    </div>
                </div>
            )}

            <div className="container mt-4 col-12 col-md-12 col-lg-12" style={{ backgroundColor: "white" }}>

                {/* BACK BUTTON */}
                <div className="mb-3 d-flex" style={{ cursor: "pointer" }} onClick={() => navigate("/all-residence")}>
                    <ArrowBackIcon sx={{ color: "#1b2a41" }} />
                    <p className="mb-3" style={{ textDecoration: "none", color: "#1b2a41" }}>
                        <b> العودة لكل السكنات</b>
                    </p>
                </div>

                {/* IMAGES SECTION */}
                <div className="d-flex">

                    {/* LEFT IMAGES */}
                    <div className={`${images.length >= 2 ? "col-md-6 col-lg-5" : "d-none"}`}>
                        {isMobile && images.length >= 2 && (
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", height: "65vh", direction: "ltr" }}>

                                {images.length === 2 && (
                                    <div className="card" style={{ cursor: "pointer", gridColumn: "1 / -1", height: "50%" }} onClick={() => handleSelectedPic(1)}>
                                        <img src={`${BASE_URL}${images[1]?.image_url}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                )}

                                {images.length === 3 && images.slice(1, 3).map((img, index) => (
                                    <div className="card" key={index} style={{ cursor: "pointer" }} onClick={() => handleSelectedPic(index + 1)}>
                                        <img src={`${BASE_URL}${img?.image_url}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                ))}

                                {images.length >= 4 && (
                                    <>
                                        {images.slice(1, 4).map((img, index) => (
                                            <div className="card" key={index} style={{ cursor: "pointer" }} onClick={() => handleSelectedPic(index + 1)}>
                                                <img src={`${BASE_URL}${img?.image_url}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </div>
                                        ))}
                                        {restImages > 0 && (
                                            <div className="card overflow-hidden" style={{ position: "relative", cursor: "pointer" }} onClick={() => handleSelectedPic(4)}>
                                                <img src={`${BASE_URL}${images[4]?.image_url}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                <div
                                                    style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}
                                                    onClick={(e) => { e.stopPropagation(); handleMoreImagesButton() }}
                                                >
                                                    <p style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>+{restImages}</p>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* MAIN IMAGE */}
                    <div className={`${images.length >= 2 && isMobile ? "col-md-6 col-lg-7" : "col-12"} me-2`}>
                        <div className="card">
                            {isMobile && <img src={`${BASE_URL}${images[selected]?.image_url}`} style={{ aspectRatio: "5/4", height: "58vh" }} />}
                            {!isMobile && <img src={`${BASE_URL}${images[mobileSelectedImage]?.image_url}`} style={{ aspectRatio: "5/4", height: "58vh" }} />}
                            {!isMobile && (
                                <p style={{ position: "absolute", top: "20px", right: "20px", border: "1px solid transparent", padding: "5px", width: "auto", borderRadius: "8px", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "white" }}>
                                    {mobileSelectedImage + 1}/{images.length}
                                </p>
                            )}
                        </div>

                        {!isMobile && (
                            <div className="d-flex mt-2" style={{ width: "100%", height: "150px", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", gap: "6px", cursor: "grab" }}>
                                {images.map((img, i) => (
                                    <div key={i} onClick={() => setMobileSelectedImage(i)} style={{ flexShrink: 0, height: "14vh", border: mobileSelectedImage === i ? "3.5px solid #1b2a41" : "none", borderRadius: "8px", overflow: "hidden" }}>
                                        <img src={`${BASE_URL}${img?.image_url}`} className="card" style={{ height: "100%", pointerEvents: "none" }} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* DETAILS SECTION */}
                <div className="row mt-5">

                    {/* CONTACT */}
                    <div className="col-md-6 col-lg-4">
                        {isMobile && <ContactSidebar owner_id={hotel.owner_id} />}
                        {!isMobile && <MobileContactBar owner_id={hotel.owner_id} />}
                    </div>

                    {/* DETAILS */}
                    <div className="col-12 col-md-6 col-lg-8">

                        {/* PRICE + HEART */}
                        <div className="d-flex justify-content-between">
                            <i className={func()} style={{ fontSize: "35px", position: "relative", bottom: "10px", cursor: "pointer" }} onClick={addToWishList} />
                            <div className="d-flex" style={{ alignItems: "baseline", color: "#1b2a41" }}>
                                <p style={{ color: "gray" }}>شهريا/</p>
                                <h2>{hotel.rent_price}JD</h2>
                            </div>
                        </div>

                        {/* AVAILABILITY BADGE */}
                        <span className="badge mb-3" style={{ backgroundColor: hotel.is_available ? "#28a745" : "#dc3545", fontSize: "0.85rem" }}>
                            {hotel.is_available ? "متاح الآن" : "غير متاح"}
                        </span>

                        {/* DESCRIPTION */}
                        <h4 style={{ color: "#1b2a41" }}>الوصف</h4>
                        <p style={{ color: "gray" }}>{hotel.description}</p>

                        {/* ADDRESS */}
                        <h4 style={{ color: "#1b2a41" }}>العنوان</h4>
                        <p style={{ color: "gray" }}>
                            <i className="bi bi-geo-alt-fill me-1" />
                            {hotel.address} — {hotel.neighborhood}
                        </p>

                        {/* PROPERTY INFO */}
                        <h4 style={{ color: "#1b2a41" }}>تفاصيل السكن</h4>
                        <div className="row g-2 mb-3">
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-house-door me-1" /><small>النوع</small>
                                    <div><strong>{hotel.housing_type}</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-door-open me-1" /><small>الغرف</small>
                                    <div><strong>{hotel.rooms}</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-droplet me-1" /><small>الحمامات</small>
                                    <div><strong>{hotel.bathrooms}</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-people me-1" /><small>السعة</small>
                                    <div><strong>{hotel.capacity} شخص</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-building me-1" /><small>رقم المبنى / الطابق</small>
                                    <div><strong>{hotel.building_num} / ط{hotel.floor_num}</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-mortarboard me-1" /><small>المسافة عن الجامعة</small>
                                    <div><strong>{hotel.distance_from_university}د</strong></div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="p-2 rounded" style={{ backgroundColor: "#f8f9fa", color: "#1b2a41" }}>
                                    <i className="bi bi-gender-ambiguous me-1" /><small>متاح لـ</small>
                                    <div><strong>{hotel.available_for}</strong></div>
                                </div>
                            </div>
                        </div>

                        {/* AMENITIES */}
                        {(hotel.wifi || hotel.parking || hotel.security) && <h4 style={{ color: "#1b2a41" }}>المرافق</h4>}
                        <div className="d-flex gap-2 flex-wrap mb-3">
                            {hotel.wifi && (
                                <span className="badge p-2" style={{ backgroundColor: "#1b2a41", fontSize: "0.85rem" }}>
                                    <i className="bi bi-wifi me-1" />واي فاي
                                </span>
                            )}
                            {hotel.parking && (
                                <span className="badge p-2" style={{ backgroundColor: "#1b2a41", fontSize: "0.85rem" }}>
                                    <i className="bi bi-car-front me-1" />موقف سيارات
                                </span>
                            )}
                            {hotel.security && (
                                <span className="badge p-2" style={{ backgroundColor: "#1b2a41", fontSize: "0.85rem" }}>
                                    <i className="bi bi-shield-check me-1" />حراسة
                                </span>
                            )}
                        </div>

                        {/* RATING */}
                        <h4 style={{ color: "#1b2a41" }}>التقييم</h4>
                        {renderAverageStars()}

                    </div>
                </div>

                <Feedback res_id={id} />

            </div>

            <Footer />
        </>
    )
}

export default ResDetailsPage