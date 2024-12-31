import { useState } from "react"

const AddFoodItem = (props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [path, setPath] = useState("")
    const [description, setDescription] = useState("")
    const [error,setError]=useState(false)

    const handleAddFoodItem = async () => {
        
        if(!name || !path || !price || !description){
            setError(true);
            return false;
        }else{
            setError(false)
        }
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"))
        if (restaurantData) {
            resto_id = restaurantData._id
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "POST",
            body: JSON.stringify({ name, price, img_path: path, description, resto_id })
        })
        response = await response.json();
        if (response.success) {
            alert("Food item added");
            props.setAddItem(false);
        }else{
            alert("Food item not added")
        }

    }
    return (
        <div className="container">
            <h1>Add new food item</h1>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter food name" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
                {error && !name && <span className="input-error">Please enter valid Name</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter Price" className="input-field" value={price} onChange={(e) => setPrice(e.target.value)} />
                {error && !price && <span className="input-error">Please enter valid Price</span>}
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Upload Image" className="input-field" value={path} onChange={(e) => setPath(e.target.value)} />
                {error && !path && <span className="input-error">Please Upload valid Image</span>}
            </div>

            <div className="input-wrapper">
                <input type="text" placeholder="Enter description" className="input-field" value={description} onChange={(e) => setDescription(e.target.value)} />
                {error && !description && <span className="input-error">Please add description here </span>}
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
            </div>
        </div>
    )
}
export default AddFoodItem