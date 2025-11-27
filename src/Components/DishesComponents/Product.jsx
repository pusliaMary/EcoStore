import { useState } from "react"
import { ChangeQuantity } from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"
import { addItemToFavourites } from "../../redux/favouritesSlice"
import heartStatic from '..//..//assets/heart.png'


export const Product = ( {product} ) => {
 
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
       
    return (
    <div className='columnCenter'>

        <img className='img' src={`./${product.img}.jpg`} alt="pic" height="600px"/> 
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <div className="productButtons">
            <button className="add" onClick={() => {dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
            <button className="favour" onClick={() => {dispatch(addItemToFavourites({product, quantity}))}}><img width='50px' height='50px' src={heartStatic} alt='icon'/></button>
        </div>
            
    </div>
)
}