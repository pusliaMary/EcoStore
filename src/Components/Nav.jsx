import { AllCategories } from "./Filter/AllCategories"

import { About } from "./About"

import { useSelector } from "react-redux"
import { getTotalPrice } from "../redux/cartSlice"
import logo from '../assets/shop.jpg'
import cart from '../assets/cart.png'
import back from '../assets/back.jpg'


export const Nav = () => {

    const totalPrice = useSelector(getTotalPrice)

    return (
        <div className="columnCenter">
            <div className="nav">
                <div className="links">
                    <a href={<About />}>About</a>
                    <a href={<AllCategories />}>Shop</a>
                </div>
                <img src={logo} alt="logo" width="150px" className="logo"/>

                <div className="upperCartTotal">
                    
                    <img className="cartIcon" width='70px' src={cart}/>
                    <h3>TOTAL: ${totalPrice}</h3>
                    
                </div>

            </div>
            <img src={back} alt="logo" width="150px" className="back"/>

    </div>
    )
}