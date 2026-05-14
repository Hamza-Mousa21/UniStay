import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const WishList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:3000/wishlist", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const json = await res.json()
            console.log(json)
            // ✅ Filter out entries where Residence is null
            setData(Array.isArray(json) ? json.filter((item) => item?.Residence !== null) : [])
        }
        getData()
    }, [])

    const handleRemoveFromFavourites = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/wishlist/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (res.ok) {
                // ✅ Remove from UI instantly without refetching
                setData((prev) => prev.filter((item) => item.id !== id))
            }
        } catch (err) {
            console.error("Delete error:", err)
        }
    }

    return (
        <>
            <div className="row p-4">
                <h3>العودة لكل السكنات</h3>

                {(!Array.isArray(data) || data.length === 0) && (
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <h4 className="mt-5">لا يوجد سكنات بالمفضلة</h4>
                    </div>
                )}

                {data.map((hotel) => (
                    <div className="col-6 col-md-4 col-lg-4 mb-4" key={hotel?.id}>
                        <div className="card me-2" style={{ cursor: "pointer", color: "#1b2a41" }}>

                            <img
                                src={hotel?.Residence?.ResidenceImages?.[0]?.image_url}
                                style={{ aspectRatio: "14/15" }}
                                alt={hotel?.Residence?.address}
                            />

                            <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                                <i
                                    className="bi bi-heart-fill"
                                    style={{ fontSize: "35px", position: "relative", bottom: "3.5px" }}
                                    onClick={() => handleRemoveFromFavourites(hotel?.res_id)}
                                />
                            </div>

                            <div className="card-body bg-light">
                                <h5 className="card-title">{hotel?.Residence?.address}</h5>
                                <div className="d-flex w-100 justify-content-around">
                                    <button
                                        className="btn"
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            borderRadius: "8px",
                                            backgroundColor: "#1b2a41",
                                            color: "white"
                                        }}
                                        onClick={() => navigate(`/details/${hotel?.Residence?.res_id}`)}
                                    >
                                        info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WishList;