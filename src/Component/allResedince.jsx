import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AllResidence = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/categories")
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [])

    return (
        <>
            <div className="d-flex" style={{ minHeight: "100vh", color: "#1b2a41" }}>
                <div className="col-7 col-md-3 col-lg-3 p-4" style={{ position: "sticky", top: 0, height: "fit-content", alignSelf: "flex-start" }}>
                    <h4 className="mb-3"><b>Recommendation system</b></h4>
                    <div className="p-4 bg-light" style={{ borderRadius: 5 }}>
                        <h4><b>Filters</b></h4>
                        <h5>Price Range</h5>
                        <select className="form-select form-select-sm w-80" aria-label="Small select example">
                            <option selected>Any Price</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h5 className="mt-4">Distance</h5>
                        <select className="form-select form-select-sm w-100" aria-label="Small select example">
                            <option selected>Any Distance</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h5 className="mt-4">Amenities</h5>
                        <div className="form-check" style={{ color: "#1b2a41" }}>
                            <input className="form-check-input" type="checkbox" id="wifi" value="wifi" />
                            <label className="form-check-label" htmlFor="wifi">Wi-fi</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="ac" value="ac" />
                            <label className="form-check-label" htmlFor="ac">Air conditioning</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="parking" value="parking" />
                            <label className="form-check-label" htmlFor="parking">Parking</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="laundry" value="laundry" />
                            <label className="form-check-label" htmlFor="laundry">Laundry</label>
                        </div>
                        <button className="btn text-center mt-4 w-100" style={{ width: "80%", backgroundColor: "#1b2a41", color: "white" }}>Apply filter</button>
                    </div>
                </div>
                <div className="col-5 col-md-9 col-lg-9">
                    <p className="pt-4" style={{ color: "gray" }}>{data.length} results</p>
                    <div className="row">
                        {data.map((hotel) => (
                            <div className="col-12 col-md-4 col-lg-4 mb-4" key={hotel?.id}>
                                <div className="card" style={{ cursor: "pointer", color: "#1b2a41" }} onClick={() => navigate(`/details/${hotel?.id}`)}>
                                    <img src={hotel?.image} style={{ aspectRatio: "14/15" }} alt={hotel?.name} />
                                    <div className="card-body bg-light">
                                        <h5 className="card-title">{hotel?.name}</h5>
                                        <p className="card-text">Test</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllResidence