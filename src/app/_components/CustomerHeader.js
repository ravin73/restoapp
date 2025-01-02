import Link from "next/link"
import { useEffect, useState } from "react";

const CustomerHeader = (props) => {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    const [cartNumber, setCartNumber] = useState(cartStorage?.length);
    const [cartItem, setCartItem] = useState();

    useEffect(() => {
        if (props.cartData) {
            console.log(props);
            if (cartNumber) {
                if (cartNumber[0].resto_id != props.cartData.resto_id) {
                    localStorage.removeItem('cart')
                    setCartNumber(1);
                    setCartItem([props.cartData])
                    localStorage.setItem('cart', JSON.stringify([props.cartData]));
                } else {
                    let localCartItem = cartItem;
                    localCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
                    setCartItem(localCartItem);
                    setCartNumber(cartNumber + 1);
                    localStorage.setItem('cart', JSON.stringify(localCartItem));
                }

            } else {
                setCartNumber(1)
                setCartItem([props.cartData])
                localStorage.setItem('cart', JSON.stringify([props.cartData]));
            }

        }


    }, [props.cartData])

    return (
        <div className="header-wrapper">
            <div className="logo">
                <img style={{ width: 100 }} className="logo" src="https://ik.imagekit.io/ijaviuxqen/ik-genimg-prompt-Food%20delivery%20app%20logo/4d832b21-f0e9-414a-bbf3-f945e72de6f4/image.jpg?tr=f-jpg%2Ch-1024%2Cw-1024&ik-s=6fffece1697d8271a5cf2c385ee8325acd7f36b8" alt="" />
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
                    <Link href="/">Cart({cartNumber ? cartNumber : 0})</Link>
                </li>
                <li>
                    <Link href="/">Add Restaurant</Link>
                </li>
            </ul>
        </div>
    )
}
export default CustomerHeader