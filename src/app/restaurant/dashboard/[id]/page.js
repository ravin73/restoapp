"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const EditFoodItem = (props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [path, setPath] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter();

    useEffect(() => {
        handleLoadFoodItem();
    },[])
    const handleLoadFoodItem = async () => {
        let response=await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id);
        response =await response.json();
        if(response.success){
            setName(response.result.name);
            setPrice(response.result.price);
            setPath(response.result.img_path);
            setDescription(response.result.description);
            
        }
    }
    const handleEditFoodItem = async () => {

        if (!name || !path || !price || !description) {
            setError(true);
            return false;
        } else {
            setError(false)
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods/edit/" + props.params.id,{
            method:'PUT',
            body: JSON.stringify({name,img_path:path,price,description})
        });
        response = await response.json();
        if(response.success){
            router.push('../dashboard')
        }
        else {
            alert('Data is not updated please try again later')
        }

    }
    return (
        <div className="container">
            <h1>Update food item</h1>
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
                <button className="button" onClick={handleEditFoodItem}>Update Food Item</button>
            </div>
            <div className="input-wrapper">
                <button className="button" onClick={() => router.push('../dashboard')}>Back to food item List</button>
            </div>
        </div>
    )
}
export default EditFoodItem