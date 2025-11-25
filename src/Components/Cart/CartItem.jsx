import dataDishes from "../../Data/DataDishes"
import { removeItemFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../../redux/cartSlice"
import { ChangeQuantity } from "./ChangeQuantity"

export const CartItem = ({cartItem}) => {
    
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
    

    return (<div className="columnCenter header">
        <div className="cartDish">
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <p>${dishes.price * cartItem.quantity}</p>
        </div>
                              
        <span className="removeItem" onClick={()=> dispatch (removeItemFromCart({cartItemId: cartItem.id}))}>
            <img  className="icon" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25px"/>
        </span>
    </div>)
}