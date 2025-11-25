import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"

export const Dish = ( {dish} ) => {
 
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
       
    return (
    <div className='columnCenter'>

        <img className='img' src={`./${dish.img}.jpg`} alt="pic" height="600px"/> 
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="add" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        
            
    </div>
)
}