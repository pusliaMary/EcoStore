import { AllCategories } from "./Filter/AllCategories"

import { About } from "./About"

import { useSelector } from "react-redux"
import { getTotalPrice } from "../Redux/cartSlice"
import logo from '../assets/shop.jpg'
import cart from '../assets/cart.png'
import back from '../assets/back.jpg'
import heart from '../assets/favour.gif'

import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

gsap.registerPlugin()


export const Nav = () => {

    const totalPrice = useSelector(getTotalPrice)

    useGSAP(()=> {
        gsap.from('.anchor', {y:-100, delay: 1, duration: 2, stagger:1, ease: 'cine', scale:1.2})
        
    })

    return (
        <div className="columnCenter">
            <div className="nav">
                <div className="links">
                    <a href='#about' className="anchor">About</a>
                    <a href="#shop" className="anchor">Shop</a>
                </div>
                
                <img src={logo} alt="logo" width="150px" className="logo"/>

                <div className="flexAround">
                    <a href="#favour"><img className="cartIcon" width='70px' height='70px' src={heart} alt='icon'/></a>
                    <div className="upperCartTotal">
                        
                        <img className="cartIcon" width='70px' src={cart} alt='icon'/>
                        <h3>TOTAL: ${totalPrice}</h3>
                        
                    </div>
                </div>

            </div>
            <img src={back} alt="nackPick" className="back"/>

    </div>
    )
}