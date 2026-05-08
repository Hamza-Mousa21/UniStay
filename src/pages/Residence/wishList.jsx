import { useEffect, useState } from "react";

const WishList=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch(`http://localhost:3000/wishlist`)
            const data= await response.json()
            setData(data)
            console.log(data)
        }
        getData()

        

    },[])
    return(
        <>
            <div className="container">
                Hi HamzaMousa

            </div>

        </>
    )
}

export default WishList;