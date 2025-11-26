import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"
import { addItemToFavourites } from "../../redux/favouritesSlice"
import heartStatic from '..//..//assets/heart.png'


export const Dish = ( {dish} ) => {
 
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
       
    return (
    <div className='columnCenter'>

        <img className='img' src={`./${dish.img}.jpg`} alt="pic" height="600px"/> 
        <h3>{dish.name}</h3>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <div className="productButtons">
            <button className="add" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
            <button className="favour" onClick={() => {dispatch(addItemToFavourites({dish, quantity}))}}><img width='50px' height='50px' src={heartStatic} alt='icon'/></button>
        </div>
            
    </div>
)
}