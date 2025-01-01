"use client"
import CustomerHeader from "@/app/_components/CustomerHeader"
import { useEffect, useState } from "react"

const Page = (props) => {
    const name=props.params.name
    const [restaurantDetails,setRestaurantDetails]=useState()
    const [foodItems,setFoodItems]=useState([])

    useEffect(()=>{
        loadRestaurantDetails()
    },[])
    const loadRestaurantDetails=async()=>{
        const id=props.searchParams.id
        let response=await fetch("http://localhost:3000/api/customer/"+id)
        response=await response.json()
        if(response.success){
            setRestaurantDetails(response.details)
            setFoodItems(response.foodItems)
        }
    }
    return (
        <div>
            <CustomerHeader/>
            <div className="restaurant-page-banner">
                <h1>{decodeURI(name)}</h1>       
            </div>
            <div className="detail-wrapper">
                <h3>Contact: {restaurantDetails?.contact}</h3>
                <h3>City: {restaurantDetails?.city}</h3>
                <h3>Address: {restaurantDetails?.address}</h3>
                <h3>Email: {restaurantDetails?.email}</h3>
            </div>
            <div className="food-item-wrapper">
                {foodItems.length>0 ?foodItems.map((item)=>(
                    <div className="list-item">
                        <div><img style={{width:100}} src={item.img_path}/></div>
                        <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div className="description">{item.description}</div>
                        <button>Add to cart</button>
                        </div>
                        
                    </div>
                )):(
                    <h1>No Food items added now</h1>
                )}
            </div>
        </div>
    )
}
export default Page