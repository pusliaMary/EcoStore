import dataProducts from "../../Data/DataProducts"
import { removeItemFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"


export const CartItem = ({cartItem}) => {
    
    const products = dataProducts.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch()
    

    return (<div className="columnCenter header">
        <div className="cartProduct">
            <p>{products.name}</p>
            <p>{cartItem.quantity} pc(s)</p>
            <p>${products.price * cartItem.quantity}</p>
        </div>
                              
        <span className="removeItem" onClick={()=> dispatch (removeItemFromCart({cartItemId: cartItem.id}))}>
            <img  className="icon" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25px"/>
        </span>
    </div>)
}