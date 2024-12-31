import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState();
    const router=useRouter()

    useEffect(() => {
        loadFoodItems();
    }, []);
     
    const loadFoodItems = async () => {
        const restaurantData=JSON.parse(localStorage.getItem('restaurantUser'));
       const resto_id=restaurantData._id
        
        let response = await fetch("http://localhost:3000/api/restaurant/foods/"+resto_id);
        response = await response.json();
        if (response.success) {
            setFoodItems(response.result);
        }
        else {
            alert("food item list not loading")
        }

    }

    const deleteFoodItem=async(id)=>{
        let response=await fetch("http://localhost:3000/api/restaurant/foods/"+id,{
            method:'delete',
        })
        response=await response.json();
        if(response.success){
            loadFoodItems()
        }
        else{
            alert("Failed to delete food item")
        }

    }
    return (
        <div className="">
            <h1>Food Items</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.No.</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {foodItems && foodItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img src={item.img_path} alt=""/></td>
                            <td>
                                <button onClick={()=>router.push('dashboard/'+item._id)}>Edit</button>
                                <button onClick={()=>deleteFoodItem(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default FoodItemList