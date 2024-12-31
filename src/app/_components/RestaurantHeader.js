"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const RestaurantHeader = () => {
    const [details, setDetails] = useState();
    const router = useRouter()
    const pathname=usePathname();

    useEffect(() => {
        let data = localStorage.getItem("restaurantUser");
        if (!data && pathname=="/restaurant/dashboard") {
            router.push('/restaurant');
        }
        else if(data && pathname=="/restaurant"){
            router.push('/restaurant/dashboard')
        }
        else {
            setDetails(JSON.parse(data));
        }
    },[])
    const Logout=()=>{
        localStorage.removeItem("restaurantUser")
        router.push('/restaurant')
    }
    return (
        <div className="header-wrapper">
            <div className="logo">
                <Image width={60} height={60} className="logo" src="https://ik.imagekit.io/ijaviuxqen/ik-genimg-prompt-Food%20delivery%20app%20logo/4d832b21-f0e9-414a-bbf3-f945e72de6f4/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=6fffece1697d8271a5cf2c385ee8325acd7f36b8" alt="" />
            </div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                {
                    details && details.name ? 
                    <>
                    <li><Link href='/'>Profile</Link></li>
                    <li><button onClick={Logout}>Logout</button></li>
                    </>
                    : <li><Link href='/'>Login/SignUp</Link></li>
                }
            </ul>

        </div>
    )
}
export default RestaurantHeader