import Link from "next/link"

const CustomerHeader=()=>{
    return(
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} className="logo" src="https://ik.imagekit.io/ijaviuxqen/ik-genimg-prompt-Food%20delivery%20app%20logo/4d832b21-f0e9-414a-bbf3-f945e72de6f4/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=6fffece1697d8271a5cf2c385ee8325acd7f36b8" alt=""/>
            </div>
            <ul>
            <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login</Link>
                </li>
                <li>
                    <Link href="/">SignUp</Link>
                </li>
                <li>
                    <Link href="/">Cart(0)</Link>
                </li>
                <li>
                    <Link href="/">Add Restaurant</Link>
                </li>
            </ul>
        </div>
    )
}
export default CustomerHeader