import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice"
import cart from '../../assets/cart.png'


export const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)

    return (<div className="cartBlock columnCenter">
        <div className="cart">
            <img className="cartIcon" width='70px' src={cart}/>
            <h3>TOTAL: ${totalPrice}</h3>
        </div>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
    </div>)
}